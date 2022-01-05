//Styles
import { ListGroup } from "react-bootstrap";
import "../../styles/components/list.scss";
//component
import CharacterCard from "./CharacterCard";
import Loading from "./Loading";
//types
import {dataEl} from "../../types/Data"

type ListProps = {
  data: dataEl[];
  isLoading: boolean;
};

function List({ data, isLoading }: ListProps) {
  //render
  const renderList = () => {
    if (data.length !== 0) {
      return data.map((character: dataEl) => {
        return (
          <ListGroup.Item variant="dark" key={character.char_id}>
            <CharacterCard
              character={character}
              characterId={character.char_id.toString()}
            />
          </ListGroup.Item>
        );
      });
    }
  };

  return (
    <section className="container">
      <h2 className="title">Characters list : </h2>
      <Loading isLoading={isLoading} />
      <ListGroup>{renderList()}</ListGroup>
    </section>
  );
}

export default List;
