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

export const links: LinksFunction = () => [{ rel: "stylesheet", href: styles }];

export const meta: MetaFunction = () => ({
  charset: "utf-8",
  title: "New Remix App",
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
          <div className="flex h-16 items-center bg-sky-500 px-8 text-xl font-bold text-slate-100 hover:text-slate-200">
            <ul className="items-center">
              <Link to="/blog">
                <li>Blog</li>
              </Link>
            </ul>
          </div>
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
