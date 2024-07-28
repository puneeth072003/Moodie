const assert = require('assert');
const getRandomSuggestion = require('../src/Controller/getSuggestion');

describe('getRandomSuggestion', () => {
    it('should return a random suggestion from the given category', () => {
        const positiveSuggestions = getRandomSuggestion('Positive');
        const negativeSuggestions = getRandomSuggestion('Negative');
        const neutralSuggestions = getRandomSuggestion('Neutral');

        assert.notEqual(positiveSuggestions, negativeSuggestions);
        assert.notEqual(positiveSuggestions, neutralSuggestions);
        assert.notEqual(negativeSuggestions, neutralSuggestions);
    });

    it('should return "Invalid category" for an unknown category', () => {
        const unknownSuggestion = getRandomSuggestion('Unknown');
        assert.equal(unknownSuggestion, 'Invalid category');
    });
});