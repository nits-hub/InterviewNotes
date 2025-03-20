// What is React?
// React is an open-source javascript library which makes building user interfaces easy by using using reusable components. It was developed by Facebook on March 2013.

// Name the important features of react?
// 1. Allows you to use 3rd party libraries.
// 2. Time-saving.
// 3. Faster Development.

// Does React use HTML?
// No, it does not directly uses HTML. It uses JSX(Javascript XML).

// What is JSX - 
// JSX(Javascript XML) - Jsx is a fancy way of writing html code within javascipt for describing what UI should look like.

// Give me two most significant drawbacks of react?
// 1. Frequent updates - React ecosystem continues to evolve quickly with frequent updates and changes, it requires significant maintenance to keep projects up-to-date and stable.
// 2. Learning Curve - Understanding concepts like JSX, virtual DOM, hooks and state management requires solid grasp of javascript and this can be challenging for new developers.

// What is DOM?
// Whenever a webpage is loaded, the browser creates a Document Object Model of the page. The DOM Model is a tree of objects.
// Each part of the webpage, like a paragraph, image is an "element" and is represented as a node of the tree. The way these elements are nested inside each  other make a tree like structure. Using javascript you can access this tree and make changes to it(on the fly without having to reload it).

// What is Virtual DOM?
// The virtual DOM is a lightweight copy of the actual dom in memory. React uses it to improve the performance by updating only the changed part of the actual dom.

// Difference b/w real dom and virtual dom?
// Real DOM                                Virtual DOM
// It is updated slowly.                   It updates faster.      
// It allows a direct update from HTML.    It cannot be used to update HTML directly.
// It wastes too much memory.              Memory consumption is less

// What is the significance of keys in react?
// Keys are used to uniquely identify and differentiate between the components. They help identify react which item have changed, removed or added.

// What is flux concept in react?
// Facebook widely uses flux architecture for developing client-side web applications. Flux is not a framework or a library. It is simply a kind of architecture which compliments react and the concept of unidirectional flow.

// Explain props in react?
// Props are properties that are passed to a component from its parent, and they are immutable.

// What is state in react? 
// The state is a built-in React object which contains data or information about the component. A component's state can change over time, whenever it changes, the component re-renders.
// ```The change in component is a response to the user's action and system-generated events and these changes determine the behaviour of the component and how it will re-render.```

// What is setState() method?
// The setState() method is used to update the state object of the component.
// State can be updated in response to event-handlers, server-responses or prop changes. As soon as the update takes place react re-reders the component and its children with the updated state.

// What is the difference b/w state and props?
// State is an internal data that belongs to a specific component, and can be changed over time. While props are external data passed to component from its parent, and they are immutable.

// What is props drilling?
// Props drilling is a process of passing data from a parent component down to the deeply nested child components through multiple-level intermediate components.
// ```This can make the code harder to maintain and understand, especially as the component tree grows.
// e.g.,
//     App
//       --Parent
//           --Child
//              --GrandChild

// You want to pass data from App to Grandchild.

// What is state lifting up?
// Lifting state up is a pattern where the state of the child component is moved to its parent component, allowing multiple child component to share the same state.
// e.g.,
// App.jsx
// export default function App() {
//   const [text, setText] = useState('');

//   const handleTextChange = (newText) => {
//     setText(newText);
//   };

//   return (
//     <div>
//       <Input text={text} handleTextChange={handleTextChange} />
//       <Display text={text} />
//     </div>
//   );
// }

// Input.jsx
// function Input({ text, handleTextChange }) {
//   return (
//     <div>
//       <input
//         type="text"
//         value={text}
//         onChange={(e) => handleTextChange(e.target.value)}
//       />
//     </div>
//   );
// }

// Display.jsx
// function Display({ text }) {
//   return (
//     <div>
//       <p>{text}</p>
//     </div>
//   );
// }


---------------------------------------
// HOOKS AND ITS TYPES IN REACT

// HOOKS - 
// In React, there are several types of built-in hooks to handle different behavior of the components. Here is a list of commonly used built-in hooks are:
// useState, useEffect, useContext, useReducer, useRef, UseCallback, useMemo, custom hooks.

// TYPES OF HOOKS - 
// 1. State Hooks - 2 state hooks are: useState & useReducer:
//   (a) useState - It add state to a functional component. It takes an intial state value as the argument and returns an array with two elements - the current state value and the function to update the state.
//   e.g.,
//     import React, { useState } from 'react';

//     function Counter() {
//       const [count, setCount] = useState(0);

//       const increment = () => {
//         setCount(count + 1);
//       };

//       return (
//         <div>
//           <p>Count: {count}</p>
//           <button onClick={increment}>Increment</button>
//         </div>
//       );
//     }

// 2. useReducer: It's an alternative to useState for managing complex state logic involving multiple sub-values or when the next state depends on the previous one.
//         or
// useReducer is a React hook for managing local state within a component. It is useful for complex state logic that involves multiple sub-values or when the next state depends on the previous one.

// e.g.,
//   import React, { useReducer } from 'react';

//   const initialState = { count: 0 };

//   function reducer(state, action) {
//     switch (action.type) {
//       case 'increment':
//         return { count: state.count + 1 };
//       case 'decrement':
//         return { count: state.count - 1 };
//       case 'reset':
//         return { count: 0 };
//       default:
//         throw new Error();
//     }
//   }

//   function Counter() {
//     const [state, dispatch] = useReducer(reducer, initialState);

//     return (
//       <div>
//         <p>Count: {state.count}</p>
//         <button onClick={() => dispatch({ type: 'increment' })}>Increment</button>
//         <button onClick={() => dispatch({ type: 'decrement' })}>Decrement</button>
//         <button onClick={() => dispatch({ type: 'reset' })}>Reset</button>
//       </div>
//     );
//   }

