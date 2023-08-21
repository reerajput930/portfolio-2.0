import React from "react";
import style from "./Card.module.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faFolderOpen} from '@fortawesome/free-regular-svg-icons'
import {faGithub} from '@fortawesome/free-brands-svg-icons'
import {faGlobe} from '@fortawesome/free-solid-svg-icons'

export default function Card({ data }) {
  return (
    <div class={style.card}> 
      <div class={style.cardButtons}> 
      <FontAwesomeIcon className={style.file} icon={faFolderOpen} />
      <div className={style.redirectIcons}>

        <a href={data.btn1} target="_blank">
        <FontAwesomeIcon className={style.github} icon={faGithub} />
        </a>
      
      </div>
      </div>
      <h2 class={style.cardHeading}>{data.title}</h2>
      <div class={style.cardBody}>
        <p>{data.desc}</p>
      </div>
      <div style={{ display: "flex", flexDirection: "row", flexWrap: "wrap" }}>
        {data.tag.map((item) => {
          return (
            <div style={{ margin: "5px" }} class={style.hashtag}>
              {" "}
            {item}{" "}
            </div>
          );
        })}
      </div>
    </div>
  );
}
