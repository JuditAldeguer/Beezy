import React, { useState, useEffect } from "react";
import {Route, Switch, useRouteMatch } from "react-router-dom";
//Services
import api from "../services/api";
//Styles
import "../styles/App.scss";
//Components
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import NotFoundPage from "./secondary-c/NotFoundPage";
import CharacterDetail from "./secondary-c/CharacterDetail";
//types
import {dataEl} from "../types/Data"

interface IState {
  data: dataEl[];
  characterId: string;
  noData: dataEl[];
}

interface MatchParams {
  characterId: string;
}

function App(): JSX.Element {
  //useState
  const [listCharacters, setListCharacters] = useState<IState["data"]>([]);
  const [filteredListCharacters, setFilteredListCharacters] =
    useState(listCharacters);
  const [searchWord, setSearchWord] = useState("");
  const [searchStatus, setSearchStatus] = useState("");
  const [searchAappearance, setSearchAppearance] = useState("");
  const [orderBy, setOrderBy] = useState("name");
  const [isLoading, setIsLoading] = useState(true);
  const [numberOfPages, setNumberOfPages] = useState(1);
  const [numberOfPagesWord, setNumberOfPagesWord] = useState(1);
  // let pageNumCont;
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
    api.callToApi(searchWord, pageNum.toString()).then((response) => {
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
  const routeData = useRouteMatch<MatchParams>("/character/:characterId");
  const characterId =
    routeData !== null ? parseInt(routeData.params.characterId) : "";
  const selectedCharacter = listCharacters.find((character) => {
    return character.char_id === characterId;
  });

  // handles
  const handleChange = (value: string, name: string) => {
    if (name === "searchName") {
      setSearchWord(value);
    }
    if (name === "orderBy") {
      setOrderBy(value);
    }
    if (name === "status") {
      setSearchStatus(value);
    }
    if (name === "appearance") {
      setSearchAppearance(value);
    }
  };

  const getFilteredData = () => {
    const newData: IState["data"] = listCharacters
      .filter((character) => {
        if (searchStatus !== "all") {
          return character.status.includes(searchStatus);
        } else return character;
      })
      .filter((character) => {
        if (searchAappearance === "yes") {
          return character.better_call_saul_appearance.length > 0;
        }
        if (searchAappearance === "no") {
          return character.better_call_saul_appearance.length === 0;
        } else return character;
      });
    setByOrder(newData);
    if (newData.length === 0) {
      const noData: IState["noData"] = [
        {
          char_id: 0,
          name: "There are no characters that match the requested filters.",
          img: "https://www.villas4u.com/assets/img/image-not-found.svg",
          nickname: "Not Found",
          birthday: "",
          occupation: [""],
          status: "",
          appearance: [0],
          portrayed: "",
          category: "",
          better_call_saul_appearance: [],
        },
      ];
      setFilteredListCharacters(noData);
    } else {
      setFilteredListCharacters(newData);
    }
  };

  const setByOrder = (newData: IState["data"]) => {
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
      <Main
        isLoading={isLoading}
        data={filteredListCharacters}
        searchWord={searchWord}
        orderBy={orderBy}
        status={searchStatus}
        appearance={searchAappearance}
        handleChange={handleChange}
      />
      <Footer />
      <Switch>
        <Route path="/" exact></Route>
        <Route path="/character/:characterId">
          <CharacterDetail
            character={selectedCharacter}
            characterId={characterId}
          />
        </Route>
        <Route>
          <NotFoundPage />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
