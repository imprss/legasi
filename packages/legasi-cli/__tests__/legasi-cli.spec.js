import legasi from 'legasi-cli';

describe('state', () => {
	it('legasi should start', () => {
		var isOk = false;
		if (legasi) isOk = true;
		var result = legasi.test();
		expect(isOk).toBe(true);
		expect(result).toBe("yes");
	})
});