// create a webpack configuration with all common parts included here
function createWebpackConfig(options) {
  return {
    mode: options.mode,
    entry: options.entry,
    output: options.output,
    plugins: options.plugins,
		resolve: {
			fallback: {
				fs: false, // Because of jsrsasign usage of fs
				buffer: false
			}
		},
    module: {
      rules: [
        {
          test: /.js$/,
          use: [
						{
							loader: 'babel-loader'
						}
					],
					exclude: /node_modules/,
          include: __dirname
        }
      ]
    },
    // this is for the sourcemaps
    devtool: options.devtool,
    optimization: options.optimization
  };
}

module.exports = createWebpackConfig;
