# percent-change

[![Build Status](https://travis-ci.org/evanlucas/percent-change.svg)](https://travis-ci.org/evanlucas/percent-change)
[![codecov.io](https://codecov.io/github/evanlucas/percent-change/coverage.svg?branch=master)](https://codecov.io/github/evanlucas/percent-change?branch=master)

*Note: `percent-change` is only supported on iojs and node v4+.
To use with an older version of node, please use `percent-change@0.1`.*

## Installation

```bash
$ npm install --save percent-change
```

## Tests

```bash
$ npm test
```

## API

### change(from, to, places, fmt)

#### Example

```js
var change = require('percent-change')
var out = change(5, 7, true)
console.log(out)
// => '40.00%'

out = change(5, 7, false)
console.log(out)
// => 0.4
```

To specify the decimal places:

```js
var out = change(5, 7, 0, true)
console.log(out)
// => '40%'
```

#### Params

- from {Number} The _from_ number
- to {Number} The _to_ number
- places {Number} The number of decimal places (optional, defaults to 2)
- fmt {Boolean} Should we format as a percentage? (defaults to false)

### change.format(from, to, places)

#### Example

```js
var change = require('percent-change')
var out = change.format(5, 7)
console.log(out)
// => '40.00%'
```

#### Params

- from {Number} The _from_ number
- to {Number} The _to_ number
- places {Number} The number of decimal places (optional, defaults to 2)

## License

Licensed under the MIT license. For more info, see `LICENSE`
