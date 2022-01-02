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
  const [searchStatus, setSearchStatus] = useState("");
  const [searchAappearance, setSearchAppearance] = useState("");
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
      setNumberOfPagesWord(
        response.length / 10 <= 1 ? 1 : response.length / 10
      );
    });
  };

   useEffect(() => {
     getFilteredData();
   }, [listCharacters, searchWord, searchStatus, searchAappearance, orderBy]);

  //useRef
  // const routeData = useRouteMatch("/character/:characterId");
  // const characterId =
  //   routeData !== null ? parseInt(routeData.params.characterId) : "";
  // const selectedCharacter = listCharacters.find((character) => {
  //   return character.id === characterId;
  // });

  // handles
  const handleChange = (value, name) => {
    if (name === "searchName") {
      setSearchWord(value);
    } if (name === "orderBy") {
      setOrderBy(value);
     }if (name === "status") {
       setSearchStatus(value);
     }if (name === "appearance") {
       setSearchAppearance(value);
     }
  };

   const getFilteredData = () => {
     const newData = listCharacters
       .filter((character) => {
         if (searchStatus !== "all") {
           return character.status.includes(searchStatus);
         } else return character;
        }      
       )
       .filter((character) => {
         if (searchAappearance === "yes") {
           return character.better_call_saul_appearance.length > 0;
         } if (searchAappearance === "no") {
           return character.better_call_saul_appearance.length === 0;
         } else return character;
       });
     setByOrder(newData);
     if (newData.length === 0) {
       const noData = [
         {
           name: "There are no characters that match the requested filters.",
           img: "https://www.villas4u.com/assets/img/image-not-found.svg",
           nickname: "Not Found",
         },
       ];
       setFilteredListCharacters(noData);
     } else {
       setFilteredListCharacters(newData);
     }
   };

  const setByOrder = (newData) => {
    if (orderBy === "nickname") {
      newData.sort(function (a, b) {
        if (a.nickname > b.nickname) {
          return 1;
        }
        if (a.nickname < b.nickname) {
          return -1;
        }
        return 0;
      });
    } else {
      newData.sort(function (a, b) {
        if (a.name > b.name) {
          return 1;
        }
        if (a.name < b.name) {
          return -1;
        }
        return 0;
      });
    }
  };


  return (
    <div className="App">
      <Header />
      <Loading loading={isLoading} />
      <Main
        data={filteredListCharacters}
        searchWord={searchWord}
        handleChange={handleChange}
      />
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
