# string-indent

Easy way to get the indent of a string, whether file content or simple string.

## Table of contents
- [Installation](#installation)
- [Usage](#usage)
- [API](#api)
- [Development](#development)
- [Changelog](#changelog)

## Installation

```
$ npm install string-indent
```

Easy, or?

## Usage

```js
const stringIndent = require('string-indent');

// simple
let simpleIndent = stringIndent('  test_string'); // simpleIndent = 2

// multiline
let multilineIndent = stringIndent('   line 1\n  line 2', {multiline: true}); // multilineIndent = [3, 2]
```

## API

#### ```stringIndent(string, options)```
Returns a single indent value or an array of indents (if multiline option is activated).
- ```string``` String - String to get the indent(s) of.
- ```options``` Object (optional)
  - ```multiline``` Boolean - If ```true```, the script will look for multiple
    lines and returns an array instead of a single indent value.

## Development

In the ```test``` directory are a few ```test.*``` files. Be careful, if you´ll
open them in your editor or IDE. The indents could be changed through settings of
those.

Run test:
```
$ npm test
```

## Changelog

- 0.1.2
  - Update dependencies
- 0.1.1
  - Some comment improvements and warnings
- 0.1.0
  - Initial Release
