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
    * [.clean()](#clean)
    * [.unescape()](#unescape)
    * [.toLowerCase()](#toLowerCase)
    * [.toString()](#toString)
    * [.expandContractions()](#expandContractions)
    * [.killUnicode()](#killUnicode)
    * [.replace(regexp, value)](#replace)
    * [.remove(regexp)](#remove)
    * [.removeTagsAndMentions()](#removeTagsAndMentions)
    * [.removePunctuation()](#removePunctuation)
    * [.normalizeSingleCurlyQuotes()](#normalizeSingleCurlyQuotes)
    * [.normalizeDoubleCurlyQuotes()](#normalizeDoubleCurlyQuotes)
    * [.defaults()](#defaults)
    * [.chain()](#chain)

<a name="new_TextPreprocessor_new"></a>

### new TextPreprocessor(text)
Constructs a TextPreprocessor instance


| Param | Type |
| --- | --- |
| text | <code>string</code> |

<a name="TextPreprocessor+clean"></a>

### clean()
and strips extra whitespace from all documents, leaving only at most one whitespace between any two other characters.

<a name="TextPreprocessor+unescape"></a>

### unescape()
Converts the HTML entities &amp;, &lt;, &gt;, &quot;, and &#39; in string to their corresponding characters.

<a name="TextPreprocessor+toLowerCase"></a>

### toLowerCase()
Converts all the alphabetic characters in a string to lowercase.

<a name="TextPreprocessor+toString"></a>

### toString()
returns the result of chains so far

<a name="TextPreprocessor+expandContractions"></a>

### expandContractions()
Replaces all occuring English contractions by their expanded equivalents, e.g. "don't" is changed to "do not".

<a name="TextPreprocessor+killUnicode"></a>

### killUnicode()
Replaces hugely-ignorant, and widely subjective transliteration of latin, cryllic, greek unicode characters with english ascii.

<a name="TextPreprocessor+replace"></a>

### replace(regexp, value)
Replaces any occurrence of the given expression with the givven string


| Param | Type |
| --- | --- |
| regexp | <code>RegExp</code> |
| value | <code>String</code> |

<a name="TextPreprocessor+remove"></a>

### remove(regexp)
Removes any occurrence of the given expression


| Param | Type |
| --- | --- |
| regexp | <code>RegExp</code> |

<a name="TextPreprocessor+removeTagsAndMentions"></a>

### removeTagsAndMentions()
Removes #tags, @mentions from start of the text

<a name="TextPreprocessor+removePunctuation"></a>

### removePunctuation()
Removes punctuation from end of the text

<a name="TextPreprocessor+normalizeSingleCurlyQuotes"></a>

### normalizeSingleCurlyQuotes()
Coerce single curly quotes. `don’t` to `don't`

<a name="TextPreprocessor+normalizeDoubleCurlyQuotes"></a>

### normalizeDoubleCurlyQuotes()
Coerce double curly quotes. `it is «Khorzu”` to `it is "Khorzu"`

<a name="TextPreprocessor+defaults"></a>

### defaults()
`clean`,`toLowerCase`,`unescape`,`killUnicode` and `normalizeSingleCurlyQuotes`

<a name="TextPreprocessor+chain"></a>

### chain()
Executes chain of givven method names

<a name="preprocessor"></a>


