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
import firebase from "./skills/firebase.png"
import redux from "./skills/redux.png"
import style from "./Skills.module.css"

export default function Skills() {

  
  return (
    <>
      <div className={style.techStackBlock} style={{    flexDirection: "column"}}  id="skills">
        {/* <h2
          style={{
            fontSize: "3em",
            fontFamily: "monospace",
            marginBottom: "10px",
          }}
        >
          Skills
        </h2> */}
        <div className={style.topskillsBlock}>
          {/* <h3 className="tech--subheading--block">TOP SKILLS</h3> */}

          <div className={style.items}>
            <img
            
              className={style.icons}
              src={reactjs}
            />
            <img className={style.icons} src={javascript} />
            <img className={style.icons} src={html} />
            <img className={style.icons} src={css} />
            <img className={style.icons} src={firebase} />
            <img className={style.icons} src={redux} />
            <img className={style.icons} src={mongodb} />
            <img className={style.icons} src={expressjs} />
            <img className={style.icons} src={nodejs} />
          </div>
        </div>

        <div className="other">
          {/* <h3
            className="tech--subheading--block"
            style={{ marginTop: "1.4em" }}
          >
            OTHER SKILLS
          </h3> */}
          <div className={style.items}>
            <img className={style.icons} src={tailwind} />
            <img className={style.icons} src={bootstrap} />
            <img className={style.icons} src={wordpress} />
            <img className={style.icons} src={ds} />
            <img className={style.icons} src={git} />
            <img className={style.icons} src={vsstudio} />
          </div>
        </div>
      </div>
  
    </>
  );
}
