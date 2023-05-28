import Homeimg from "./images/homeImg.jpg";
import profileimg from "./images/profilepic.jpg";
import Typewriting from "./Typewriting";
import Icons from "./Icons";

import github from "./icons/github.png";

import "../index.css";

export default function Home() {
  return (
    <div
      className="home--block"
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
      id="me"
    >
      {/* <img
        style={{
          position: "absolute",
          right: " -130px",
          top: "-149px",
          rotate: " deg(180)",
          rotate: "-31deg",
        }}
        src={github}
      /> */}
      <div className="inner--block">
        <div className="user--img">
          <img
            style={{ height: "15em", borderRadius: "100%" }}
            src={profileimg}
          />
        </div>
        <div className="user--detail">
          <h3 className="user--name" style={{ fontSize: "2em" }}>
            Hello ,It's me 🤟{" "}
          </h3>
          <h2 className="user--name" style={{ fontSize: "4em" }}>
            RIYA RAJPUT (REE){" "}
          </h2>

          {/* <Typewriting print="Who Brings Imagination into Reality Via Coding!" /> */}
          <div className="quote" style={{fontFamily:"monospace",fontSize:"21px",fontWeight:"300",marginTop:"10px"}} id="typewriter">Who Brings Imagination into Reality Via Coding!</div>

          <div className="icons--block">
            <Icons />
          </div>
        </div>
      </div>
    </div>
  );
}
