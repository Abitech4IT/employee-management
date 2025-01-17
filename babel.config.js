// babel.config.js
module.exports = {
  presets: [
    [
      "@babel/preset-env",
      { targets: { node: "current" }, useBuiltIns: "usage", corejs: 3 },
    ],
    "@babel/preset-typescript",
    ["@babel/preset-react", { runtime: "automatic" }],
  ],
};
