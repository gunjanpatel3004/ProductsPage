const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
	entry: {
		main: "./js/main.js",
		listProducts: "./js/list-product.js",
		createProduct: "./js/create-product.js",
	},

	output: {
		path: path.resolve(__dirname, "dist"),
		filename: "[name].js",
	},

	module: {
		rules: [
			{
				test: /\.scss$/,
				use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"],
			},
			{
				test: /\.js$/,
				exclude: /node_modules/,
				use: "babel-loader",
			},
		],
	},

	plugins: [
		new MiniCssExtractPlugin({
			filename: "[name].css",
		}),
		new HtmlWebpackPlugin({
			template: "./index.html",
			chunks: ["main"],
			filename: "index.html",
		}),
		new HtmlWebpackPlugin({
			template: "./create-product.html",
			chunks: ["createProduct"],
			filename: "create-product.html",
		}),
		new HtmlWebpackPlugin({
			template: "./list-products.html",
			chunks: ["listProducts"],
			filename: "list-products.html",
		}),
	],

	devServer: {
		static: path.resolve(__dirname, "dist"),
		port: 9000,
	},
};
