const path = require('path');
const resolve = pkg => path.join(__dirname, '../../packages', pkg, 'dist', 'index.dev.esm.js');

console.info('*** Starting karma tests. ***');

const preProcessorOptions = {};

preProcessorOptions['./fixtures/browser/test.index.js'] = ['webpack'];

module.exports = function (config) {
	config.set({
		basePath: '../../',

		frameworks: ['detectBrowsers', 'jasmine'],

		detectBrowsers: {
			usePhantomJS: false,
			preferHeadless: false,

			postDetection(browserList) {
				const results = [];

				if (browserList.indexOf('Chrome') > -1) {
					results.push('Chrome');
				}

				if (browserList.indexOf('Firefox') > -1) {
					results.push('Firefox');
				}

				if (browserList.indexOf('IE') > -1) {
					results.push('IE');
				}

				if (browserList.indexOf('Edge') > -1) {
					results.push('Edge');
				}

				return results;
			}
		},

		files: [path.join(__dirname, '../../fixtures/browser/', 'test.index.js')],

		preprocessors: preProcessorOptions,

		plugins: [
			'karma-ie-launcher',
			'karma-detect-browsers',
			'karma-jasmine',
			'karma-firefox-launcher',
			'karma-webpack',
			'karma-chrome-launcher',
			'karma-edge-launcher'
		],

		reporters: ['progress'],

		reportSlowerThan: 500,

		browserConsoleLogOptions: {
			level: 'warn',
			terminal: false
		},
		colors: true,
		autoWatch: false,
		concurrency: 1,

		client: {
			jasmine: {
				random: false // Adding jasmine.random false disables test random order
			}
		},

		webpack: {
			devtool: 'none',
			mode: 'none',
			optimization: {
				splitChunks: false,
				runtimeChunk: false,
				minimize: false
			},
			module: {
				rules: [
					{
						test: /\.(js|jsx|tsx|ts)$/,
						loader: path.join(__dirname, 'node_modules/babel-loader'),
						exclude: /node_modules/,
						options: {
							babelrc: false,
							presets: [
								[
									'@babel/preset-env',
									{
										loose: true,
										targets: {
											browsers: ['ie >= 10', 'safari > 7']
										}
									}
								],
								'@babel/typescript'
							],
							plugins: [['@babel/plugin-proposal-class-properties', { loose: true }]]
						}
					}
				]
			},
			resolve: {
				alias: {
					'legasi-runtime': resolve('legasi-runtime'),
					'legasi-ui': resolve('legasi-ui'),
					'legasi-cli': resolve('legasi-cli')
				},
				extensions: ['.js', '.jsx', '.tsx', '.ts'],
				mainFields: ['browser', 'main']
			},
			devServer: {
				noInfo: true
			},
			stats: 'errors-only',
			performance: {
				hints: false
			}
		}
	});
};
