import React, { useState } from "react";
//Services
import ls from "../services/local-storage";
//Styles
import '../styles/App.scss';
//Components
import Header from "./Header";
import { data } from "../types/Data";

interface IState {
  data: data[];
}

function App() {
  //useState
  
  // useEffect

  // handles

  return (
    <div className="App">
      <Header />
      <main className="container">
        <h2 className="title">Characters list : </h2>
      </main>
      
    </div>
  );
}

export default App;
