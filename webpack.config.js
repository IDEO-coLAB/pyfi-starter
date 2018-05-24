var webpack = require('webpack');

module.exports = {
  context: __dirname,
  entry: "./client.js",
  mode: process.env.NODE_ENV || 'development',
  output: {
    path: __dirname,
    filename: "./public/client-built.js"
  },
};
