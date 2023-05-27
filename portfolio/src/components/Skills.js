import "../index.css";

import html from "./skills/html.png";
import css from "./skills/css.png";
import javascript from "./skills/javascript.png";

import nodejs from "./skills/nodejs.png";
import git from "./skills/git.png";

import vsstudio from "./skills/vsstudio.png";

import wordpress from "./skills/wordpress.png";

import bootstrap from "./skills/bootstrap.png";
import ds from "./skills/ds.png";

import mongodb from "./skills/mongodb.png";
import expressjs from "./skills/expressjs.png";
import reactjs from "./skills/reactjs.png";
import tailwind from "./skills/tailwind.png";

export default function Skills() {

  
  return (
    <>
      <div className="techStack--block" style={{    flexDirection: "column"}}  id="skills">
        <h2
          style={{
            fontSize: "3em",
            fontFamily: "monospace",
            marginBottom: "10px",
          }}
        >
          Skills
        </h2>
        <div className="topskills--block">
          <h3 className="tech--subheading--block">TOP SKILLS</h3>

          <div className="items">
            <img
            
              className="icons"
              src={reactjs}
            />
            <img className="icons" src={javascript} />
            <img className="icons" src={html} />
            <img className="icons" src={css} />
            <img className="icons" src={mongodb} />
            <img className="icons" src={expressjs} />
            <img className="icons" src={nodejs} />
          </div>
        </div>

        <div className="other">
          <h3
            className="tech--subheading--block"
            style={{ marginTop: "1.4em" }}
          >
            OTHER SKILLS
          </h3>
          <div className="items">
            <img className="icons" src={tailwind} />
            <img className="icons" src={bootstrap} />
            <img className="icons" src={wordpress} />
            <img className="icons" src={ds} />
            <img className="icons" src={git} />
            <img className="icons" src={vsstudio} />
          </div>
        </div>
      </div>
      {/* <div class="dot">
        <div class="dot1"></div>
        <div class="dot1"></div>
        <div class="dot1"></div>
      </div> */}
    </>
  );
}
