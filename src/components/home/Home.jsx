import React from "react";
import Card from "../card/Card";
import "./Home.scss";
import useHome from "./useHome";
import Modals from "../modals/Modals";
import { useSelector } from "react-redux";

const Home = () => {
  const { datas,details, scrollableContainerRef, status, lengthStatus,page } = useHome();
  // const {page} =useSelector(state => state.data)
  console.log(datas,details,"blahblahblahblahblahblahblahblahblah");
  console.log(lengthStatus,"lengthStatus")
  console.log(page,"page")
  return (
     
    <div className="home-container">
     <Modals />
      <h1>Home</h1>
      <div className="cards-container" ref={scrollableContainerRef}>
        {datas?.map((item) => (
          <Card name={item.name} age={item.age} id={item.id} />
        ))}
        <div className="loading-container">
          {!lengthStatus ? (
            status === "loading" && <p>Loading...</p>
          ) : (
            <p>End</p>
          )}
        </div>
      </div>
    </div>
  ); 
};

export default Home;
