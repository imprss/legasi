module.exports = {
	collectCoverageFrom: [
		"packages/*/src/**/*.ts",
		"!**/*.ts.js",
	],
	coverageDirectory: "coverage",
	coverageReporters: ["html", "lcov", "text"],
	globals: {
		usingJSDOM: true,
		usingJest: true
	},
	moduleFileExtensions: ["ts", "tsx", "js", "jsx"],
	moduleNameMapper: {
		"^legasi(.*?)$": "<rootDir>/packages/legasi$1/src/index.ts"
	},
	rootDir: __dirname,
	setupFiles: ["<rootDir>/scripts/test/requestAnimationFrame.ts"],
	testMatch: [
		"<rootDir>/packages/*/__tests__/**/*spec.@(js|ts)?(x)",
		"<rootDir>/packages/*/__tests__/**/*spec.server.@(js|ts)?(x)"
	],
	testPathIgnorePatterns: [
		"<rootDir>/packages/legasi/__tests__/transition.spec.jsx",
	],
	transform: {
		"^.+\\.jsx?$": "<rootDir>/jest.babel.transform.js",
		"^.+\\.tsx?$": "<rootDir>/jest.ts.transform.js"
	},
	setupFilesAfterEnv: [
		require.resolve("./JEST-DEBUG.js")
	],
	reporters: [["jest-silent-reporter", { "useDots": true }]]
};
