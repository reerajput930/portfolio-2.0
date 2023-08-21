import "../index.css";
import style from "./Experiences.module.css";

export default function Experiences() {
  return (
    <div id="experence" className="experience">
      <h2>
        {" "}
        <span className={style.colored}>03.</span>Experience!
      </h2>

      <div className="timeline">
        <div className="timeline-row">
          <div className="timeline-time">
            June 2022 - Present<small>Full-Time</small>
          </div>
          <div className="timeline-content">
            <h4>ReactJs Developer · Delhi</h4>
            <p>
              {" "}
              Embarking on a exciting{" "}
              <span className={style.highlight}>
                three-month paid internship
              </span>{" "}
              at Reverr, a{" "}
              <span className={style.highlight}>Product Based StartUp</span> at
              Delhi,India.
              <span className={style.highlight}>
                {" "}
                Leading the frontend team{" "}
              </span>{" "}
              while crafting in React.js for an impactful experience.
            </p>
          </div>
        </div>

        <div className="timeline-row">
          <div className="timeline-time">
            May 2022 - July 2022<small>Full-Time</small>
          </div>
          <div className="timeline-content">
            <h4>Junior Software Engineer · Bangalore</h4>
            <p>
              {" "}
              Spiced up my career with a sizzling{" "}
              <span className={style.highlight}>
                {" "}
                three-month internship
              </span>{" "}
              as a
              <span className={style.highlight}>
                Junior Software Engineer{" "}
              </span>{" "}
              at Eduladder Company, igniting innovation from{" "}
              <span className={style.highlight}>Bangalore, India </span> .
            </p>
          </div>
        </div>

        <div className="timeline-row">
          <div className="timeline-time">
            Feb 2022 - feb 2022<small>Part-Time</small>
          </div>
          <div className="timeline-content">
            <h4>Freelancing</h4>
            <p>
              Crafted captivating{" "}
              <span className={style.highlight}> WordPress websites </span>{" "}
              through <span className={style.highlight}> freelancing </span>,
              including the creation of{" "}
              <a target="_blank" href="https://divulgejute.com">
                <span className={style.highlight}>
                  {" "}
                  https://divulgejute.com/{" "}
                </span>
              </a>
            </p>
          </div>
        </div>

        <div className="timeline-row">
          <div className="timeline-time">
            Dec 2021 - April 2022<small>Full-time</small>
          </div>
          <div className="timeline-content">
            <h4>Web Developer · Germany</h4>
            <p>
              In three thrilling months, I harnessed my{" "}
              <span className={style.highlight}> web development </span> prowess
              during a paid internship at the cutting-edge{" "}
              <span className={style.highlight}> Germany-based startup </span>,
              How To Abroad.
            </p>
          </div>
        </div>

        <div className="timeline-row">
          <div className="timeline-time">
            Aug 2021 - Aug 2022<small>Part-time</small>
          </div>
          <div className="timeline-content">
            <h4>Google Developer Student Clubs</h4>
            <p>
              Empowering as Co-Lead of Competitive Programming, I've taught over  <span className={style.highlight}>  300+ students  </span>in coding languages like  <span className={style.highlight}>  HTML, CSS, JS, along with  data structures </span>, through   <span className={style.highlight}>  20+ engaging
              seminars </span>, while championing   <span className={style.highlight}> gender diversity</span>in tech.
            </p>
          </div>
        </div>
        <div className="timeline-row">
          <div className="timeline-time">
            Apr 2021 - Present<small>Part-time</small>
          </div>
          <div className="timeline-content">
            <h4>Microsoft Learn Student Ambassador</h4>
            <p>Engaged in more than <span className={style.highlight}> 150+ global tech events </span>, and  <span className={style.highlight}> Conducted in over  45+ </span>, and had the honor of being <span className={style.highlight}>interviewed by a Microsoft employee </span> .</p>
          </div>
        </div>

        <div className="timeline-row">
          <div className="timeline-time">
            Mar 2021-May 2021<small>open-source Contest</small>
          </div>
          <div className="timeline-content">
            <h4>GirlScript Summer of Code</h4>
            <p>Learned <span className={style.highlight}> Open-Source contribution </span> and <span className={style.highlight}> Team work </span>.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
