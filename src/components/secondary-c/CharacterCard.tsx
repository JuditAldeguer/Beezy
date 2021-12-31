import { NavLink } from "react-router-dom";
import { v4 as uuid } from "uuid";
//Styles
import "../../styles/components/characterCards.scss";
//component


const CharacterCard = (props: any) => {

  
  return (
    <>
      <NavLink to={`./character/${props.character.id}`} title="Detail">
        <img className="card--img" src={props.character.img} alt="character" />
        <h3>
          <strong>{props.character.name}</strong>
        </h3>
          <p>
            <strong>Nickname: </strong>
            {props.character.nickname}
          </p>
      </NavLink>
    </>
  );
};

export default CharacterCard;
