console.log('Hello G! kya haal chal..');
// Array - In JS an Array is a special variable which is used to store elements of different data types.
//         JS arrays are zero-indexed: 1st elements is at index zero, 2nd element is at index one and so on..

// Syntax: 
// 1. Using array literals - 
    // let fruits1 = ['apple', 'banana', 'guava'];
    // console.log(fruits1);

// 2. Using new keyword - 
    // let fruits2 = new Array('pineapple', 'cherry', 'pomegranate');
    // console.log(fruits2);

// Features of an array - 
// 1. Zero based indexing
// 2. Dynamic size - JS arrays can dynamically adjust their size. You can add or remove elements at any time.
    // e.g.,
        // let colors = ["red", "blue"];
        // colors.push("green");
        // console.log(colors);
        // colors.pop();
        // console.log(colors);
// 3. Mixed data type - can hold different types within the same array.
    // e.g., 
        // let mixedArray = [1, "two", true, {isSignalGreen:"Yes"}];
// 4. Length property - it indicates the number of elements in the array.
// -----------------------------------------------------------------------

// Common Array Methods - 
// 1. push() - adds an elements at the end of the array.
// 2. pop() - removes the last element of the array.

// 3. shift() - removes the first elemnts of the array
// 4. unshift() - adds an element to the beginning of an array

// 5. splice() - adds or removes elements from any position in an array.
// 6. slice() - Extracts or slices out a portion of an array.

// e.g., 
    // const arr1 = ["red", "blue", "green", "yellow"];
    // console.log(arr1);
    
    // arr1.push("black");
    // console.log(arr1);
    
    // arr1.pop();
    // console.log(arr1);
    
    // arr1. unshift("pink");
    // console.log(arr1);
    
    // arr1.shift();
    // console.log(arr1);
    
    // arr1.splice(1,0,"orange","white");
    // console.log(arr1);
    
    // const slicedArray1 = arr1.slice(1,3);
    // console.log(slicedArray1);

// -----------------------------------------------------------------------
// More Array methods:
// 1. toString() - converts an array to a string of (comma separated) array values.
// 2. at() - returns as the [].
// 3. join() - joins all array elements into a string, in addition you can specify the separator:
    // e.g., 
        // const color = ["red", "green", "blue"];
        // console.log(color.join(", "));
// 4. delete() - Using delete() leaves undefined holes in the array.
    //           Use pop() or shift() instead.
// 5. concat() - creates a new array by merging existing arrays.
    // Note:  concat() method can take any number of array arguments.
// 6. flat() - used to convert a multi-dimensional array into a one-dimensional array.
    // e.g.,
        // const arr = [[1,2],[3,4],[5,6,7]];
        // const flatArr = arr.flat();
        // console.log(arr);
        // console.log(flatArr);
// 7. copyWithin - 

// -----------------------------------------------------------------------
// Array Search Methods
    // 1. indexOf() - searches an array for an element value and returns its position.
        // 



// -----------------------------------------------------------------------
// Looping through arrays:
// 1. for loop: 
// const fruit = ["apple", "guava", "cherry"];
// for(let i = 0; i < fruit.length; i++)
//     console.log(fruit[i]);

// 2. for each method
// const fruit = ["apple", "guava", "cherry"];
// fruit.forEach(function(value){
    //     console.log(value);
    // })
    
    
// -----------------------------------------------------------------------
// The Difference Between Arrays and Objects
// In JavaScript, arrays use numbered indexes.  
// In JavaScript, objects use named indexes.

// When to Use Arrays. When to use Objects.
// JavaScript does not support associative arrays.
// You should use objects when you want the element names to be strings (text).
// You should use arrays when you want the element names to be numbers.
// -----------------------------------------------------------------------


// Searching - 
    // case 1: When searching is being performed in primitives(arrays, strings etc.) then we use indexOf(), includes() method
    // case 2: When searching is being performed in objects/references then we can only use callback() functions.

    // e.g., 
        let courses = [
            {no:1, naam:'Love'},
            {no:2, naam:'KKR'},
        ];

        // console.log(courses);
        // console.log(courses.indexOf({no:1, naam:'Love'}));   // NOT a valid way to search in objects/references returns -1
        // console.log(courses.includes({no:1, naam:'Love'}));  // returns false  
        
        // Note: to search in Object use find() method.
        // let course = courses.find(function(course){
        //     return course.naam == 'Love';
        // })        
        // console.log(course);


        // The above statement is reduced to arrow function.
        // let course = courses.find(course => course.naam == 'Love')
        // console.log(course);


// Removing Element from array:
        // No worries ********* already learned

// Emptying an array: 
    let numbers = [1,2,3,4,5,6];

    // 1. to empty the array: assign empty array i.e., []  
        // let num2 = numbers;
        // numbers = [];
        // console.log(numbers);
        // console.log(num2);

    // Note: It does not empty the array instead it assign the new empty array to it.


    // 2. to empty the array: set the length of array to zero.
        // let num2 = numbers;
        // numbers.length = 0;
        // console.log(num2);
        // console.log(numbers);


    // 3. use of splice() method
        // num2 = numbers;
        // numbers.splice(0,numbers.length);
        // console.log(numbers);
        // console.log(num2);


// combining and slicing array
    let first = [1,2,3];
    let second = [4,5,6];
    
    // 1. combining
        // let combined = first.concat(second);
        // console.log(combined);
    
    // 2. slicing
        // let marks = [10,20,30,40,50,60,70,80,90,100];
        // let sliced = marks.slice(2,7);
        // let sliced = marks.slice(2);
        // console.log(sliced);

    // **********************************************
    // 3. Spread Operator
        // let combined2 = [...first, ...second];
        // let combined3 = [...first, 'a', false, ...second, 'b', true];
        // console.log(combined2);
        // console.log(combined3);

        // let another = [...combined];
        // console.log(another);


// Join and split arrays
    // 1. split array
        // let names = "This is batemen number one introvert from hollywood";
        // let splitted = names.split(" ");
        // console.log(splitted);

    // 2. join array
        // let joinned = splitted.join(" ");
        // console.log(joinned);

// Sorting arrays
    // let num = [3,7,2,9,0,1,5];
    // let sortedNum = num.sort();
    // console.log(sortedNum);

    // let arr = [
    //     {naam:'baba'},
    //     {naam:'golu'},
    //     {naam:'sonu'},
    //     {naam:'chotu'}
    // ];
    // let sortedArr = arr.sort();
    // console.log(sortedArr);

    // Note: sort() function doesn't work in array of objects

// Reverse arrays
    // let reversedNum = sortedNum.reverse();
    // console.log(reversedNum);

// **************************************************************
// Filter, Reduce, Map
// Filtering arrays
    // let nums = [-3,-2,-1,0,1,2,3];
    // let filtered = nums.filter(value =>  value > 0)
    // console.log(filtered);

    // let items = filtered.map(num => {value:num})
    // console.log(items);

// Reducing Arrays
    // 