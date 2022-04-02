import { Outlet } from "@remix-run/react";
import { LinksFunction } from "@remix-run/server-runtime";
import draculaStyleSheet from "~/styles/dracula-prism.css";
import dankMonoStyleSheet from "~/styles/dank-mono.css";

export const links: LinksFunction = () => {
  return [
    { rel: "stylesheet", href: draculaStyleSheet },
    { rel: "stylesheet", href: dankMonoStyleSheet },
  ];
};

export default function BlogLayout() {
  return (
    <>
      <article className="prose mx-auto max-w-4xl px-4 py-20">
        <Outlet />
      </article>
    </>
  );
}
