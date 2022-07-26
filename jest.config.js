module.exports = {
  preset: "@vue/cli-plugin-unit-jest/presets/typescript-and-babel",
  transform: {
    ".+\\.(css|styl|less|sass|scss|png|jpg|pdf|ttf|woff|woff2)$":
      "jest-transform-stub",
  },
};
