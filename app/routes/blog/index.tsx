import * as helloRemix from "./hello-remix.mdx";
import type { LoaderFunction } from "@remix-run/cloudflare";
import { Link, useLoaderData } from "@remix-run/react";

export const allPosts = [helloRemix];

type LoaderData = {
  recentPosts: typeof helloRemix[];
  highlightedPosts: typeof helloRemix[];
};
export const loader: LoaderFunction = async () => {
  const recentPosts: LoaderData["recentPosts"] = allPosts
    .filter((post) => new Date(post.attributes.date) < new Date())
    .sort(
      (a, b) =>
        new Date(b.attributes.date).valueOf() -
        new Date(a.attributes.date).valueOf()
    )
    .slice(0, 3);
  const highlightedPosts: LoaderData["highlightedPosts"] = [];

  return {
    recentPosts,
    highlightedPosts,
    allPosts,
  };
};

export default function BlogIndex() {
  const { recentPosts, highlightedPosts } = useLoaderData<LoaderData>();

  return (
    <>
      <main className="max-w-7xl">
        <h1 className="text-3xl font-bold leading-5">Welcome to my blog</h1>
        {recentPosts.length > 0 && (
          <>
            <h2 className="leading-2 text-2xl font-semibold">
              Here are some recent posts:
            </h2>

            <div className="grid grid-cols-1 gap-4 sm:grid-cols-1">
              {recentPosts.map((post) => (
                <div
                  key={post.filename}
                  className="relative flex items-center space-x-3 rounded-lg border border-gray-300 bg-white px-6 py-5 shadow-sm focus-within:ring-2 focus-within:ring-sky-500 focus-within:ring-offset-2 hover:border-gray-400"
                >
                  <div className="min-w-0 flex-1">
                    <Link
                      to={post.filename.replace(".mdx", "")}
                      className="no-underline focus:outline-none"
                    >
                      <span className="absolute inset-0" aria-hidden="true" />
                      <p className="text-md font-medium text-gray-900">
                        {post.attributes.title}
                      </p>
                      {post.attributes.date && (
                        <p className="text-sm text-gray-500">
                          Posted {new Date(post.attributes.date).toDateString()}
                        </p>
                      )}
                      {post.attributes.description && (
                        <p className="text-sm text-gray-500">
                          {post.attributes.description}
                        </p>
                      )}
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </>
        )}
        {highlightedPosts.length > 0 && (
          <div>
            <h2 className="leading-2 text-2xl font-semibold">
              Here are some posts that stand the test of time:
            </h2>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-1">
              {highlightedPosts.map((post) => (
                <div
                  key={post.filename}
                  className="relative flex items-center space-x-3 rounded-lg border border-gray-300 bg-white px-6 py-5 shadow-sm focus-within:ring-2 focus-within:ring-sky-500 focus-within:ring-offset-2 hover:border-gray-400"
                >
                  <div className="min-w-0 flex-1">
                    <Link
                      to={post.filename.replace(".mdx", "")}
                      className="no-underline focus:outline-none"
                    >
                      <span className="absolute inset-0" aria-hidden="true" />
                      <p className="text-md font-medium text-gray-900">
                        {post.attributes.title}
                      </p>
                      <p className="text-sm text-gray-500">
                        {post.attributes.description}
                      </p>
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </main>
    </>
  );
}
