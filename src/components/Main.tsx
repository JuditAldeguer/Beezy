//Styles
import "../styles/layout/main.scss";
//Components
import Filters from "./secondary-c/Filters";
import List from "./secondary-c/List";

interface IProps {
  data: [];
  searchWord: String;
  handleChange: Function;
  isLoading: Boolean;
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
