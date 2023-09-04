import React from "react";
import { FaStickyNote } from "react-icons/fa";
import useCard from "./useCard";
import "./Card.scss";

const Card = ({ id, name, age }) => {
  const { handleShowModal } = useCard();

  return (
    <div key={id} className="card-item">
      <h3>{name}</h3>
      <p>{age}</p>
      <div className="card-footer">
        <FaStickyNote
          size={20}
          style={{ cursor: "pointer" }}
          onClick={() => handleShowModal(id)}
          
        />
      </div>
    </div>
  );
};

export default Card;
