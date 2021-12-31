//Styles
import { ListGroup } from "react-bootstrap";
import "../../styles/components/list.scss";
//component
import CharacterCard from "./CharacterCard";

function List(props: any) {
  //render
  const renderList = (): JSX.Element[] => {
    return props.data.map((character: any) => {
      return (
        <ListGroup.Item
          variant="dark"
          key={character.char_id}
        >
          <CharacterCard
            character={character}
            characterId={character.char_id}
          />
        </ListGroup.Item>
      );
    });
  };

  return (
    <section className="container">
      <h2 className="title">Characters list : </h2>
      <ListGroup>{renderList()}</ListGroup>
    </section>
  );
}

export default List;
