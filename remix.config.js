/**
 * @type {import('@remix-run/dev').AppConfig}
 */
module.exports = {
  serverBuildTarget: "cloudflare-pages",
  server: "./server.js",
  devServerBroadcastDelay: 1000,
  ignoredRouteFiles: [".*"],
  mdx: async () => {
    const rehypeSlug = await import("rehype-slug");
    const rehypePrism = await import("rehype-prism-plus");
    const remarkGfm = await import("remark-gfm");

    return {
      remarkPlugins: [remarkGfm.default],
      rehypePlugins: [rehypeSlug.default, rehypePrism.default],
    };
  },
  // appDirectory: "app",
  // assetsBuildDirectory: "public/build",
  // serverBuildPath: "functions/[[path]].js",
  // publicPath: "/build/",
};
