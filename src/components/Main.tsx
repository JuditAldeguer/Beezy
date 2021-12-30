//Styles
import "../styles/layout/main.scss";
//Components
import Filters from "./secondary-c/Filters";
import List from "./secondary-c/List";

interface IProps {
  data: [];
  searchWord: String;
}

const Main: React.FC<IProps> = ({ data, searchWord }) => {
   return (
    <main className="container">
      <Filters searchWord={searchWord} />
      <List data={data} />
    </main>
  );
};

export default Main;
