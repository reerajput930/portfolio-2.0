import React, { useEffect, useState } from "react";
import Card from "./Card";
import data from "./projectdata";
import { Link } from "react-router-dom";
import style from "./Allprojectsdetail.module.css";

export default function Allprojectsdetail() {
  const [input, setInput] = useState(["reactjs"]);

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
    } else {
      let findtag = tagarray.find((tag) => tag === input[0]);
      if (findtag == input[0]) {
        return item;
      }
    }
  });

  return (
    <div className="allprojectdetail--block">
      
      <div className="heading--block">
        <h2 className={style.heading}>Other Noteworthy Projects</h2>
      </div>
      <div className={style.allBtnBlock} style={{ display: " flex" }}>
        <span className={style.filter}>Filter By - </span>
        <button onClick={() => setInput(["reactjs"])} className="project--btn">
          Reactjs Project{" "}
        </button>
        <span className={style.break}>/</span>

        <button onClick={() => setInput(["mern"])} className="project--btn">
          Mern Project
        </button>
        <span className={style.break}>/</span>
        <button
          onClick={() => setInput(["js", "html", "css"])}
          className="project--btn"
        >
          Html/Css/Js Project
        </button>

        {/* <button onClick={()=> setInput("")} className="project--btn">NativeProject</button> */}
      </div>

      <div
        className={style.projectsblock}
        style={{
          width: "-webkit-fill-available",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
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
