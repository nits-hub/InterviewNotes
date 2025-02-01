// What is typescript?
    // 1. Typescript is a superset of javascript that adds static types.
    // 2. This means you can define types (such as number, string, boolean, etc.), which makes your code more predictable and easier to debug.

// Why use TypeScript?
    // Type safety: Prevents many bugs by catching type-related errors at compile time.
    // Improved readability: Makes the code easier to understand.
    // Large scale applications: Useful for maintaining large codebases with complex structures.

    // *Note - TypeScript uses compile time type checking. Which means it checks if the specified types match before running the code, not while running the code.

// Setting up Typescript?
    // Install typescript
        // npm i -g typescript

    // check the typescript version
        // tsc -v or tsc --version
    
    // Create a typescript file index.ts and compile it using typescript compiler by writing the command - "tsc index.ts"
        // index.ts 
            // let message:string = "Hellow jee kya haal chal hai aapke";
            // console.log(message);
    
        // Note: Typescript compiler after .ts file compilation generate a .js file, which can be run in any browser or Node.js environment.
    

// Typescript compiler - 
    // Typescript is transpiled into javascript using a compiler.
    // As typescript being converted into javascript means it runs anywhere that javascript runs.

// TypeScript data types:
    // 1. typescript supports primitive types same as javascript + it also has some extra types (i.e., tuple, enum);

        // a. number:
            let age: number = 30;
        
        // b. string:
            let name: string = "Don";

        // c. boolean:
            let isEligible: boolean = true;

        // d0. undefined and null
            let y: undefined = undefined;
            console.log(typeof y); // output: undefined
        
            let z: null = null;
            console.log(typeof z); // output: object
        
        // d. Array: 
            let numbers: number[] = [1,2,3,4,5];
        
        // e. Tuple: is a fixed-length array with different types.
            let user: [number, string] = [1, "Alan"];
        
        // f. enum: used to define a set of named constants.
            enum Status {active, inActive, suspended};
            let userStatus: Status = Status.active;


    // 2. special types - any, unknown, never
    

// Arrays - 
    let names = ['mario', 'luigi', 'princess'];
    names.push('dragon');
    // names.push(3); //throws an error
    // names[0] = 3; // throws an error

    let number = [1,2,3];
    number.push(4);
    // number.push('abc'); //throws an error
    // number[0] = 'abc'; // throws an error

    let mixed = ['ken', 10, 'james', '20'];
    mixed.push('akm');
    mixed.push(4);
    mixed[0] = 5;
    mixed[1] = 'akm';


        
    




        



