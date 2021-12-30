//Styles
import "../../styles/components/list.scss";
//component
import CharacterCard from "./CharacterCard";

function List(props: any) {
  //render
  const renderList = () => {
    return props.data.map((character: any) => {
      return (
        <li key={character.id} className="z_index">
          <CharacterCard
            character={character}
            characterId={props.characterId}
          />
        </li>
      );
    });
  };

  return (
    <section className="container">
      <h2 className="title">Characters list : </h2>
      <ul className="list">{renderList()}</ul>;
    </section>
  );
}

export default List;
