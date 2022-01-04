//Styles
import "../styles/layout/main.scss";
//Components
import Filters from "./secondary-c/Filters";
import List from "./secondary-c/List";
//types
import {dataEl} from "../types/Data"

interface IProps {
  data: dataEl[];
  searchWord: String;
  handleChange: (v: string, i: string) => void;
  isLoading: boolean;
}

const Main: React.FC<IProps> = ({
  data,
  searchWord,
  handleChange,
  isLoading
}) => {
  return (
    <main className="container" id="filters">
      <Filters searchWord={searchWord} handleChange={handleChange} />
      <List data={data} isLoading={isLoading} />
    </main>
  );
};

export default Main;
