/**
 * @type {import('@remix-run/dev').AppConfig}
 */
module.exports = {
  serverBuildTarget: "vercel",
  server: process.env.NODE_ENV === "development" ? undefined : "./server.js",
  ignoredRouteFiles: ["**/.*"],
  mdx: async filename => {
    const [rehypeHighlight] = await Promise.all([
      import("rehype-highlight").then(mod => mod.default)
    ]);
    return {
      rehypePlugins: [rehypeHighlight]
    }
  }
};
