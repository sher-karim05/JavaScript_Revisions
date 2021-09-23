// Variable Shadowing

//global variable
var message = "Hello"
function say(){
     var message = 'Hi'
     console.log(message) 
    //local variable
}

say();
console.log(message);

//Accessing global variable inside the function

var quality = "good";

function laptop(){
    //local variable
    quality = 'Better';
    console.log(quality)
}
laptop();
console.log(quality);

//javascript data types 
/**
 * There are 7 data types from which 6 are primitive datatypes.
 * 
 * null
 * undefined
 * number 
 * boolen
 * string
 * symobl
 * 
 * non-primitive data type
 * 
 * object
 * 
 * 
 * Javascript uses the IEEE 754(International Standard for Floating-Point Arthmetic) format to represent both integer and floating point numbers.
 * 
 * Published in 1985.
 */

//Operators
/**
 * Unary plus/minus
 * converts string into number
 */

let f = false,
     t = true;
     console.log(+f, +t)
     
let num  = '20'
console.log(+num)

//Increment and decrement
let inc = 1,
    dec = 9;
inc = dec + 1
console.log(inc)
// decremet 
--dec
++inc

//Double Negation(!!)
/**
 * Converts a value into its real boolean value.
 */

let age = 23;

console.log('Real boolean value of 23 is:', !!age)//true

/**
 * Assignment Operator
 * Assigns value to a varible.
 */

a = 5; //assigns a the value of 5
b = 2
a += b // a = 5 + b  assign and add 
a -= b // a = 5 - b  assign and subtr 
a *= b // a = 5 * b  assign and multply 
a /= b // a = 5 / b  assign and divide
a &= b // a = 5 & b  assign a & b to a
a |= b // a = 5 | b  assign result of OR to a
a ^= b // a = 5 ^ b  assign  result of XOR b to a  
a <<= b // a = 5 << b  assign result of a shifted left by b to a. 
a >>= b // a = 5 >> b  assign resut shifted right by b to a. 
a >>>= b // a = 5 >>> b  Assign the result of a shifted reight by b to a 

//Ternery Operator
let speed = 80;
let message = speed >= 120 ? 'Too fast' : (speed >= 80 ? 'Fast' : 'Normal')
console.log(message)