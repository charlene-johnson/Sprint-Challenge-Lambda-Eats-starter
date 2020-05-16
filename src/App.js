import React from "react";
import Home from "./components/Home"
import {Route} from "react-router-dom"
import Form from "./components/Form"
// import Pizza from "../src/img/pizza.jpg"



const App = () => {
  return (
    <div className="App">
      
      <Route  path= "/" component={Home}/>
      <Route  path="/pizza" component={Form}/>
      {/* <img src={Pizza} alt="Pizza image"/> */}
    </div>
  );
};
export default App;
