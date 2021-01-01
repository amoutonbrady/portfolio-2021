module.exports = {
  "globDirectory": "dist/",
  "globPatterns": [
    "**/*.{html,avif,jpeg,webp,png,xml,ico,webmanifest,jpg,js,txt,css}"
  ],
  "swDest": "dist/sw.js",
  "skipWaiting": true,
  "maximumFileSizeToCacheInBytes": 3_500_000,
};