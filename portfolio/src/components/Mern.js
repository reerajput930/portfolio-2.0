import React, { useEffect,useState } from "react";
import Card from "./Card";
import data from "./projectdata";
import Allprojectsdetail from "./Allprojectsdetail";

export default function Mern() {
    return (
        <Allprojectsdetail input={["mern"]}/>
        // <h1>hellp</h1>
      );
}
