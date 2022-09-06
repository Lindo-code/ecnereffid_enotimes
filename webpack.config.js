const path = require("path");

module.exports = {
  mode: 'development',
  entry: { main: path.resolve(__dirname, "src", "domSupport.js") },
  output: {
    path: path.resolve(__dirname, "build"),
  },
};
