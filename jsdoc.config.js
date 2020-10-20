module.exports = {
  source: {
    includePattern: ".+\\.js(doc|x)?$", // Only process file ending in .js, .jsdoc or .jsx
    excludePattern: "(^|\\/|\\\\)_",
    include: ["."], // Check all folders.
    exclude: [
      // exclude directories
      "node_modules",
      "out",
      "src",
      "logs",
      "tests",
      "docs",
    ],
  },
  plugins: [],
  recurseDepth: 10, // Only go 10 levels deep.
  opts: {
    template: "node_modules/minami", // change it to "templates/default" if we don't need a template layout
    readme: "./README.md", // will parse README.md file and show that in documentation [optional]
    package: "./package.json", // parses package.json, so documents can be generated bu version on package.json
    destination: "./docs/", // Where I want my docs to be generated.
    recurse: true, // Same as using -r or --recurse
  },
  tags: {
    allowUnknownTags: false, // We will not need unknown tags for now
    dictionaries: ["jsdoc", "closure"],
  },
  templates: {
    default: {
      outputSourceFiles: false, // setting it to true will enable us to view the files in the documentation
    },
  },
};
