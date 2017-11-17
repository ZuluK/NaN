//Understanding value types
var x;//undefined

if (x == undefined){
  //x isn't defined! just deal with it!
}

//How about an object property?
var customer = {
  name: 'Jenny'
};
if (customer.phoneNumber == undefined) {
  //get the customer's phone number
}


/* When do I need to check if a variable (or property or array item) is undefined?

Your code design will dictate this. If you’ve written code so that a property or variable may not have a value when a certain block of code is executed,
then checking for undefined gives you a way to handle that situation rather than computing with undefined values.


*/


/* If undefined is a value, does it have a type?

Yes, it does. The type of undefined is undefined. Why? Well our logic (work with us here) is this: it isn’t an object, or a number or a string or a boolean, or really anything that is defined.
So why not make the type undefined, too? This is one of those weird twilight zones of JavaScript you just have to accept.

*/


//the typeof method in JS

var subject = 'Just a string';
var probe = typeof subject;
console.log(probe);


//Collect the data from the following experiments
var test1 = 'abcdefg';
var test2 = 123;
var test3 = true;
var test4 = {};
var test5 = [];
var test6;
var test7 = {"abddef": 123};
var test8 = ['abdcdef',124];
function test9 () {return 'abcdefg'};

console.log(typeof test1);
console.log(typeof test2);
console.log(typeof test3);
console.log(typeof test4);
console.log(typeof test5);
console.log(typeof test6);
console.log(typeof test7);
console.log(typeof test8);
console.log(typeof test9);

//and example of null
var test10 = null;
console.log(test10);

//How to use Null

/*
There are many functions and methods out there in the world that return objects,
and you’ll often want to make sure what you’re getting back is a full- fledged object,
and not null, just in case the function wasn’t able to find one or make one to return to you.
*/


var header = document.getElementById('header');
if (header == null){
  //do something here
  //something is seriously wrong if there's no header
}


/* Keep in mind that getting null doesn’t necessarily mean something is wrong.
It may just mean something doesn’t exist yet and needs to be created, or something doesn’t exist and you can skip it.
*/

var weather = document.getElementById('weatherDiv');
if(weather != null){
  //create content for the weather div
  //If the result of getElementById isn’t null, then there is such an element in the page.
}


/* ------ REMEMBER, NULL IS INTENDED TO REPRESENT AN OBJECT THAT ISN'T THERE --*/
