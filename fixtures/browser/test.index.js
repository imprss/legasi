// This file includes all test files
function requireAll(r) {
	r.keys().forEach(r);
}

requireAll(require.context('../../packages/legasi_runtime/__tests__', true, /\.(js|jsx|tsx|ts)$/));
requireAll(require.context('../../packages/legasi_ui/__tests__', true, /\.(js|jsx|tsx|ts)$/));
requireAll(require.context('../../packages/legasi_cli/__tests__', true, /\.(js|jsx|tsx|ts)$/));
