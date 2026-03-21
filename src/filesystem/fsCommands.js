import filesystem from "./fs";

export const HOME = "/home/ak";

export function resolvePath(cwd, target) {
  if (!target || target === "~") return HOME;
  if (target.startsWith("/")) return normalize(target);
  if (target === "..") {
    const parts = cwd.split("/").filter(Boolean);
    parts.pop();
    return "/" + parts.join("/") || "/";
  }
  if (target === ".") return cwd;
  return normalize(cwd + "/" + target);
}

function normalize(p) {
  const parts = p.split("/").filter(Boolean);
  const out = [];
  for (const part of parts) {
    if (part === "..") out.pop();
    else if (part !== ".") out.push(part);
  }
  return "/" + out.join("/") || "/";
}

export function fsLs(cwd, args = []) {
  const target = args[0] ? resolvePath(cwd, args[0]) : cwd;
  const node = filesystem[target];
  if (!node) return { error: `ls: cannot access '${args[0] || target}': No such file or directory` };
  if (node.type === "file") return { output: [target.split("/").pop()] };
  const children = node.children || [];
  return { output: children };
}

export function fsCat(cwd, args = [], isSudo = false) {
  if (!args[0]) return { error: "cat: missing operand" };
  const target = resolvePath(cwd, args[0]);
  const node = filesystem[target];
  if (!node) return { error: `cat: ${args[0]}: No such file or directory` };
  if (node.type === "dir") return { error: `cat: ${args[0]}: Is a directory` };
  if (node.secret && !isSudo) return {
    error: `cat: ${args[0]}: Permission denied\nhint: sudo cat ${args[0]}`,
    permissionDenied: true,
  };
  return { output: node.content };
}

export function fsCd(cwd, args = []) {
  const target = args[0] ? resolvePath(cwd, args[0]) : HOME;
  const node = filesystem[target];
  if (!node) return { error: `cd: ${args[0]}: No such file or directory`, cwd };
  if (node.type === "file") return { error: `cd: ${args[0]}: Not a directory`, cwd };
  return { cwd: target };
}

export function fsTree(cwd, args = []) {
  const target = args[0] ? resolvePath(cwd, args[0]) : cwd;
  const lines = [];

  function walk(path, prefix) {
    const node = filesystem[path];
    if (!node || node.type !== "dir") return;
    const children = (node.children || []);
    children.forEach((child, i) => {
      const isLast = i === children.length - 1;
      const childPath = (path === "/" ? "/" : path + "/") + child.replace(/\/$/, "");
      const childNode = filesystem[childPath] || filesystem[childPath + "/"];
      const isDir = childNode && childNode.type === "dir";
      lines.push(prefix + (isLast ? "└── " : "├── ") + child);
      if (isDir) walk(childPath, prefix + (isLast ? "    " : "│   "));
    });
  }

  const rootNode = filesystem[target];
  if (!rootNode) return { error: `tree: ${target}: No such file or directory` };
  lines.push(target);
  walk(target, "");
  return { output: lines.join("\n") };
}
