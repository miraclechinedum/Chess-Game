/* eslint-disable */
const withCSS = require("@zeit/next-css");
// const path = require("path");

module.exports = withCSS({
  // webpack: (config, { isServer }) => {
  //   config.plugins = config.plugins || [];
  //   config.plugins = [...config.plugins];
  //   if (isServer) {
  //     const antStyles = /antd\/.*?\/style\/css.*?/;
  //     const origExternals = [...config.externals];
  //     config.externals = [
  //       (context, request, callback) => {
  //         if (request.match(antStyles)) return callback();
  //         if (typeof origExternals[0] === "function") {
  //           origExternals[0](context, request, callback);
  //         } else {
  //           callback();
  //         }
  //       },
  //       ...(typeof origExternals[0] === "function" ? [] : origExternals)
  //     ];
  //     config.module.rules.unshift({
  //       test: antStyles,
  //       use: "null-loader"
  //     });
  //   }
  //   return config;
  // }
});
