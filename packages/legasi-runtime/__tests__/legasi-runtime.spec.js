import legasi from 'legasi-runtime';

describe('legasi-runtime', () => {
	it('should start', () => {
		var isOk = false;
		if (legasi) isOk = true;
		expect(isOk).toBe(true);
	})
});