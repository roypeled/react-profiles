var HTML = require("html-webpack-plugin");

module.exports = {
	entry: {
		app: "./src/index.jsx"
	},

	output: {
		path: "./dist",
		filename: "app.js"
	},

	module: {
		loaders: [
			{ loader: "babel", test: /.(jsx$|.es6$)/, query: {presets: ["es2015", "react"]}},
			{ loaders: ["css", "style", "sass"], test: /.scss$/}
		]
	},

	plugins: [
		new HTML()
	],

	devtool: "source-maps"
};
