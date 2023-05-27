import React, { useEffect,useState } from "react";
import Card from "./Card";
import data from "./projectdata";
import { Link } from "react-router-dom";

export default function Allprojectsdetail({input}) {
  console.log("-------")
  console.log(input)
  console.log("-------")
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  //  it's time to filter the card
  // eg if mern--block is clicked all the mern application will be there on the screen
  let filteredData = data.filter((item) => {
    let tagarray = item.tag;    
    let findtag = tagarray.find((tag) => tag === input );
    if (findtag == input) {
      return item;
    }
  });


  return (
    <div className="allprojectdetail--block">
      <div className="heading--block">
        <h2>PROJECTS</h2>
      </div>
      <div  style={{ display:" flex",
    justifyContent:"center"}}>
      
        <Link to="/reactjs"><button className="project--btn">Reactjs Project</button></Link>
        <Link to="/mern"><button className="project--btn">Mern Project</button></Link>
        <Link to="/js"><button className="project--btn">Html/Css/Js Project</button></Link>
        <Link to="/native"><button className="project--btn">NativeProject</button></Link>
      </div>

      <div
        className="projects--block"
        style={{
          width: "-webkit-fill-available",
          display: "flex",
          justifyContent: "center",
          flexWrap: "wrap",
        }}
      >
        {filteredData.map((item) => {
          //    console.log(item)
          return <Card data={item} />;
        })}
      </div>
    </div>
  );
}
