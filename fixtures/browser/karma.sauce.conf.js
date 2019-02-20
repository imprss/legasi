const path = require('path');
const resolve = pkg => path.join(__dirname, '../../packages', pkg, 'dist', 'index.dev.esm.js');

const customLaunchers = {
	slChrome: {
		base: 'SauceLabs',
		browserName: 'chrome'
	},
	slIphone5: {
		base: 'SauceLabs',
		browserName: 'iphone',
		version: '9.3'
	},
	slSafari8: {
		base: 'SauceLabs',
		browserName: 'safari',
		platform: 'OS X 10.10'
	},
	slSafari9: {
		base: 'SauceLabs',
		browserName: 'safari',
		platform: 'OS X 10.11'
	},
	sl_mac_firfox: {
		base: 'SauceLabs',
		browserName: 'firefox',
		platform: 'OS X 10.12'
	},
	// Saucelabs launcher and webdriver are not compatible with Safari 12, uncomment when its fixed in the upstream
	// sl_safari: {
	//   base: 'SauceLabs',
	//   browserName: 'safari',
	//   version: 'latest'
	// },
	slIE10: {
		base: 'SauceLabs',
		browserName: 'internet explorer',
		platform: 'Windows 7',
		version: '10'
	},
	slIE11: {
		base: 'SauceLabs',
		browserName: 'internet explorer',
		platform: 'Windows 7',
		version: '11'
	},
	slEdge13: {
		base: 'SauceLabs',
		browserName: 'MicrosoftEdge',
		version: '13',
		platform: 'Windows 10'
	},
	slEdge14: {
		base: 'SauceLabs',
		browserName: 'MicrosoftEdge',
		version: '14',
		platform: 'Windows 10'
	},
	slEdge16: {
		base: 'SauceLabs',
		browserName: 'MicrosoftEdge',
		version: '16',
		platform: 'Windows 10'
	},
	sl_mac_chrome: {
		base: 'SauceLabs',
		browserName: 'chrome',
		platform: 'macOS 10.12'
	},
	slFirefox: {
		base: 'SauceLabs',
		browserName: 'firefox'
	},
	slAndroid5: {
		base: 'SauceLabs',
		browserName: 'android',
		version: '5.1'
	},
	slAndroid7: {
		base: 'SauceLabs',
		browserName: 'android',
		version: '6.0'
	}
};

module.exports = function (config) {
	config.set({
		basePath: '../../',

		frameworks: ['jasmine'],

		files: [path.join(__dirname, '../../fixtures/browser/test.index.js')],

		preprocessors: {
			'./fixtures/browser/test.index.js': ['webpack', 'gzip']
		},

		client: {
			jasmine: {
				random: false // Adding jasmine.random false disables test random order
			}
		},

		reporters: ['dots', 'saucelabs'],
		sauceLabs: {
			build: 'TRAVIS #' + process.env.TRAVIS_BUILD_NUMBER + ' (' + process.env.TRAVIS_BUILD_ID + ')',
			tunnelIdentifier: process.env.TRAVIS_JOB_NUMBER,
			startConnect: true,
			testName: `legasi`,
			recordVideo: false,
			recordScreenshots: false,
			videoUploadOnPass: false,
			recordLogs: false,
			captureHtml: false,
			commandTimeout: 400
		},

		plugins: ['karma-jasmine', 'karma-gzip-preprocessor', 'karma-webpack', 'karma-sauce-launcher'],

		customLaunchers: customLaunchers,
		browsers: Object.keys(customLaunchers),

		reportSlowerThan: 2000,

		captureTimeout: 600000,
		browserNoActivityTimeout: 600000,
		browserDisconnectTolerance: 2,
		processKillTimeout: 20000,
		browserDisconnectTimeout: 10000,

		browserConsoleLogOptions: {
			level: 'warn',
			terminal: false
		},
		colors: true,
		singleRun: true,
		autoWatch: false,
		concurrency: 1,

		webpack: {
			devtool: 'none',
			mode: 'none',
			optimization: {
				splitChunks: false,
				runtimeChunk: false,
				minimize: true
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
