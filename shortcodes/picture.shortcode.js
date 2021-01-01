const Image = require("@11ty/eleventy-img");
const { resolve, dirname } = require("path");
const dd = require('dedent')

const ROOT = dirname(__dirname);
const CACHE = new Map

function mkSource(imageFormat) {
  const type = `image/${imageFormat[0].format}`;
  const srcset = imageFormat.map((entry) => entry.srcset).join(", ");

  return `<source  type="${type}" srcset="${srcset}" />`;
}

async function pictureShortcode(options) {
  const { src, alt, widths = [300, 600, null] } = options;
  const source = resolve(ROOT, "src", src);


  if (alt === undefined) {
    // You bet we throw an error on missing alt (alt="" works okay)
    throw new Error(`Missing \`alt\` on responsiveimage from: ${source}`);
  }

  const metadata = CACHE.get(source) || (await Image(source, {
    widths,
    formats: ["avif", "webp", "jpeg"],
    outputDir: resolve(ROOT, "dist", "img"),
  }));

  CACHE.set(source, metadata)

  const lowsrc = metadata.jpeg[0];

  const html = dd`
    <picture>
      ${Object.values(metadata).map(mkSource).join("\n")}

      <img
        src="${lowsrc.url}"
        width="${lowsrc.width}"
        height="${lowsrc.height}"
        alt="${alt}"
        class="${options.class || ''}"
      />
    </picture>
  `;

  
  return html
}

module.exports = pictureShortcode;
