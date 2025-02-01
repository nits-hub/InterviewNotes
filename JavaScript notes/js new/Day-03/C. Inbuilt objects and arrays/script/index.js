console.log("Hello G! kya haal chal..");


// JavaScript Built-in objects have nothing to do with the Window or DOM object models.
// JavaScript built in objects can be used for basic data processing.
// Array, String, and Date/Time are all JavaScript Built-in Objects.

// Javascript Built in Objects are divided into two groups.
//1.  Standard Objects
//2.  Other Built-in objects

// 1. Standard Objects: Objects in the global scope are referred to as "standard objects".
                        // The Standard Objects category wise divided into three parts:
                        // (A) Number and Dates
                        // (B) Text Processing
                        // (C) Fundamental Objects

        // (A) Number and Date Objects: are Number, BigInt, Math, Date

                // a). Number 
                // The Number objects represents numerical data, either integers or floating-point numbers.
                // Number objects are created using the Number() constructor and contains Constants and methods.
                // Number() function can convert values of different types to numbers.

                // syntax: let num = new Number(value);
                // e.g., 
                
                // console.log(Number(12));
                // console.log(Number("15") === 15);
                // console.log(Number("adele"));
                // console.log(Number(undefined));

                // Properties of Number object are:
                    // Constructor, MAX_VALUE, MIN_VALUE etc. 
                    // e.g., Number.MAX_VALUE etc.

                // Methods of Number object are: 
                    // 1. isFinite() - to check number doesn't falls in +ve infinity, -ve infinity or NaN
                    //               - Number.isFinite(10/0); return false
                    // 2. isInteger()
                    // 3. isNaN()  
                    // 4. parseFloat()

                
                // b). Date: 
                // When users require access to the present date and time, as well as previous and future dates and times. The Date object in JavaScript provides support for working with dates and times.
                // A Date objects are created using the Date() constructor.

                // syntax: let today = new Date();

                // Methods of Date object are:
                    // Date()          - returns the current date and time
                    // getDate()       - The day of the month for the specified date is returned.
                    // getDay()        - The day of the week for the specified date is returned.
                    // getFullYear()   - Year
                    // getHours()      -
                    // getMinutes()    - 
                    // getHours()      -


                // c). Math: 
                // The Math object contains static properties and methods for mathematical constants and functions.
                    
                // Properties of Math object are:
                    // Math.E - approx. 2.718
                    // Math.LN10 - Natural logarithms of 10, approx. 2,303
                    // Math.LN2 - 0.693
                    // Math.LOG10E - Base-10 logarithm of E
                    // Math.LOG2E - 
                    // Math.PI
                    // Math.SQRT1_2 - 
                    // Math.SQRT2 - 
                
                // Static methods of object are: 
                    // Math.abs()
                    // Math.sqrt(x) - 
                    // Math.cbrt(x) - cube root of x
                    // Math.ceil()
                    // Math.floor()
                    // Math.log(x) - returns natural logarithm of x
                    // Math.max(3,5,1,9) - returns 9
                    // Math.min(3,5,1,9) - returns 1
                    // Math.random() - bydefalut return b/w 0 and 1
                    // Math.round(x) - returns value of x rounded to nearest integer
                    // Math.trunc(x) - returns the integer portion of x, removing any fractional digits.


        // (B) Text Processing: objects are - String and RegExp

                // (a) String - 
                // The String object is used to represent and manipulate a sequence of characters.
                
                // Syntax: to create string using String() constructor.
                        // let variable_name = new String(string);
                // e.g., 
                        // let str = new String("Hello");
                        // console.log(str);
                
                // Syntax: to create string using string literals
                        // let str2 = "Hello";
                        // console.log(str2);
                
                // Properties of String object are:
                    // str.length
                
                    
                // Methods of String object are:
                    // str.charAt(x)             - to find the character at index x 
                    // String charCodeAt(x)      - returns unicode at position x
                    
                    // String slice(start, end) - to return the part of string/ return substring
                    //                            Note: End index is excluded
                    //                            e.g., let text = "Apple, Banana, Kiwi";
                    //                                  let part = text.slice(7);  
                    //                                  let part = text.slice(-12); //position is counted from end of the string
                    //                                  let part = text.slice(-12, -6);

                    // String substring(start, end)  - substring() is same as slice() except for one thing, values less than 0 are treated as 0 in substring()
                    // String substr(start, length)  

                    // String split()           - A string can be converted to an array with the split() method.

                    // String replace()         - replaces only first match in a string,
                    //                            replace() methods doesn't change the string instead it returns the new string.
                    //                                  e.g., let text = "Please visit Microsoft!";
                    //                                  let newText = text.replace("Microsoft", "W3Schools");

                    // String replaceAll()      - let txt = text.replaceAll("Cats", "Dogs");
                    //                            RegExp - let txt = text.replaceAll(/cats/g,"dogs"); 
                    //                            To replace all matches, use a regular expression with a /g flag (global match):
                    //                            the global flag (g) must be set, otherwise a TypeError is thrown.

                    // String toUpperCase()     - text.toUpperCase();
                    // String toLowerCase()     - 
                    // String concat()          - let text1 = "Hello"; let text2 = "World"; let text3 = text1.concat(text2); 
                    // String trim()            - 
                    // String trimStart()       -
                    // String trimEnd()         -
                    // String padStart()        - This method pads the current string with another string (repeated, if needed) so that the resulting string reaches the given length.
                    //                            The padding is applied from the start of the string.
                    // String padEnd()          - 

                    // _____________________________________________
                    // TEMPLATE LITERAL - It uses BACKTICK(``) operator rather than QUOTES("") to define a string.
                        // 1. It allows to use single quote and double quote inside a string
                        // e.g., 
                            // let text = `"Ram" The time is 6'o Clock`;
                            // console.log(text);

                        // 2. It also allows multi line string
                            // e.g., 
                                // let text = `This
                                                // is
                                                // Ram
                                                // from
                                                // Heaven`;

                        // 3. Template literals provide an easy way to interpolate variables and expressions into strings.
                        //    The method is called string interpolation.
                            // e.g., 
                                    // let firstName = "John";
                                    //  let lastName = "Wick";
                                    // let fullName = `I am ${firstName} ${lastName}.`;
                                    // console.log(fullName);

                        // 4. Template literals allows expression in strings.


                    // (a) RegExp - 
                        // A regular expression is a sequence of characters that forms a search pattern.
                        // Regular expressions can be used to perform all types of text search and text replace operations.
                    
                        // There are two ways to create a RegExp object: a literal notation and a constructor.
                            // The literal notation takes a pattern between two slashes, followed by optional flags, after the second slash.  
                            // The constructor function takes either a string or a RegExp object as its first parameter and a string of optional flags as its second parameter.
                    

                        // Syntax: /pattern/modifiers;
                        // e.g., /romanpark/i;  // is a regular expression

                        // romanpark is a pattern to be used to search
                        // i is a modifier that makes the search to be case-insensitive

                        // --------------------

                        // 1.
                        //Using String search() with a String
                        // e.g., 
                            // let text = "Visit USA";
                            // let n = text.search("USA");
                            // output:7
                            // search() method searches a string and returns the position of the match.

                        // Using String search() with a Regualar Expression.
                        // e.g., 
                            // let text = "Visit USA";
                            // let n = text.search(/USA/i); 

                        // 2. 
                        //Using String replace() with a String
                        // e.g., 
                            // let text = "Visit USA";
                            // let n = text.replace("USA","India");
                            // output:Visit India
                            // replace() method replaces a specified string with another string.

                        // Using String replace() with a Regualar Expression.
                        // e.g., 
                            // let text = "visit USA";
                            // let n = text.search(/USA/i, "India"); 

                        
                        // RegExp Modifiers:
                        // Modifiers            Description
                        // /i                   Perform case-insensitive matching
                        // /g                   Perform global match i.e., find all mathces in a string
                        // /m                   Perform multiline match
                        
                        // RegExp Patterns: Brackets are used to find a range of characters.
                        // Expression           Description
                        // [abc]                find any of the character between the bracket
                        // [0-9]                find any digits b/w the brackets
                        // (x|y)                find any of the alternatives seperated with |

                        // Metacharacters are characters with a special meaning
                        // Metacharacter         Description
                        // \d                    find a digit
                        // \s                    find whitespace
                        // \b                    find a match at beginning of a word like this: \bWORD or
                        //                       at the end like this: WORD\b

                        // Quantifiers: define quantifiers
                        // Quantifier            Description
                        // n+                    Matches any string that contains at least one n
                        // n*                    Matches any string that contains zero or more occurrences of n
                        // n?                    Matches any string that contains zero ro more occurrences of n 


                        // RegExp Object
                            // RegExp object is a regular expression object with predefined properties and methods

                            // Using test():
                                // The test() method is a RegExp expression method.
                                // It searches a string for a pattern, and returns true or false, depending on the result.
                                // e.g.,
                                    // const pattern = /e/;
                                    // pattern.test("The best things in life are free!");
                        
                            // Using exec():
                                // It searches a string for a specified pattern, and returns the found text as an object.
                                // If no match is found, it returns an empty (null) object.
                                // 
                                //let pattern =  /e/.exec("The best thing in life are free");
                                // console.log(pattern[0]);
                                // output: e