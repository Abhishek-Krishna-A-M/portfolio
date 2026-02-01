import about from "../commands/about";
import help from "../commands/help";
import skills from "../commands/skills";
import contact from "../commands/contact";
import projects from "../commands/projects";
import showProject from "../commands/project";
import SudoPhoto from "../commands/sudoPhoto";

const commands = {
  about,
  help,
  skills,
  projects,
  contact,
  photo: () => <SudoPhoto isSudo={false} />,
  "sudo photo": () => <SudoPhoto isSudo={true} />,
};

export default function handleCommand(cmd) {
  const trimmed = cmd.trim().toLowerCase();

  if (trimmed.startsWith("project ")) {
    const args = trimmed.split(" ").slice(1);
    return showProject(args);
  }

  const command = commands[trimmed];

  if (!command) return null; // Let Terminal handle 'not found'

  return typeof command === "function" ? command() : command;
}
