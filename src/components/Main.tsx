//Styles
import "../styles/layout/main.scss";
//Components
import Filters from "./secondary-c/Filters";
import List from "./secondary-c/List";

function Main(props:any) {
  //useState

  // useEffect

  // handles

  return (
    <main className="container">
      <Filters />
      <List data={props.data} searchWord={props.searchWord} />
    </main>
  );
}

export default Main;
