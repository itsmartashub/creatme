module.exports = {
	plugins: [
		// require('autoprefixer'),
		require('postcss-uncss') ({
			html: [
				'src/index.html'
			]
		})
	]
}