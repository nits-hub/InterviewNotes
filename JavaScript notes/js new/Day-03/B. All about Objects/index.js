console.log("chaliye shuru karte hai");

// object -> 
// 1. Anything that exist in the real world is an object.
// 2. An object can have some properties and can perform certain actions.
// 3. Properties are known as variables and actions are known as methods.
// 4. In JS, Object is used to store information in (key : value) pair.

// syntax: to create an object
//  const rectangle = {
//     length:1,
//     breadth:2,
//     draw1: function(){
//         console.log("drawing first rectangle");
//     },
//     draw2(){
//          console.log("drawing second rectangle");
//     }
// };

// How to access object properties
// console.log(rectangle.length);
// console.log(rectangle.breadth);
// console.log(rectangle.draw());

// ----------------------------------------------
// The method we were following till now was not the right way to create objects.
// because if have to create more than one object like rect1 and rect2 then we have to again write the whole syntax.
// instead we can follow the way which lets us to create objects dynamically.
// There are two ways to create an object
// 1. Factory function, 2. Constructor function

// 1.Factory function: i.e., a function which will return an object.
// illustration - 1 : with no arguments and parameter

// function Rectangle(){
//     return rectangle = {
//                 length:1,
//                 breadth:2,
//                 draw1: function(){
//                             console.log("drawing rectangle");
//                        }
//     }
// }

// const rect1 = Rectangle();
// console.log(rect1);

// illustration - 2 : with arguments and parameter

// function Rectangle(len,bre){
//     return rectangle = {
//                 length:len,
//                 breadth:bre,
//                 draw1: function(){
//                             console.log("drawing rectangle");
//                         }
//     }
// }

// const rect2 = Rectangle(10,20);
// console.log(rect2);
// rect2.length++;
// console.log(rect2.length);
// console.log(rect2.breadth);
// console.log(rect2.draw1());


// 2. Constructor function: i.e., a function used to create an object

// function Rectangle(length, breadth){
//     this.length = length;
//     this.breadth = breadth;
//     this.draw3 = function() {
//         console.log("drawing rectangle3");
//     }
// }

// let rect3 = new Rectangle(3,4);
// console.log(rect3);
// console.log(rect3.length);
// console.log(rect3.breadth);
// console.log(rect3.draw3());

// Dynamic Nature of Objects:
// 1. Allows to add and delete properties even after creating an object

// const car = {        
//     name:'ford',
//     color:'red',
//     steering: 'electric power steering'
// }

// console.log(car);
// car.handbrake = true;
// console.log(car);
// delete car.handbrake;
// delete car.name;
// console.log(car);


// ----------------------------------------------

// Note: In javascript function is also an object
// function Rectangle(){
//     this.length=2;
//     this.breadth=3;
//     this.draw = function(){
//         console.log("drawing");
//     }
// }

// const rect1 = new Rectangle();
// console.log(rect1.constructor);
// console.log(Rectangle.constructor);

// const rect4 = new Function('length','breadth', ` 
// this.length=2;
// this.breadth=3;
// this.draw = function(){
//     console.log("drawing");
// }`);
// console.log(rect4);

// ----------------------------------------------
// Types in Javascript :
// 1. Primitive types or value types - Number, String, Boolean, Undefined, Null
// 2. Reference types or Objects - functions, Objects, Arrays

// Difference between Primitive type and Reference type

// Illustrations - 1

// let a = 10;
// let b = a;
// a++;
// console.log(a);
// console.log(b);
    // Note: In primitive type a copy of value is passed.

// let a = {sum:10};
// let b = a;
// a.sum++;
// console.log(a);
// console.log(b);
    // Note: In reference type a reference of value is passed.

// Illustration - 2

// Call by value
// let a = 10;
// function inc(a){
//     a++;
// }  
// console.log(a);

// call by reference
// let a = {value:10};
// function inc(a){
//     a.value++;
// }
// console.log(a.value);
// ----------------------------------------------

// **********************************************
// Iterating through Objects
// Two ways:-
// 1. for-in loop (used with objects)
// 2. for-of loop (used with Iterables like Arrays,maps etc.)(Objects can iterate through hack).

// 1.Iterating through for-in loop
// let rectangle = {
//     length:10,
//     breadth:13,
//     draw: function(){
//         console.log("drawing rectangle");
//     }
// };

// for(let key in rectangle){
//     console.log(key, rectangle[key]);
// }
// Notes:1. keys are reflected through key variable
//       2. values are reflected through rectangle[key]


// 2. Iterating through for-of loop
// let rectangle = {
//     length:10,
//     breadth:13,
//     draw: function(){
//         console.log("drawing rectangle");
//     }
// };

// for(let key of Object.keys(rectangle)) {
//     console.log(key);
// }

// for(let key of Object.entries(rectangle)) {
//     console.log(key);
// }

// Note: use of membership 'in' keyword to check if object has contained the property or not
// if('color' in rectangle)
//     console.log("present");
// else
//     console.log("absent");
// ----------------------------------------------

// **********************************************
// Object cloning:- There are three ways to clone the object
// 1. Iteration
// 2. Assign
// 3.Spread Operator

// let src = {a:10,b:20};
// let dest = {};

// 1. Iteration: 
// for(let key in src){
//     dest[key] = src[key];
// }
// console.log(dest);

// 2. Assign
// dest = Object.assign({},src);
// console.log(dest);

// 3. Spread Operator
// dest = {...src};
// console.log(dest);
// ----------------------------------------------