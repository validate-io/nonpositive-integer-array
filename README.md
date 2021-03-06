Nonpositive Integer Array
===
[![NPM version][npm-image]][npm-url] [![Build Status][travis-image]][travis-url] [![Coverage Status][coveralls-image]][coveralls-url] [![Dependencies][dependencies-image]][dependencies-url]

> Validates if a value is a nonpositive integer array.


## Installation

``` bash
$ npm install validate.io-nonpositive-integer-array
```

For use in the browser, use [browserify](https://github.com/substack/node-browserify).


## Usage

``` javascript
var isValid = require( 'validate.io-nonpositive-integer-array' );
```

#### isValid( value )

Validates if a `value` is a nonpositive integer `array`.

``` javascript
var value = [ -3, -1, 0, -2 ];

var bool = isValid( value );
// returns true
```

__Note__: the method will return `false` for an empty `array`.


## Examples

``` javascript
var isValid = require( 'validate.io-nonpositive-integer-array' );

console.log( isValid( [-3,-1,0,-2] ) );
// returns true

console.log( isValid( [] ) );
// returns false

console.log( isValid( [-3.14] ) );
// returns false

console.log( isValid( [0,1] ) );
// returns false
```

To run the example code from the top-level application directory,

``` bash
$ node ./examples/index.js
```


## Tests

### Unit

Unit tests use the [Mocha](http://mochajs.org) test framework with [Chai](http://chaijs.com) assertions. To run the tests, execute the following command in the top-level application directory:

``` bash
$ make test
```

All new feature development should have corresponding unit tests to validate correct functionality.


### Test Coverage

This repository uses [Istanbul](https://github.com/gotwarlost/istanbul) as its code coverage tool. To generate a test coverage report, execute the following command in the top-level application directory:

``` bash
$ make test-cov
```

Istanbul creates a `./reports/coverage` directory. To access an HTML version of the report,

``` bash
$ make view-cov
```


---
## License

[MIT license](http://opensource.org/licenses/MIT). 


## Copyright

Copyright &copy; 2015. Athan Reines.


[npm-image]: http://img.shields.io/npm/v/validate.io-nonpositive-integer-array.svg
[npm-url]: https://npmjs.org/package/validate.io-nonpositive-integer-array

[travis-image]: http://img.shields.io/travis/validate-io/nonpositive-integer-array/master.svg
[travis-url]: https://travis-ci.org/validate-io/nonpositive-integer-array

[coveralls-image]: https://img.shields.io/coveralls/validate-io/nonpositive-integer-array/master.svg
[coveralls-url]: https://coveralls.io/r/validate-io/nonpositive-integer-array?branch=master

[dependencies-image]: http://img.shields.io/david/validate-io/nonpositive-integer-array.svg
[dependencies-url]: https://david-dm.org/validate-io/nonpositive-integer-array

[dev-dependencies-image]: http://img.shields.io/david/dev/validate-io/nonpositive-integer-array.svg
[dev-dependencies-url]: https://david-dm.org/dev/validate-io/nonpositive-integer-array

[github-issues-image]: http://img.shields.io/github/issues/validate-io/nonpositive-integer-array.svg
[github-issues-url]: https://github.com/validate-io/nonpositive-integer-array/issues
