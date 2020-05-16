import React from "react";
import Home from "./components/Home"
import {Route} from "react-router-dom"
import Form from "./components/Form"



const App = () => {
  return (
    <div className="App">
      
      <Route  path= "/" component={Home}/>
      <Route  path="/pizza" component={Form}/>
    
    </div>
  );
};
export default App;
