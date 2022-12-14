function countVowelConsonant(str) {
    const vowels = "aeiou"
    const nums = str.split('').map(letter => vowels.includes(letter) ? 1 : 2)
    return nums.reduce((a,b) => a + b, 0)
}

/**
* Test Suite 
*/
describe('countVowelConsonant()', () => {
    it('returns total of vowels(1) and consonants(2) to be added', () => {
        // arrange
        const value = 'abcde';
        
        // act
        const result = countVowelConsonant(value);

        // log
        console.log("result: ", result);
        
        // assert
        expect(result).toBe(8);
    });
});