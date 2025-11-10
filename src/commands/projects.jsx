import { projects } from "./project";

export default function listProjects() {
    return (
        <div>
            <p><b>Available projects:</b></p>
            <ul className="ml-4 list-disc">
                {Object.keys(projects).map((key) => (
                    <li key={key}>{key}</li>
                ))}
            </ul>
            <p className="mt-2">
                Type: <b>project &lt;name&gt;</b> to view details
            </p>
        </div>
    );
}
