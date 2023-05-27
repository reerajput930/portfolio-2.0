import reactjs from "./icons/1.png"
import mern from "./icons/2.png"
import mobile from "./icons/3.png"
import html from "./icons/4.png"
import {Link} from "react-router-dom"

export default function Allprojects() {
  return (
    <div className="allprojects--block">
      <h3 style={{color:"whitesmoke",fontFamily:"cursive",fontWeight:"300",marginTop:"10px",marginBottom:"10px"}}> All Projects are here!</h3>
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          width: "80%",
          justifyContent: "center",
          alignItems: "center",
          marginBottom: "5em",
        }}
      >
       <Link  style={{
          display: "flex",
          flexWrap: "wrap",
          width:"100%",
          justifyContent: "center",
          alignItems: "center",
          
        }} to="/allprojectsdetail">
        <div
          className="block-1 block"
          style={{
            borderRadius: " 2em 0px 0px 0px",
            backgroundColor: "#6e7fd1",
          }}
        >
          <img style={{height:"6em",position:"relative",top:"-3em"}} src={mern}/>
          <h2 >MERN APPLICATIONS</h2>
         
        </div>
        <div
          className="block-2 block"
          style={{
            borderRadius: " 0px 2em 0px 0px",
            backgroundColor: "#343c55",
          }}
        > 
        <img style={{height:"6em",position:"relative",top:"-3em"}} src={reactjs}/>
          <h2>REACTJS APPLICATIONS</h2>
          
        </div>
        <div
          className="block-3 block"
          style={{
            borderRadius: " 0px 0px 0px 2em",
            backgroundColor: "#142eb5",
          }}
        >
          <img style={{height:"6em",position:"relative",top:"-2em"}} src={html}/>
          <h2>JAVASCRIPT APPLICATIONS</h2>
          <h2>HTML APPLICATIONS </h2>
          <h2>CSS APPLICATIONS</h2>
         
        </div>
        <div
          className="block-4 block"
          style={{
            borderRadius: " 0px 0px 2em 0px",
            backgroundColor: "#6b97d3",
          }}
        >
           <img style={{height:"6em",position:"relative",top:"-3em"}} src={mobile}/>
          <h2>React Native Applications</h2>
          
        </div>

        </Link>
      </div>
    </div>
  );
}
