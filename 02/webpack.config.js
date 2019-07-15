const path = require("path")
const htmlWebpackpulgin = require("html-webpack-plugin")
const {CleanWebpackPlugin} = require("clean-webpack-plugin")
const webpack = require("webpack")

module.exports = {
  entry: "./src/index.js",
  output:{
    // 必须是绝对路径
    path: path.resolve(__dirname,"dist"),
    // []占位符
    filename: "[name].js",
    // publicPath: ''  公共目录
  },
  // devtool: "source-map",
  // devtool: "inline-source-map",
  //推荐配置
  devtool: "cheap-module-evel-source-map", // 开发环境配置
  // devtool: "cheap-module-source-map", // 生产环境配置
  mode: "development",
  devServer: {
    contentBase: "./dist", //资源文件目录
    open: true,  //自动打开浏览器
    hot: true,   //开启热模块替换
    port: 8081,
    hotOnly: true,
    proxy: {
      "/api": {
        target: "http://localhost:9000"
      }
    }
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ["style-loader","css-loader"]
      }
    ]
  },
  plugins: [
    new CleanWebpackPlugin(),
    new htmlWebpackpulgin({
      template: "./index.html",
      inject: "head",
      filename: "index.html"
    }),
    new webpack.HotModuleReplacementPlugin()
  ]
}