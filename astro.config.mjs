import astroRemark from "@astrojs/markdown-remark";

// @ts-check
export default /** @type {import('astro').AstroUserConfig} */ ({
  buildOptions: {
    site: "https://apparitor.org/",
  },
  renderers: [
    // Enable the Preact renderer to support Preact JSX components.
    "@astrojs/renderer-preact",
    // Enable the React renderer, for the Algolia search component
    "@astrojs/renderer-react",
  ],
  markdownOptions: {
    render: [
      astroRemark,
      {
        remarkPlugins: ["remark-code-titles"],
        rehypePlugins: [
          ["rehype-autolink-headings", { behavior: "prepend" }],
          ["rehype-toc", { headings: ["h2", "h3"] }],
          "rehype-slug",
        ],
      },
    ],
  },
});
