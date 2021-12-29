import React, { useState } from "react";
//Services
import ls from "../services/local-storage";
import { data } from "../types/Data";
//Styles
import '../styles/App.scss';
//Components
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";

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
      <Main/>
     <Footer/>
    </div>
  );
}

export default App;
