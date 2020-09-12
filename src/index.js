import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

//some code I have written use react hooks for future reference
// import React, { useState } from "react";
// import Person from "./Person/Person";

// import "./App.css";

// const App = (props) => {
//   const [personsState, setPersonsState] = useState({
//     persons: [
//       { name: "Max", age: 23 },
//       { name: "Manu", age: 25 },
//       { name: "Manika", age: 26 },
//     ],
//   });

//   const [otherState, setOtherState] = useState("some other value");

//   console.log(personsState, otherState);

//   const switchNameHandler = () => {
//     setPersonsState({
//       persons: [
//         { name: "Maxmillian", age: 45 },
//         { name: "Manuni", age: 35 },
//         { name: "Manikatu", age: 56 },
//       ],
//     });
//   };
//   return (
//     <div className="App">
//       <h1>Hi I'm a React Developer</h1>
//       <p>This is really working!</p>
//       <button onClick={switchNameHandler}>Switch Name </button>
//       <Person
//         name={personsState.persons[0].name}
//         age={personsState.persons[0].age}
//       />
//       <Person
//         name={personsState.persons[1].name}
//         age={personsState.persons[1].age}
//       >
//         My Hobbies is Racing
//       </Person>
//       <Person
//         name={personsState.persons[2].name}
//         age={personsState.persons[2].age}
//       />
//     </div>
//   );
// };

// export default App;
