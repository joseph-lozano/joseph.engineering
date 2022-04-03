import { Link } from "@remix-run/react";
export default function Nav() {
  return (
    <div className="flex h-16 items-center space-x-8 bg-sky-500 pl-8">
      <Link to="/" className="h-4/5 items-center">
        <img
          className="h-full rounded-full"
          src="/images/rabbit.jpeg"
          alt="a rabbit riding a snail"
        />
      </Link>
      <Link
        to="/blog"
        className="text-xl font-bold text-slate-100 hover:text-slate-200"
      >
        Blog
      </Link>
      <a
        href="mailto:blog@josephlozano.xyz"
        className="text-xl font-bold text-slate-100 hover:text-slate-200"
      >
        Email me
      </a>
    </div>
  );
}