//   export default Counter;

//   Here,
//     1. reducer - is a function that determines how the state should change based on action. It takes the current state and an action as argument and return the new state.

//     2. initialState - initial state value. The state value that componet will have on its first render.

//     3. state - the current state value.

//     4. dispatch - a function that you call with an action to update the state.



// 2. useEffect - It enables performing side effects, such as data fetching, DOM manipulations after the component has been rendered.


// 3. useContext - It is a way to manange state globally. It can be used together with the useState hook to share state between deeply nested components more easily than with useState alone.
// AppContext.js
// // import the createContext from react
// import { createContext, useState } from "react";

// // create the context object
// export const AppContext = createContext();

// export default function AppContextProvider({children}) {
//     const  [count, setCount]  = useState(0);

//     // More state variables

//     const value = {
//         count, setCount,
//         //more values...
//     }

//     return <AppContext.Provider value={value}>
//                 {children}
//            </AppContext.Provider>
// }

// index.Jsx
// <AppContextProvider >
//   <App />
// <AppContextProvider>

// Counter.jsx
// import {AppContext} from '../context/AppContext';

// export default function Counter() {
//     const {count, setCount} = useContext(AppContext); //destructuring objects
//   return (
//     <div>
//           <button onClick={() => setCount(count + 1)}>+</button>
//             <h2>{count}</h2>
//           <button onClick={() => setCount(count - 1)}>-</button>   
//     </div>
//   )
// }

// ---------------------------------------


// ******************************************
// REACT-ROUTER-DOM - 
    // 1. It is a library used in react application for handling routing.
    // 2. It allows developer to create a single-page applications  with navigation that feels like a multi-page app.
    // 3. It provides components and functions to manage and navigate between different views or pages in a React application.

    // The main components provided by 'react-router-dom' include: 
    // 1. BrowserRouter: A router that uses the HTML5 history API to keep your UI in sync with the URL.
    // 2. Routes and Route: Used to define a set of routes and the component that should render when a route matches.
    // 3. Link: Used to create navigational links.
    // 4. NavLink: Similar to Link, but allows styling when the link is active.
    // 5. Outlet: Used to render child routes in a nested routing structure.
    // 6. useNavigate: A hook used for programmatically navigating.
    // 7. useParams: A hook to access the dynamic parameters from the current route.
    // 8. useLocation: A hook to access the current location object.

// Notes - 
    // 1. How do you handle 404 errors with react-router-dom? - 

    // You can handle 404 errors by defining a route with a wildcard path (*) that matches any undefined route. Here’s an example:
    // import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

    // const Home = () => <h2>Home</h2>;
    // const About = () => <h2>About</h2>;
    // const NotFound = () => <h2>404 Not Found</h2>;

    // export default function App() {
    //   return (
    //     <Router>
    //       <Routes>
    //         <Route path="/" element={<Home />} />
    //         <Route path="/about" element={<About />} />
    //         <Route path="*" element={<NotFound />} />
    //       </Routes>
    //     </Router>
    //   );
    // }

    // 2. How do you handle query parameters in react-router-dom? - 

    // You can handle query parameters using the useLocation hook to access the current URL and the URLSearchParams API to parse the query string. Here’s an example:

    // import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';

    // const Search = () => {
    // const location = useLocation();
    // const queryParams = new URLSearchParams(location.search);
    // const query = queryParams.get('q');

    // return <h2>Search Query: {query}</h2>;
    // };

    // function App() {
    // return (
    //     <Router>
    //     <Routes>
    //         <Route path="/search" element={<Search />} />
    //     </Routes>
    //     </Router>
    // );
    // }




// ******************************************

// ---------------------
// Define the term Redux in react?

// Redux is a state management library for managing global application state. It is particularly useful for larger applications where state needs to be shared across multiple components.

// Redux involves setting up a store, defining actions, and creating reducers to handle those actions.

// Here's a simple example of how you might set up Redux:

// 1. Install Redux and React-Redux using command:
// npm install redux react-redux
// npm i @reduxjs/toolkit

// FOLDER STRUCTURE
    // Redux
        // slices - different slice files
        // e.g., CounterSlice.jsx
    // store.js file 


// 1. Create slice, define initial states and export slice, export actions, export reducer
// import {createSlice} from "@reduxjs/toolkit";

// const initialState = {
//     value: 0,
// }

// export const CounterSlice = createSlice({
//     name:"counter",
//     initialState,
//     reducers: {
//         increment: (state) => {
//             state.value += 1;
//         },
//         decrement: (state) => {
//             state.value -= 1;
//         }
//     }
// })

// export const {increment, decrement} = CounterSlice.actions;
// export default CounterSlice.reducer;

// 2. configure the store 
// import { configureStore } from '@reduxjs/toolkit';
// import CounterSlice from './slices/CounterSlice';

// export const store = configureStore({
//   reducer: {
//     counter: CounterSlice
//   },
// })

// 3. in App.js import the store and wrap the <App /> component with Provider.
// import { store } from "./redux/store"

// const root = ReactDOM.createRoot(document.getElementById("root"));

// root.render(
//   <Provider store={store} >
//     <App /> 
//   </Provider>
// );


// 4. Use the redux anywhere in your component 
// Counter.jsx
// import { useDispatch, useSelector } from 'react-redux'
// import { decrement, increment } from '../redux/slices/CounterSlice';

// export default function Counter() {
//     const count = useSelector((state) => state.counter.value);
//     const dispatch = useDispatch();
//   return (
//     <div>
//         <button onClick={() => dispatch(increment())}>Increment</button>
//         <div> {count} </div>
//         <button onClick={() => dispatch(decrement())}>Decrement</button>
//     </div> 
//   )
// }