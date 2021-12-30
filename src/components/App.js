import React, { useState, useEffect } from "react";
import { Route, Routes, useRouteMatch } from "react-router-dom";
//Services
import ls from "../services/local-storage";
import api from "../services/api";
import { data } from "../types/Data";
//Styles
import "../styles/App.scss";
//Components
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import Loading from "./secondary-c/Loading";
import NotFoundPage from "./secondary-c/NotFoundPage";

// interface IState {
//   data: data[];
// }

function App() {
  //useState
  const [listCharacters, setListCharacters] = useState([]);
  const [filteredListCharacters, setFilteredListCharacters] =
    useState(listCharacters);
  const [searchWord, setSearchWord] = useState("");
  const [orderBy, setOrderBy] = useState("name");
  const [isLoading, setIsLoading] = useState(false);
  const [numberOfPages, setNumberOfPages] = useState(1);
  let pageNumCont;
  const [pageNum, setPageNum] = useState(1);

  // useEffect
  useEffect(() => {
    setIsLoading(true);
    if (searchWord === "") {
      api.callToApi2().then((response) => {
        updateStates(response);
      });
    }
    api.callToApi(searchWord, orderBy).then((response) => {
      updateStates(response);
    });
  }, [searchWord]);

  const updateStates = (response) => {
    setListCharacters(response);
    setIsLoading(false);
    setNumberOfPages(response.length / 10);
  };




  // handles

  return (
    <div className="App">
      <Header />
      <Loading loading={isLoading} />
      <Main data={filteredListCharacters} searchWord={searchWord} />
      <Footer />
      {/* <Routes>
            <Route path="/" exact />
            <Route element={NotFoundPage} />
          </Route> 
      </Routes> */}
    </div>
  );
}

export default App;
