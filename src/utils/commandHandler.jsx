import about from "../commands/about";
import help from "../commands/help";
import skills from "../commands/skills";
import contact from "../commands/contact";
import photo from "../commands/photo";
import projects from "../commands/projects";
import showProject from "../commands/project";
import sudoPhoto from "../commands/sudoPhoto";

const commands = {
  about,
  help,
  skills,
  projects,
  contact,
  photo,
  "sudo photo": sudoPhoto,
};

export default function handleCommand(cmd) {
  const trimmed = cmd.trim().toLowerCase();

  if (trimmed.startsWith("project ")) {
    const args = trimmed.split(" ").slice(1);
    return showProject(args);
  }

  const command = commands[trimmed];

  if (!command) {
    return <p>Command not found. Type 'help'.</p>;
  }

  if (typeof command === "function") {
    return command();
  }

  return command;
}
