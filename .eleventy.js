module.exports = function (eleventyConfig) {
  // Output directory: _site

  // Copy `css/` to `_site/css/`
  // Keeps the same directory structure.
  eleventyConfig.addPassthroughCopy("css/");

  // Copy `js/` to `_site/js/`
  // Keeps the same directory structure.
  eleventyConfig.addPassthroughCopy("js/");

  // Copy `assets/` to `_site/assets/`
  // Keeps the same directory structure.
  eleventyConfig.addPassthroughCopy("assets/");

  return {
    dir: {
      output: "docs",
    },
  };
};
