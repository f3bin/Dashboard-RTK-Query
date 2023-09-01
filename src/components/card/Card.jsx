import React from "react";
import { FaStickyNote } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { showModal } from "../../redux/slices/dataSlice";
import "./Card.scss";


const Card = ({ id, name, age }) => {
const dispatch = useDispatch();
     const handleShowModal =() =>{
          dispatch(showModal());
     }
  return (
    <div key={id} className="card-item">
      <h3>{name}</h3>
      <p>{age}</p>
      <div className="card-footer">
        <FaStickyNote size={20} style={{ cursor: "pointer" }} onClick={handleShowModal}/>
      </div>
    </div>
  );
};

export default Card;
