import "../index.css";
import style from "./BigScreenNavbar.module.css"

export default function bigScreenNavbar(){


    return(
        <div className={style.laptopViewNavbar} >
        <ul style={{ display: "flex" }} className={style.ulstyle}>
          {/* <Link to="/">
                <li>HOME</li>
              </Link> */}
          <li>
            <a href="#about"> <h2><span className={style.colored}>01.</span> About</h2></a>
          </li>
          <li>
            <a href="#skills--section"> <h2><span className={style.colored}>02.</span>Skills</h2></a>
          </li>
          <li>
            <a href="#experence"> <h2><span className={style.colored}>03.</span>Experience</h2></a>
          </li>
          <li>
            <a href="#projects"> <h2><span className={style.colored}>04.</span>Projects</h2></a>
          </li>
          
        </ul>
      </div>
    )
}