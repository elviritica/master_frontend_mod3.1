import HtmlWebpackPlugin from "html-webpack-plugin";

export default {
  entry: {
    app: "./src/students.js",
  },
  output: {
    filename: "[name].[hash].js",
    clean: true,
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: "babel-loader",
      },
      {
        test: /\.css$/,
        exclude: /node_modules/,
        use: ["style-loader", "css-loader"],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/index.html",
      filename: "index.html",
      scriptLoading: "blocking",
    }),
  ],
  devServer: {
    port: 8080,
    hot: true,
  },
};
