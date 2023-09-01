import React from "react";
import { FaStickyNote } from "react-icons/fa";
import "./Card.scss";

const Card = ({ id, name, age }) => {
  return (
    <div key={id} className="card-item">
      <h3>{name}</h3>
      <p>{age}</p>
      <div className="card-footer">
        <FaStickyNote size={20} style={{ cursor: "pointer" }} />
      </div>
    </div>
  );
};

export default Card;
