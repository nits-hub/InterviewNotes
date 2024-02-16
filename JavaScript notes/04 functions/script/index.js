console.log("hello G! kya haal chal...");

// Function - 
    // 1. A block of code that performs a specific task and it allows you to organize your code into manageable and readable pieces.
    // 2. It uses the concept of reusablity

    // benefits of functions
        // With functions you can reuse code
        // You can write code that can be used many times.
        // You can use the same code with different arguments, to produce different results.

    // Issues without function - 
        // code becomes bulky, readablity reduces, buggy etc.

        // syntax: to write functions
            // 1. Function declaration. e.g., 

                // function areaOfRectangle(length, breadth){
                //     return length*breadth;
                // }
                // console.log(areaOfRectangle(4,5));
                
            // Note: function declaration uses the concept of function hoisting(i.e., JavaScript moves function declarations to the top of the scope during the compilation phase, 
            // allowing you to call functions before they are declared.)

            // 2. Function expression/assignment. e.g.,
                // Function assignment is of two types: 

                // (i) Named function - 
                    // let message = function msg(){
                        // console.log("You are awesome..");
                    // }

                    // console.log(message());

                // (ii)Anonymous function
                    // const areaOfRectangle = function(length, breadth){
                    //     return length*breadth;
                // }

                // console.log(areaOfRectangle(4,5));

            // 3. IIFE(Immediately Invoked function expression) - An IIFE is a function that is executed immediately after it's defined. It helps create a private scope for variables.
                // e.g.,
                    // (function run(){
                    //     console.log("running...");
                    // })();
                
            // 4. Higher-Order Function - 
                // A function that takes one or more functions as arguments or returns a function.
                // Enables functional programming paradigms.
                    // e.g., 
                        // function multiplier(factor) {
                        //     return function (number) {
                        //         return number * factor;
                        //     };
                        // }

                        // let double = multiplier(2);
                        // double(5); // Returns 10 
            
            // 5. Callback function - 
                // A callback function is a function passed into another function as an argument, which is then invoked inside the outer function to complete some kind of action.
                // There are two ways in which the callback may be called: synchronous and asynchronous. 
                    // Synchronous callbacks are called immediately after the invocation of the outer function, with no intervening asynchronous tasks, while 
                    // asynchronous callbacks are called at some point later, after an asynchronous operation has completed.
                        
    
    // *****************************************************
    // Function Scope - 
    // A function defined in the global scope can access all variables defined in the global scope.
    // A function defined inside another function can also access all variables defined in its parent function, and any other variables to which the parent function has access.
    // e.g., 

        // --------------------------------------------------------
        // The following variables are defined in the global scope
        // const num1 = 20;
        // const num2 = 3;
        //         const name = "Chamakh";

        //         // This function is defined in the global scope
        //         function multiply() {
        //             return num1 * num2;
        //         }

        //         console.log(multiply()); // 60

        //         // A nested function example
        //         function getScore() {
        //         const num1 = 2;
        //         const num2 = 3;
                
        //         function add() {
        //             return `${name} scored ${num1 + num2}`;
        //         }
                
        //         return add();
        //         }

        //         console.log(getScore()); // "Chamakh scored 5"
        // --------------------------------------------------------


    // **********************************************************
    // Argument Object in JS -

    // 1.
        // function sum(a,b){
        //     return a+b;
        // }

        // console.log(sum(1,2));
        // console.log(sum(1));
        // console.log(sum());
        // console.log(sum(1,2,3,4,5)); //returns 3
        
    // 2.
        // function sum(a,b){
        //     console.log(arguments);
        //     return a+b;
        // }
        
        // let ans = sum(1,2,3,4,5);
 
    // 3. 
        // function sum(a,b){
        //     let total=0;
        //     for(let value of arguments)
        //         total+=value;
        //     return total;
        // }
        
        // let ans = sum(1,2,3,4,5);
        // console.log(ans);