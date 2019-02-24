import legasi from 'legasi-ui';

describe('legasi-ui', () => {
	it('should start', () => {
		var isOk = false;
		if (legasi) isOk = true;
		var result = legasi.test();
		expect(isOk).toBe(true);
		expect(result).toBe("yes");
	})
});