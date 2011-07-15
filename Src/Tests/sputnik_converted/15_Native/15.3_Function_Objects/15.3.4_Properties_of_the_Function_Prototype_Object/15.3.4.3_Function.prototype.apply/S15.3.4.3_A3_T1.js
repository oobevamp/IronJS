// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
* @name: S15.3.4.3_A3_T1;
* @section: 15.3.4.3;
* @assertion: If thisArg is null or undefined, the called function is passed the global object as the this value;
* @description: Not any arguments at apply function;
*/


// Converted for Test262 from original Sputnik source

ES5Harness.registerTest( {
id: "S15.3.4.3_A3_T1",

path: "TestCases/15_Native/15.3_Function_Objects/15.3.4_Properties_of_the_Function_Prototype_Object/15.3.4.3_Function.prototype.apply/S15.3.4.3_A3_T1.js",

assertion: "If thisArg is null or undefined, the called function is passed the global object as the this value",

description: "Not any arguments at apply function",

test: function testcase() {
   Function("this.field=\"strawberry\"").apply();

//CHECK#1
if (this["field"] !== "strawberry") {
  $ERROR('#1: If thisArg is null or undefined, the called function is passed the global object as the this value');
}

 }
});
