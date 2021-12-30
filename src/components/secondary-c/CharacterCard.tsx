//Styles
import "../../styles/components/characterCards.scss";
//component
import { NavLink } from "react-router-dom";

const CharacterCard = (props: any) => {
  return (
    <>
      <NavLink to={`./character/${props.character.id}`} title="Detail">
        <article className="card z_index">
          <img
            className="z_index"
            src={props.character.image}
            alt="character"
          />
          <h2 className="z_index">
            <strong>{props.character.name}</strong>
          </h2>
          <p className="z_index">{props.character.species}</p>
        </article>
      </NavLink>
    </>
  );
};

export default CharacterCard;
