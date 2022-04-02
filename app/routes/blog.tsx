import { Outlet } from "@remix-run/react";
import { LinksFunction } from "@remix-run/server-runtime";
import proseStylesheet from "~/styles/prose.css";
import draculaStyleSheet from "~/styles/dracula-prism.css";

export const links: LinksFunction = () => {
  return [
    { rel: "stylesheet", href: proseStylesheet },
    { rel: "stylesheet", href: draculaStyleSheet },
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
