import legasi from 'legasi-cli';

describe('legasi-cli', () => {
	it('should start', () => {
		var isOk = false;
		if (legasi) isOk = true;
		var result = legasi.test(true);
		var result2 = legasi.test(false);
		expect(isOk).toBe(true);
		expect(result).toBe("yes");
		expect(result2).toBe("also false");
	})
});