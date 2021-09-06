import React from "react";

import "./App.css";
import { Routes } from "./Routes";

import { Stocks } from "./Stocks";
import {Stations} from "./Stations"
import {Users} from "./Users";

function App() {

  return (

    <div className="App">

      <Users />
      <Routes/>
      <Stations/>
      <Users/>

    </div>

  );

}


export default App;