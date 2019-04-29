const defaultOptions = {
    trim: true,
    lowercase: true,
};

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