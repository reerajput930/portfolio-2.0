import React from "react";

export default function Card({data}) {

  return (
    <div class="card">
      <h2 class="card-heading">{data.title}</h2>
      <div class="card-body">
        <p>{data.desc}</p>
      </div>
      <div class="card-buttons">
        <a href={data.btn1} target="_blank"><button class="card-button">Code link</button></a>
        <a href={data.btn2}  target="_blank" ><button class="card-button">live link</button></a>
        
      </div>
      <div style={{display:"flex",flexDirection:"row",flexWrap:"wrap"}}>
      {data.tag.map((item)=>{
        return <div style={{margin:"5px"}} class="hashtag"> #{item} </div>

      })}

      </div>
    </div>
  );
}
