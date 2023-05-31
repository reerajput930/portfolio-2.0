import reactjs from "./icons/1.png";
import mern from "./icons/2.png";
import mobile from "./icons/3.png";
import html from "./icons/4.png";
import { Link } from "react-router-dom";
import Allprojectsdetail from "./Allprojectsdetail";

export default function Allprojects() {
  function handleClick(event) {
    // event.preventDefault();
    console.log("Div clicked!");
    // Additional logic or actions you want to perform
  }
  return (
    <div className="allprojects--block">
      <h3
        style={{
          fontSize: "35px",
          color: "whitesmoke",
          fontFamily: "monospace",
          fontWeight: "300",
          marginTop: "10px",
          marginBottom: "10px",
        }}
      >
        {" "}
        All Projects are here,
        <p style={{ fontSize: "25px" }}>
          {" "}
          With code link and live projects link!
        </p>
      </h3>
      <div
        className="inner--allproject--block"
        style={{
          display: "flex",
          flexWrap: "wrap",
          width: "80%",
          justifyContent: "center",
          alignItems: "center",
          marginBottom: "5em",
        }}
      >
        {/* <Link  style={{
          display: "flex",
          flexWrap: "wrap",
          width:"100%",
          justifyContent: "center",
          alignItems: "center",
          
        }} to="/allprojectsdetail"> */}

        <Link to="/mern" onClick={handleClick}>
          <div
            className="block-1 block"
            style={{
              borderRadius: " 2em 0px 0px 0px",
              backgroundColor: "#6e7fd1",
            }}
            onClick={() => <Allprojectsdetail input={"mern"} />}
          >
            <img
              style={{ height: "6em", position: "relative", top: "-3em" }}
              src={mern}
            />
            <h2>MERN APPLICATIONS</h2>
          </div>
        </Link>

        <Link to="/reactjs" onClick={handleClick}>
          <div
            className="block-2 block"
            style={{
              borderRadius: " 0px 2em 0px 0px",
              backgroundColor: "#343c55",
            }}
          >
            <img
              style={{ height: "6em", position: "relative", top: "-3em" }}
              src={reactjs}
            />
            <h2>REACTJS APPLICATIONS</h2>
          </div>
        </Link>

        <Link to="/js" onClick={handleClick}>
          <div
            className="block-3 block"
            style={{
              borderRadius: " 0px 0px 0px 2em",
              backgroundColor: "#142eb5",
            }}
          >
            <img
              style={{ height: "6em", position: "relative", top: "-2em" }}
              src={html}
            />
            <h2>JAVASCRIPT APPLICATIONS</h2>
            <h2>HTML APPLICATIONS </h2>
            <h2>CSS APPLICATIONS</h2>
          </div>
        </Link>

        <Link to="/native" onClick={handleClick}>
          <div
            className="block-4 block"
            style={{
              borderRadius: " 0px 0px 2em 0px",
              backgroundColor: "#6b97d3",
            }}
          >
            <img
              style={{ height: "6em", position: "relative", top: "-3em" }}
              src={mobile}
            />
            <h2>React Native Applications</h2>
          </div>
        </Link>
      </div>
    </div>
  );
}
