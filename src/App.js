import React, {useState} from "react";
import Home from "./components/Home"
import {Route} from "react-router-dom"
import Form from "./components/Form"
import Picture from "./components/Picture"



const App = () => {
 

  return (
    <div className="App">
      
      <Route  exact path= "/" component={Home}/>
      <Route  path="/pizza" component={Form}/>
      <Picture/>
    </div>
  );
};
export default App;
