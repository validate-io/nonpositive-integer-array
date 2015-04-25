'use strict';

// MODULES //

var isArray = require( 'validate.io-array' ),
	isNonPositiveInteger = require( 'validate.io-nonpositive-integer' );


// IS NONPOSITIVE INTEGER ARRAY //

/**
* FUNCTION: isNonPositiveIntegerArray( value )
*	Validates if a value is a nonpositive integer array.
*
* @param {*} value - value to be validated
* @returns {Boolean} boolean indicating if a value is a nonpositive integer array
*/
function isNonPositiveIntegerArray( value ) {
	var len, i;
	if ( !isArray( value ) ) {
		return false;
	}
	len = value.length;
	if ( !len ) {
		return false;
	}
	for ( i = 0; i < len; i++ ) {
		if ( !isNonPositiveInteger( value[i] ) ) {
			return false;
		}
	}
	return true;
} // end FUNCTION isNonPositiveIntegerArray()


// EXPORTS //

module.exports = isNonPositiveIntegerArray;
