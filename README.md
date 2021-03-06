# Text Preprocessor
Normalizing texts before any natural language processing

## Instalation
Using Yarn:
```
yarn add text-preprocessor
```
Or using NPM:
```
npm i --save text-preprocessor
```

## Usage

```javascript
const preprocessor = require('text-preprocessor');

const text = preprocessor('     that`s great!    \n \t  &amp;  but don’t take too long okay?   \n bjŏȒk—Ɏó ');

text.clean()
    .toLowerCase()
    .unescape()
    .killUnicode()
    .normalizeSingleCurlyQuotes()
    .expandContractions();

console.log(text.toString());
// OUTPUT: "that is great! & but do not take too long okay? bjork-yo"
```


## preprocessor(text) ⇒ [<code>TextPreprocessor</code>](#TextPreprocessor)
Constructs a TextPreprocessor instance


| Param | Type |
| --- | --- |
| text | <code>String</code> |

## Methods

* [TextPreprocessor](#TextPreprocessor)
    * [new TextPreprocessor(text)](#new_TextPreprocessor_new)
    * [.clean()](#TextPreprocessor+clean)
    * [.unescape()](#TextPreprocessor+unescape)
    * [.toLowerCase()](#TextPreprocessor+toLowerCase)
    * [.toString()](#TextPreprocessor+toString)
    * [.expandContractions()](#TextPreprocessor+expandContractions)
    * [.killUnicode()](#TextPreprocessor+killUnicode)
    * [.replace(regexp, value)](#TextPreprocessor+replace)
    * [.remove(regexp)](#TextPreprocessor+remove)
    * [.removeTagsAndMentions()](#TextPreprocessor+removeTagsAndMentions)
    * [.removeSpecialCharachters()](#TextPreprocessor+removeSpecialCharachters)
    * [.removeURLs()](#TextPreprocessor+removeURLs)
    * [.removeParenthesesContents()](#TextPreprocessor+removeParenthesesContents)
    * [.removePunctuation()](#TextPreprocessor+removePunctuation)
    * [.normalizeSingleCurlyQuotes()](#TextPreprocessor+normalizeSingleCurlyQuotes)
    * [.normalizeDoubleCurlyQuotes()](#TextPreprocessor+normalizeDoubleCurlyQuotes)
    * [.defaults()](#TextPreprocessor+defaults)
    * [.chain()](#TextPreprocessor+chain)

<a name="new_TextPreprocessor_new"></a>

### new TextPreprocessor(text)
Normalizing texts before any natural language processing


| Param | Type |
| --- | --- |
| text | <code>string</code> |

<a name="TextPreprocessor+clean"></a>

### textPreprocessor.clean()
and strips extra whitespace from all documents, leaving only at most one whitespace between any two other characters.

**Kind**: instance method of [<code>TextPreprocessor</code>](#TextPreprocessor)
<a name="TextPreprocessor+unescape"></a>

### textPreprocessor.unescape()
Converts the HTML entities &amp;, &lt;, &gt;, &quot;, and &#39; in string to their corresponding characters.

**Kind**: instance method of [<code>TextPreprocessor</code>](#TextPreprocessor)
<a name="TextPreprocessor+toLowerCase"></a>

### textPreprocessor.toLowerCase()
Converts all the alphabetic characters in a string to lowercase.

**Kind**: instance method of [<code>TextPreprocessor</code>](#TextPreprocessor)
<a name="TextPreprocessor+toString"></a>

### textPreprocessor.toString()
returns the result of chains so far

**Kind**: instance method of [<code>TextPreprocessor</code>](#TextPreprocessor)
<a name="TextPreprocessor+expandContractions"></a>

### textPreprocessor.expandContractions()
Replaces all occuring English contractions by their expanded equivalents, e.g. "don't" is changed to "do not".

**Kind**: instance method of [<code>TextPreprocessor</code>](#TextPreprocessor)
<a name="TextPreprocessor+killUnicode"></a>

### textPreprocessor.killUnicode()
Replaces hugely-ignorant, and widely subjective transliteration of latin, cryllic, greek unicode characters with english ascii.

**Kind**: instance method of [<code>TextPreprocessor</code>](#TextPreprocessor)
<a name="TextPreprocessor+replace"></a>

### textPreprocessor.replace(regexp, value)
Replaces any occurrence of the given expression with the givven string

**Kind**: instance method of [<code>TextPreprocessor</code>](#TextPreprocessor)

| Param | Type |
| --- | --- |
| regexp | <code>RegExp</code> |
| value | <code>String</code> |

<a name="TextPreprocessor+remove"></a>

### textPreprocessor.remove(regexp)
Removes any occurrence of the given expression

**Kind**: instance method of [<code>TextPreprocessor</code>](#TextPreprocessor)

| Param | Type |
| --- | --- |
| regexp | <code>RegExp</code> |

<a name="TextPreprocessor+removeTagsAndMentions"></a>

### textPreprocessor.removeTagsAndMentions()
Removes #tags, @mentions from start of the text

**Kind**: instance method of [<code>TextPreprocessor</code>](#TextPreprocessor)
<a name="TextPreprocessor+removeSpecialCharachters"></a>

### textPreprocessor.removeSpecialCharachters()
Removes all special charachters

**Kind**: instance method of [<code>TextPreprocessor</code>](#TextPreprocessor)
<a name="TextPreprocessor+removeURLs"></a>

### textPreprocessor.removeURLs()
Removes Urls and emails

**Kind**: instance method of [<code>TextPreprocessor</code>](#TextPreprocessor)
<a name="TextPreprocessor+removeParenthesesContents"></a>

### textPreprocessor.removeParenthesesContents()
Remove brackets and parentheses contents.

**Kind**: instance method of [<code>TextPreprocessor</code>](#TextPreprocessor)
**Example**
```js
`Hello, this is Mike (example)` to `Hello, this is Mike `
```
<a name="TextPreprocessor+removePunctuation"></a>

### textPreprocessor.removePunctuation()
Removes punctuation from end of the text

**Kind**: instance method of [<code>TextPreprocessor</code>](#TextPreprocessor)
<a name="TextPreprocessor+normalizeSingleCurlyQuotes"></a>

### textPreprocessor.normalizeSingleCurlyQuotes()
Coerce single curly quotes. `don’t` to `don't`

**Kind**: instance method of [<code>TextPreprocessor</code>](#TextPreprocessor)
<a name="TextPreprocessor+normalizeDoubleCurlyQuotes"></a>

### textPreprocessor.normalizeDoubleCurlyQuotes()
Coerce double curly quotes. `it is «Khorzu”` to `it is "Khorzu"`

**Kind**: instance method of [<code>TextPreprocessor</code>](#TextPreprocessor)
<a name="TextPreprocessor+defaults"></a>

### textPreprocessor.defaults()
`clean`,`toLowerCase`,`unescape`,`killUnicode` and `normalizeSingleCurlyQuotes`

**Kind**: instance method of [<code>TextPreprocessor</code>](#TextPreprocessor)
<a name="TextPreprocessor+chain"></a>

### textPreprocessor.chain()
Executes chain of givven method names

**Kind**: instance method of [<code>TextPreprocessor</code>](#TextPreprocessor)
<a name="preprocessor"></a>

## preprocessor(text) ⇒ [<code>TextPreprocessor</code>](#TextPreprocessor)
Normalizing texts before any natural language processing

**Kind**: global function

| Param | Type |
| --- | --- |
| text | <code>String</code> |


