import { createFileRoute } from "@tanstack/react-router";
import RJSLogo from '/logo.svg'

export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
  return (
    <div className="p-2">
      <div>
        <img src={RJSLogo} className="logo" alt="RJS logo" />
      </div>

      <h1>React Jump Start</h1>

      <div className="card">
        list of included things - tailwind v4 - react 19 - react-router v7
      </div>
    </div>
  );
}
