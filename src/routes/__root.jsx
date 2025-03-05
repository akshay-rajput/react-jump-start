import { createRootRoute, Link, Outlet } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/router-devtools";

export const Route = createRootRoute({
  component: () => (
    <main
      id="app-container"
      className="app-container border w-full min-h-screen"
    >
      <nav className="text-gray-400 flex items-center justify-center">
        <div className="p-4 flex gap-4 w-6xl max-w-6xl margin-auto">
          <Link to="/" className="[&.active]:font-bold hover:text-blue-500">
            Home
          </Link>
          <Link
            to="/about"
            className="[&.active]:font-bold hover:text-blue-500"
          >
            About
          </Link>
        </div>
      </nav>
      
      <Outlet />
      <TanStackRouterDevtools />
    </main>
  ),
});
