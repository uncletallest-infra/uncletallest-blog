import { feedPlugin } from "@11ty/eleventy-plugin-rss";
import syntaxHighlight from "@11ty/eleventy-plugin-syntaxhighlight";

const PATHPREFIX = process.env.PATHPREFIX || "";

export default function (eleventyConfig) {

  // === Plugins ===
  eleventyConfig.addPlugin(syntaxHighlight);
  eleventyConfig.addPlugin(feedPlugin, {
    type: "atom",
    outputPath: "/feed.xml",
    collection: {
      name: "posts",
      limit: 20,
    },
    metadata: {
      language: "en",
      title: "Uncle Tallest Productions",
      subtitle: "Weird Wisdom & Off the Rails",
      base: "https://uncletallest.productions/",
      author: {
        name: "Jerry Jackson",
        email: "",
      },
    },
  });

  // === Passthrough copies ===
  eleventyConfig.addPassthroughCopy({ "public/assets": "assets" });

  // === Custom prefix filter — prepends PATHPREFIX exactly once ===
  eleventyConfig.addFilter("prefix", (path) => {
    if (!PATHPREFIX) return path;
    return PATHPREFIX.replace(/\/$/, "") + path;
  });

  // === Collections ===
  eleventyConfig.addCollection("weirdWisdom", (collectionApi) =>
    collectionApi
      .getFilteredByGlob("content/weird-wisdom/*.md")
      .sort((a, b) => b.date - a.date)
  );

  eleventyConfig.addCollection("offTheRails", (collectionApi) =>
    collectionApi
      .getFilteredByGlob("content/off-the-rails/*.md")
      .sort((a, b) => b.date - a.date)
  );

  eleventyConfig.addCollection("posts", (collectionApi) =>
    collectionApi
      .getFilteredByGlob("content/**/*.md")
      .sort((a, b) => b.date - a.date)
  );

  // === Filters ===
  eleventyConfig.addFilter("readableDate", (date) =>
    new Date(date).toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    })
  );

  eleventyConfig.addFilter("personaLabel", (persona) =>
    persona === "weird-wisdom" ? "Weird Wisdom" : "Off the Rails"
  );

  // === Shortcodes ===
  eleventyConfig.addShortcode("colorCode", (code, colors) => {
    return `<div class="color-code-block">
      <pre class="color-code-pre">${code}</pre>
      <div class="color-code-legend">
        ${colors.map(c => `<span class="legend-item" style="--item-color: ${c.color}">${c.label}</span>`).join("")}
      </div>
    </div>`;
  });

  return {
    dir: {
      input: ".",
      includes: "src/_includes",
      data: "data",
      output: "_site",
    },
    markdownTemplateEngine: "njk",
    htmlTemplateEngine: "njk",
  };
}
