import { NavLink } from "react-router-dom";
//Styles
import "../../styles/components/characterCards.scss";
//component


const CharacterCard = (props: any) => {
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
          <p>{props.character.status}</p>
        </article>
      </NavLink>
    </>
  );
};

export default CharacterCard;
