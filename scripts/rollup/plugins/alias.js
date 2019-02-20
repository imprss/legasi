const { resolve, join } = require('path');
const alias = require('rollup-plugin-alias');
const ROOT = join(__dirname, '../../../');

module.exports = alias({
	resolve: ['.js'],
	'legasi-runtime': resolve(ROOT, 'packages/legasi-runtime/dist/index.esm.js'),
	'legasi-ui': resolve(ROOT, 'packages/legasi-ui/dist/index.esm.js'),
	'legasi-cli': resolve(ROOT, 'packages/legasi-cli/dist/index.esm.js')
});
