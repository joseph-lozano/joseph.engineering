import type { MetaFunction } from "@remix-run/cloudflare";
import {
  Link,
  Links,
  LiveReload,
  Meta,
  Outlet,
  // Scripts,
  ScrollRestoration,
} from "@remix-run/react";
import type { LinksFunction } from "@remix-run/cloudflare";
import styles from "./tailwind.css";
import Nav from "./components/Nav";

export const links: LinksFunction = () => [{ rel: "stylesheet", href: styles }];

export const meta: MetaFunction = () => ({
  charset: "utf-8",
  title: "Joseph Lozano",
  viewport: "width=device-width,initial-scale=1",
});

export default function App() {
  return (
    <html lang="en">
      <head>
        <Meta />
        <Links />
      </head>
      <body>
        <div className="flex min-h-screen flex-col">
          <Nav />
          <div className="flex-grow">
            <Outlet />
          </div>
        </div>
        <ScrollRestoration />
        {/* <Scripts /> */}
        <LiveReload />
      </body>
    </html>
  );
}
