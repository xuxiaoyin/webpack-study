const path = require("path")
const htmlWebpackpulgin = require("html-webpack-plugin")
const { CleanWebpackPlugin } = require("clean-webpack-plugin")
const MiniCssExtractPlugin = require("mini-css-extract-plugin")

module.exports = {
  // entry: "./src/index.js",
  mode: "development",
  entry: {
    index: "./src/index.js",
    list: "./src/list.js",
    detail: "./src/detail.js"
  },
  output:{
    // 必须是绝对路径
    path: path.resolve(__dirname,"dist"),
    // []占位符
    filename: "[name].js",
    // publicPath: ''  公共目录
  },
  module: {
    rules: [
      {
        test:/\.png|jpe?g|gif$/,
        use:{
          loader: "url-loader",
          options: {
            name: "[name]_[hash].[ext]",
            outputPath: "imgs/",
            limit: 2048
          }
        }
      },
      {
        test:/\.css$/,
        use: [
          // "style-loader",
          MiniCssExtractPlugin.loader,
          "css-loader", 
          {
            loader:  "postcss-loader",
            options: {
              ident:"postcss",
              plugins: [require("autoprefixer")]
            }
          },
        ]
      },
      // postcss-loader  autoprefixer 自动添加前缀
    ]
  },
    plugins: [
      new MiniCssExtractPlugin({
        filename: "[name].css"
      }),
      new CleanWebpackPlugin(),
      new htmlWebpackpulgin({
        title: "hello 我是首页",
        template: "./index.html",
        inject: "head",
        filename: "index.html",
        chunks:["index"]
      }),
      new htmlWebpackpulgin({
        title: "hello 我是列表",
        template: "./index.html",
        inject: "body",
        filename: "list.html",
        chunks:["list"]
      }),
      new htmlWebpackpulgin({
        title: "hello 我是详情",
        template: "./index.html",
        inject: "body",
        filename: "detail.html",
        chunks:["detail"]
      })
    ]
}