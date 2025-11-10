export default function CommandOutput({ cmd, response }) {
  return (
    <div className="mb-2">
      <p><b>ak@portfolio:~$</b> {cmd}</p>
      <div>{response}</div>
    </div>
  );
}

