import { NavLink } from "react-router-dom";
import { v4 as uuid } from "uuid";
//Styles
import "../../styles/components/characterCards.scss";
//component


const CharacterCard = (props: any) => {

  const renderOcupation = () => {
    debugger;
    return props.character.occupation.map((o:any) => {
      return <li key={uuid()}>{o}</li>;
    });
  }
  return (
    <>
      <NavLink
        to="/"
        // to={`./character/${props.character.id}`}
        title="Detail"
      >
        <article className="card">
          <img src={props.character.img} alt="character" />
          <h2><strong>{props.character.name}</strong></h2>
          <ul>{renderOcupation()}</ul>
          <p>{props.character.status}</p>
        </article>
      </NavLink>
    </>
  );
};

export default CharacterCard;
