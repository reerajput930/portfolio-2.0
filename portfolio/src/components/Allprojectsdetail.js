import React, { useEffect,useState } from "react";
import Card from "./Card";
import data from "./projectdata";

export default function Allprojectsdetail({select}) {
  console.log("-------")
  console.log(select)
  console.log("-------")
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  //  it's time to filter the card
  // eg if mern--block is clicked all the mern application will be there on the screen
  let filteredData = data.filter((item) => {
    let tagarray = item.tag;    
    let findtag = tagarray.find((tag) => tag === "reactjs");
    if (findtag == "reactjs") {
      return item;
    }
  });


  return (
    <div className="allprojectdetail--block">
      <div className="heading--block">
        <h2>ALL PROJECTS</h2>
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
