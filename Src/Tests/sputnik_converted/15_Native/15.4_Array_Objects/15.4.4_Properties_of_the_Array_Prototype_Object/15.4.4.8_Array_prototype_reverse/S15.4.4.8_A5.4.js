// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
* @name: S15.4.4.8_A5.4;
* @section: 15.4.4.8;
* @assertion: The length property of reverse is 0;
* @description: reverse.length === 1;
*/


// Converted for Test262 from original Sputnik source

ES5Harness.registerTest( {
id: "S15.4.4.8_A5.4",

path: "TestCases/15_Native/15.4_Array_Objects/15.4.4_Properties_of_the_Array_Prototype_Object/15.4.4.8_Array_prototype_reverse/S15.4.4.8_A5.4.js",

assertion: "The length property of reverse is 0",

description: "reverse.length === 1",

test: function testcase() {
   //CHECK#1
if (Array.prototype.reverse.length !== 0) {
  $ERROR('#1: Array.prototype.reverse.length === 0. Actual: ' + (Array.prototype.reverse.length));
}


 }
});
