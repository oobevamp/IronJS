// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * @name: S11.7.1_A3_T2.7;
 * @section: 11.7.1;
 * @assertion: Operator x << y returns ToNumber(x) << ToNumber(y); 
 * @description: Type(x) is different from Type(y) and both types vary between String (primitive or object) and Null;
 */


// Converted for Test262 from original Sputnik source

ES5Harness.registerTest( {
id: "S11.7.1_A3_T2.7",

path: "TestCases/11_Expressions/11.7_Bitwise_Shift_Operators/11.7.1_The_Left_shift_Operator/S11.7.1_A3_T2.7.js",

assertion: "Operator x << y returns ToNumber(x) << ToNumber(y)",

description: "Type(x) is different from Type(y) and both types vary between String (primitive or object) and Null",

test: function testcase() {
   //CHECK#1
if ("1" << null !== 1) {
  $ERROR('#1: "1" << null === 1. Actual: ' + ("1" << null));
}

//CHECK#2
if (null << "1" !== 0) {
  $ERROR('#2: null << "1" === 0. Actual: ' + (null << "1"));
}

//CHECK#3
if (new String("1") << null !== 1) {
  $ERROR('#3: new String("1") << null === 1. Actual: ' + (new String("1") << null));
}

//CHECK#4
if (null << new String("1") !== 0) {
  $ERROR('#4: null << new String("1") === 0. Actual: ' + (null << new String("1")));
}

 }
});
