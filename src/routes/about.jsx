import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/about")({
  component: About,
});

function About() {
  return (
    <div className="pt-36 pb-12 flex flex-col gap-6 items-center justify-center text-white">
      <h1 className="text-3xl font-bold">This is about page</h1>

      <div className="card">
        list of included things - tailwind v4 - react 19 - react-router v7
      </div>
    </div>
  );
}
