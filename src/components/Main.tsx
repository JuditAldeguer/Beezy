//Styles
import { propTypes } from "react-bootstrap/esm/Image";
import "../styles/layout/main.scss";
//Components
import Filters from "./secondary-c/Filters";
import List from "./secondary-c/List";

interface IProps {
  data: [];
  searchWord: String;
  handleChange: Function;
}

const Main: React.FC<IProps> = ({ data, searchWord, handleChange }) => {
  return (
    <main className="container">
      <Filters searchWord={searchWord} handleChange={handleChange} />
      <List data={data} />
    </main>
  );
};

export default Main;
