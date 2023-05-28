import img1 from "../components/projects/1.jpg";
import img2 from "../components/projects/2.jpg";
import img3 from "../components/projects/3.jpg";
import img4 from "../components/projects/4.jpg";
import Slider from "./Slider";

export default function Porjects() {
  // const projects = [
  //   <img
  //     style={{ zIndex: "0" }}
  //     className="project--image--block zero-project"
  //     src={img1}
  //   />,

  //   <img
  //     style={{ zIndex: "0" }}
  //     className="project--image--block growth-project"
  //     src={img3}
  //   />,
  //   <img
  //     style={{ zIndex: "0" }}
  //     className="project--image--block github-api"
  //     src={img4}
  //   />,
  // ];

  const projects = [
    <div
      style={{ alignItems: "baseline" }}
      className="slider--block zero-project"
     
    >
      <div
       className="inner--slider--block"
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "baseline",
          marginLeft: "2em",
          letterSpacing: "0.5px",
        }}
      >
        <h2 style={{ fontSize: "4em", marginBottom: "15px" }}>
          Zero Dashboard
        </h2>
        <p style={{ textAlign: "left", width: "50%" }}>
          A dashboard is an information management tool that receives data from
          a linked database to provide data visualizations. It typically offers
          high-level information in one view that end users can use to answer a
          single question.
        </p>
        <p style={{ marginBottom: "20px" }}>Used MERN Tech Stack.</p>
        <div className="btn--block">
          
          <a href="https://github.com/reerajput930/zero-dashboard" target="_blank"><button className="github--link btn">CODE LINK</button></a>
          <a href="https://zero-dashboard.netlify.app/" target="_blank"><button className="project--lint btn">LIVE PROJECT</button></a>
        </div>
      </div>
    </div>,

    

    <div className="slider--block github-api">
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "baseline",
          marginLeft: "2em",
          letterSpacing: "0.5px",
        }}
      >
        <h2 style={{ fontSize: "4em", marginBottom: "15px" }}>
          Github Followers API
        </h2>
        <p style={{ textAlign: "left", width: "50%", marginBottom: "20px" }}>
          Provide all the github followers on the page .Used Reactjs and Github
          followers Api , have Pagination and Filteration feature.
        </p>
        <div className="btn--block">
          <a href="https://github.com/reerajput930/Github-followers-api" target="_blank"><button className="github--link btn">CODE LINK</button></a>
          <a href="https://pagination-filteration.netlify.app/" target="_blank"><button className="project--lint btn">LIVE PROJECT</button></a>
        </div>
      </div>
    </div>,
     <div className="slider--block  growth-project">
     <div
       style={{
         display: "flex",
         flexDirection: "column",
         justifyContent: "center",
         alignItems: "end",
         marginRight: "10.5em",
         letterSpacing: "0.5px",
       }}
     >
       <h2 style={{ fontSize: "4em", marginBottom: "15px" }}>
         Growth Application
       </h2>
       <p style={{ textAlign: "right", width: "50%", marginBottom: "20px" }}>
         Growth Application is a Todo app , which is build for two users
         only.This project have the jira software of drag and drop feature.
       </p>
       <div className="btn--block">
         <a href="https://github.com/reerajput930/growth-app" target="_blank"><button className="github--link btn">CODE LINK</button></a>
         <a href="https://github.com/reerajput930/growth-app" target="_blank"><button className="project--lint btn">LIVE PROJECT</button></a>
       </div>
     </div>
   </div>,
   
  ];
  return (
    <div className="project--block" style={{ padding: "46px", height: "65em" }}  >
      <h2
        style={{
          fontSize: "3em",
          fontFamily: "monospace",
          marginBottom: "10px",
          marginTop: "10px",
          color: "whitesmoke",
        }}
        id="pro"
        className="upper--project--subheading--block"
      >
        Projects
      </h2>
      <h2 className="project--subheading--block">My Creations</h2>

      <div
        className="upper--creative--block creative--block"
        style={{
          backgroundColor: "#6b97d3",
          left: " -1em",
          // top: " 0em"
          marginTop: "4em",
        }}
      ></div>

      <div
        className="lower--creative--block creative--block"
        style={{
          backgroundColor: "#142eb5",
          right: "0em",
          // top: "-0px",
          marginTop: "29em",
          width: "20em",
        }}
      ></div>

      <h3
        style={{
          color: "whitesmoke",
          fontFamily: "cursive",
          fontWeight: "300",
          marginTop: "10px",
        }}
      >
        My Top Creations
      </h3>
      <div
       className="slider--upper"
        style={{
          marginTop: "10em",
         
        }}
      >
        <Slider slides={projects} />
      </div>
    </div>
  );
}
