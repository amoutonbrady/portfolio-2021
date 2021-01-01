const htmlmin = require("html-minifier");
const syntaxHighlight = require("@11ty/eleventy-plugin-syntaxhighlight");

const pictureShortcode = require("./shortcodes/picture.shortcode");

module.exports = (config) => {
  config.addPlugin(syntaxHighlight);
  config.addPassthroughCopy({ "static/": '/' });
  config.addNunjucksAsyncShortcode("responsiveimage", pictureShortcode);

  config.addTransform("htmlmin", (content, outputPath) => {
    // TODO: Eleventy 1.0+: use this.inputPath and this.outputPath instead
    if(outputPath.endsWith(".html") ) {
      return htmlmin.minify(content, {
        useShortDoctype: true,
        removeComments: true,
        collapseWhitespace: true
      });
    }

    return content;
  });

  // TODO: Add this when 1.0 is out: 
  // https://www.11ty.dev/docs/data-global-custom/#custom-global-data
  // config.addGlobalData('now', () => Date.now());

  return {
    markdownTemplateEngine: "njk",
    dir: {
      input: "src",
      output: "dist",
    },
  };
};
