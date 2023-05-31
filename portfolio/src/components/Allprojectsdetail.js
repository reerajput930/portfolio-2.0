import React, { useEffect, useState } from "react";
import Card from "./Card";
import data from "./projectdata";
import { Link } from "react-router-dom";

export default function Allprojectsdetail({ input }) {
  console.log("-------");
  console.log(input.length);
  console.log("-------");

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  //  it's time to filter the card
  // eg if mern--block is clicked all the mern application will be there on the screen
  let filteredData = data.filter((item) => {
    let tagarray = item.tag;
    if (input.length > 1) {
      let findtag = tagarray.find(
        (tag) => tag === (input[0] || input[1] || input[2])
      );
      if (findtag == (input[0] || input[1] || input[2])) {
        return item;
      }
    }
    else{
      let findtag = tagarray.find(
        (tag) => tag === (input[0] )
      );
      if (findtag == (input[0])) {
        return item;
      }

    }

    
  });

  return (
    <div className="allprojectdetail--block">
      <div className="heading--block">
        <h2>PROJECTS</h2>
        <Link to="/">
          <button className="btn">BACK</button>
        </Link>
      </div>
      <div
        className="all--btn--block"
        style={{ display: " flex", justifyContent: "center" }}
      >
        <Link to="/reactjs">
          <button className="project--btn">Reactjs Project</button>
        </Link>
        <Link to="/mern">
          <button className="project--btn">Mern Project</button>
        </Link>
        <Link to="/js">
          <button className="project--btn">Html/Css/Js Project</button>
        </Link>
        <Link to="/native">
          <button className="project--btn">NativeProject</button>
        </Link>
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
