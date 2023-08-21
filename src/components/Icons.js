import github from "./icons/github.png";
import linkdin from "./icons/linkdin.png";
import insta from "./icons/insta.png";
import youtube from "./icons/youtube.png";
import style from "./Icons.module.css";

export default function Icons() {
  return (
    <div className={style.block} >
      <a href="https://github.com/reerajput930" target="_blank">
        {" "}
        <img className={style.img} src={github} />
      </a>

      <a
        href="https://www.linkedin.com/in/riya-rajput-23400a200/"
        target="_blank"
      >
        <img className={style.img} src={linkdin} />
      </a>

      <a
        
        href="https://www.instagram.com/rajputriya930/"
        target="_blank"
      >
        <img className={`${style.img} ${style.insta}`} src={insta} />
      </a>
      <a
        href="https://www.youtube.com/channel/UC0635BP1YEl9wYp6cFBpHrA"
        target="_blank"
      >
        {" "}
        <img className={`${style.img} ${style.youtube}`} src={youtube} />
      </a>
    </div>
  );
}
