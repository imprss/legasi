// This file includes all test files
function requireAll(r) {
	r.keys().forEach(r);
}

requireAll(require.context('../../packages/legasi-runtime/__tests__', true, /\.(js|jsx|tsx|ts)$/));
requireAll(require.context('../../packages/legasi-ui/__tests__', true, /\.(js|jsx|tsx|ts)$/));
requireAll(require.context('../../packages/legasi-cli/__tests__', true, /\.(js|jsx|tsx|ts)$/));
