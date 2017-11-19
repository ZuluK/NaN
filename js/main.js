//NaN

/* Believe it or not, there are numeric values that are impossible to represent in JavaScript!
 JavaScript can’t express these values, so it has a stand-in value that it uses: NaN
 */


 /*JavaScript uses the value NaN, more commonly known as “Not a Number”, to represent numeric results that, well, can’t be represented. Take 0/0 for instance.
 0/0 evaluates to something that just can’t be represented in a computer, so it is represented by NaN in JavaScript.
 */

 /* It’s easy to write JavaScript statements that result in numeric values that are not well defined.
Here are a few examples: */

var a = 0/0; //In mathematics this has no direct answer, so we can't expect JavaScript to know the answer either!


var b = food * 100; //We don't know what this evaluates to, but it is certainly not a number!

var c = Math.sqrt(-9);// If you remember high school math, the square root of
//a negative number is an imaginary number, which you can’t represent in JavaScript.
