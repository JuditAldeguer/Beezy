import React, { useState, useEffect } from "react";
//Services
import ls from "../services/local-storage";
import api from "../services/api";
import { data } from "../types/Data";
//Styles
import '../styles/App.scss';
//Components
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import Loading from "./secondary-c/Loading";

// interface IState {
//   data: data[];
// }

function App() {
  //useState
  const [listCharacters, setListCharacters] = useState([]);
  const [filteredListCharacters, setFilteredListCharacters] = useState(listCharacters);
  const [searchWord, setSearchWord] = useState('');
  const [orderBy, setOrderBy] = useState("name");
  const [isLoading, setIsLoading] = useState(false);
  const [numberOfPages, setNumberOfPages] = useState('');
  let pageNumCont;
  const [pageNum, setPageNum] = useState(1);
  
  // useEffect
 useEffect(() => {
   setIsLoading(true);
   api.callToApi(searchWord, orderBy).then((response) => {
     setListCharacters(response.results);
     setIsLoading(false);
     setSearchWord(" ");
     setOrderBy("name");
     setNumberOfPages(response.info.pages);
   });
 }, [pageNum]);
  
  
  
  // handles

  return (
    <div className="App">
      <Header />
      <Loading loading={isLoading} />
      <Main  data={filteredListCharacters} searchWord={searchWord} />
      <Footer />
    </div>
  );
}

export default App;
