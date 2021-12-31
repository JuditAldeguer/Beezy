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
  const [numberOfPagesWord, setNumberOfPagesWord] = useState(1);
  let pageNumCont;
  const [pageNum, setPageNum] = useState(0);

  // useEffect
  useEffect(() => {
    setIsLoading(true);
    if (searchWord === "") {
      api.callToApi2().then((response) => {
        setNumberOfPages(response / 10);
      });
    }
    updateStates();
  }, [searchWord]);

  const updateStates = () => {
    api.callToApi(searchWord, pageNum).then((response) => {
      setListCharacters(response);
      setIsLoading(false);
      const num = response.length / 10 <= 1 ? 1 : response.length / 10;
      console.log(num);
      setNumberOfPagesWord(
        response.length / 10 <= 1 ? 1 : response.length / 10
      );
    });
  };

  //useRef
  // const routeData = useRouteMatch("/character/:characterId");
  // const characterId =
  //   routeData !== null ? parseInt(routeData.params.characterId) : "";
  // const selectedCharacter = listCharacters.find((character) => {
  //   return character.id === characterId;
  // });

  // handles

  return (
    <div className="App">
      <Header />
      <Loading loading={isLoading} />
      <Main data={listCharacters} searchWord={searchWord} />
      <Footer />
      {/* <Routes>
        <Route path="/" exact element={(Header, Loading, Main, Footer)} />
         <Route path="/character/:characterId">
              <CharacterDetail
                character={selectedCharacter}
                characterId={characterId}/>
         <Route />
        <Route element={NotFoundPage} />
      </Routes> */}
    </div>
  );
}

export default App;
