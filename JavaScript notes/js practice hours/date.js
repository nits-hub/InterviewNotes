// // Date() - In JS, the Date object is used to work with dates and times. You can create, manipulate, and format dates using the Date methods.

// // 1. Creating a Date Object - 
// let currentDate = new Date(); //Gets the current date and time.
// console.log(currentDate);

// // 2. You can also create a date with specific values:
// let specificDate = new Date(2024, 1, 21);  // Year, Month (0-based), Day
// console.log(specificDate);

// // 2. Getting Date Components
// // You can extract parts of the date using these methods:
// let now = new Date();
// console.log(now.getFullYear());  // Get year (e.g., 2025)
// console.log(now.getMonth());     // Get month (0 = Jan, 11 = Dec)
// console.log(now.getDate());      // Get day of the month (1-31)
// console.log(now.getDay());       // Get weekday (0 = Sunday, 6 = Saturday)
// console.log(now.getHours());     // Get hours (0-23)
// console.log(now.getMinutes());   // Get minutes (0-59)
// console.log(now.getSeconds());   // Get seconds (0-59)
// console.log(now.getMilliseconds()); // Get milliseconds (0-999)
// console.log(now.getTime());      // Get timestamp (milliseconds since Jan 1, 1970)

// // 3. Setting Date Components
// // You can modify a date using setter methods:
// let myDate = new Date();
// myDate.setFullYear(2026);  
// myDate.setMonth(5);   // June (Months are 0-based)
// myDate.setDate(15);   // 15th of the month
// myDate.setHours(12);  // 12 PM
// console.log(myDate);

// // 4. Formatting Dates
// // You can format dates into readable strings:
// let today = new Date();
// console.log(today.toDateString());  // e.g., "Thu Feb 21 2025"
// console.log(today.toISOString());   // e.g., "2025-02-21T10:30:00.000Z"
// console.log(today.toUTCString());   // UTC format
// console.log(today.toLocaleDateString()); // Localized date format
// console.log(today.toLocaleTimeString()); // Localized time format
// console.log(today.toLocaleString()); // Localized date & time format

// // 5. Comparing Dates
// // You can compare dates using comparison operators:
// let date1 = new Date("2025-02-21");
// let date2 = new Date("2025-02-22");

// console.log(date1 < date2);  // true
// console.log(date1 > date2);  // false
// console.log(date1.getTime() === date2.getTime()); // Compare timestamps

// // 6. Getting Time Difference
// // You can calculate the difference between two dates:
// let start = new Date("2025-02-21");
// let end = new Date("2025-03-21");

// let diff = end - start;  // Difference in milliseconds
// console.log(diff / (1000 * 60 * 60 * 24));  // Convert to days

// FORMAT DATE AND TIME
function formatDateTime(now){
    return (now.toLocaleString("en-GB", 
    {
        day: "2-digit", 
        month: "2-digit", 
        year: "numeric", 
        hour: "2-digit", 
        minute: "2-digit", 
        second: "2-digit",
        hour12: true  // Use 24-hour format
    })
)
};
let now = new Date();
console.log(formatDateTime(now)); // Output: "21/02/2025, 14:30:45"



