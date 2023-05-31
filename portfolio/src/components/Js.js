import React, { useEffect,useState } from "react";
import Card from "./Card";
import data from "./projectdata";
import Allprojectsdetail from "./Allprojectsdetail";

export default function Js() {
    return (
        <Allprojectsdetail input={["html","css","js"]}/>
        // <h1>hellp</h1>
      );
}
