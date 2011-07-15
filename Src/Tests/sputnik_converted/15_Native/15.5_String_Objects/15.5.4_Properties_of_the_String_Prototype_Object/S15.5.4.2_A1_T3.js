// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
* @name: S15.5.4.2_A1_T3;
* @section: 15.5.4.2;
* @assertion: String.prototype.toString() returns this string value;
* @description: Create new String(string) and check it`s method toString();
*/


// Converted for Test262 from original Sputnik source

ES5Harness.registerTest( {
id: "S15.5.4.2_A1_T3",

path: "TestCases/15_Native/15.5_String_Objects/15.5.4_Properties_of_the_String_Prototype_Object/S15.5.4.2_A1_T3.js",

assertion: "String.prototype.toString() returns this string value",

description: "Create new String(string) and check it`s method toString()",

test: function testcase() {
   var __string__obj = new String("metal");

//////////////////////////////////////////////////////////////////////////////
//CHECK#
if (__string__obj.toString() !== "metal") {
  $ERROR('#1: __string__obj = new String("metal"); __string__obj.toString() === "metal". Actual: __string__obj.toString() ==='+__string__obj.toString() ); 
}
//
//////////////////////////////////////////////////////////////////////////////

 }
});
