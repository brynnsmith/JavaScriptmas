function centuryFromYear(num) {
    const yearString = num.toString()
    if (yearString.endsWith('00')) {
        century = yearString.slice(0, 2)
        return parseInt(century)
    } else {
        century = parseInt(yearString.slice(0, 2)) + 1
        return parseInt(century)
    }
}


/**
* Test Suite 
*/
describe('centuryFromYear()', () => {
    it('returns current century', () => {
        // arrange
        const year = 1905;
        
        // act
        const result = centuryFromYear(year);

        // log
        console.log("result 1: ", result);
        
        // assert
        expect(result).toBe(20);
    });
    
    it('returns current century for edge case of start of century', () => {
        // arrange
        const year = 1700;
        
        // act
        const result = centuryFromYear(year);

        // log
        console.log("result 2: ", result);
        
        // assert
        expect(result).toBe(17);
    });    
});