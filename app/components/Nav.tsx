import { Link } from "@remix-run/react";
export default function Nav() {
  return (
    <div className="spacing-x-8 flex h-16 items-center bg-sky-500 pl-8 ">
      <Link to="/" className="mr-6 h-4/5 items-center">
        <img
          className="h-full rounded-full"
          src="/images/rabbit.jpeg"
          alt="a rabbit riding a snail"
        />
      </Link>
      <ul className="items-center">
        <Link
          to="/blog"
          className="text-xl font-bold text-slate-100 hover:text-slate-200"
        >
          <li>Blog</li>
        </Link>
      </ul>
    </div>
  );
}
