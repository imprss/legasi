import legasi from 'legasi-runtime';

describe('state', () => {
	it('legasi should start', () => {
		var isOk = false;
		if (legasi) isOk = true;
		expect(isOk).toBe(true);
	})
});