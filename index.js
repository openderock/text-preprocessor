const CONTRACTIONS = require('./data/contractions');

class TextPreprocessor {
    /**
     * 
     * @param {string} text 
     */
    constructor(text) {
        this.text = text;
    };
    /**
     * Removes the leading and trailing white space and line terminator characters from a string.
     */
    trim() {
        this.text = this.text.trim();
        return this;
    };
    /**
     * Converts all the alphabetic characters in a string to lowercase.
     */
    toLowerCase() {
        this.text = this.text.toLowerCase();
        return this;
    };
    /**
     * returns the result of chains so far
     */
    toString() {
        return this.text;
    };
    /**
     * Replaces all occuring English contractions by their expanded equivalents, e.g. "don't" is changed to "do not".
     */
    expandContractions() {
        for (let key in CONTRACTIONS) {
            this.text = this.text.replace(new RegExp(key, 'gi'), CONTRACTIONS[key][0]);
        }
        return this;
    }
}

/**
 * Normalizing texts before any natural language processing
 * @param {String} text
 * 
 * @returns {TextPreprocessor}
 */
function preprocessor(text) {
    return new TextPreprocessor(text);
}

module.exports = preprocessor;