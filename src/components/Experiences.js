\import { useState } from "react";
import "../index.css";
import style from "./Experiences.module.css";
import arrow from "./images/arrow-turn-down-right-svgrepo-com.png";

export default function Experiences() {
  const [show1, setShow1] = useState(false);
  const [show2, setShow2] = useState(false);
  const [show3, setShow3] = useState(false);
  return (
    <div id="experence" className="experience">
      <h2>
        {" "}
        <span className={style.colored}>03.</span>Experience!
      </h2>
     <div className="timeline-row">
          <div className="timeline-time">
            Apr 2021 - 2024 <small></small>
          </div>
          <div className="timeline-content">
            <h4>Microsoft Learn Ambassador</h4>
            <p>
              Engaged in more than{" "}
              <span className={style.highlight}> 150+ global tech events </span>
              , and{" "}
              <span className={style.highlight}> Conducted in over 45+ </span>,
              and had the honor of being{" "}
              <span className={style.highlight}>
                interviewed by a Microsoft employee{" "}
              </span>{" "}
              .
            </p>
          </div>
        </div>

      <div className="timeline">
        <div className="timeline-row">
          <div className="timeline-time">
            June 2023 - Sep 2023<small>Internship</small>
          </div>
          <div className="timeline-content">
            <h4>ReactJs Developer · Delhi</h4>
            <p>
              <span className={style.highlight}>
                {" "}
                Leading the frontend team{" "}
              </span>{" "}
              at Reverr{" "}
              <span className={style.highlight}>Product Based StartUp</span> at
              Delhi,India.
            </p>
            {show1 && (
              <p className={style.lowerPara}>
                <span>
                  <img src={arrow} />
                  Till now solved more than 85+ assigned tasks on jira and
                  trello
                </span>
                <span>
                  <img src={arrow} />
                  Designed the{" "}
                  <a target="_blank" href="https://reverr.io/" className="link">
                    {" "}
                    Reverr Website{" "}
                  </a>
                </span>
                <span>
                  <img src={arrow} />
                  Designed and build the logic of{" "}
                  <a
                    target="_blank"
                    href="https://webapp.reverr.io/"
                    className="link"
                  >
                    {" "}
                    Reverr Community web-app
                  </a>
                  <span>
                    {" "}
                    <img src={arrow} />
                    space Filter (logic and ui)
                  </span>
                  <span>
                    {" "}
                    <img src={arrow} />
                    Upload Section (logic and ui)
                  </span>
                  <span>
                    {" "}
                    <img src={arrow} />
                    Posts Section (logic and ui)
                  </span>
                  <span>
                    {" "}
                    <img src={arrow} />
                    Clean Code Practice
                  </span>
                </span>

                <span className={style.techskills}>
                  <ul>
                    <li> #ReactJs</li>
                    <li> #FireBase</li>
                    <li>#AWSSerwe</li>
                    <li>#Redux</li>
                    <li>#RestApi</li>
                    <li>#CleanCode</li>
                  </ul>
                </span>
              </p>
            )}

            {show1 ? (
              <p className={style.hidepara} onClick={() => setShow1(false)}>
                show less
              </p>
            ) : (
              <p className={style.showpara} onClick={() => setShow1(true)}>
                ...show more
              </p>
            )}
          </div>
        </div>
{/* 
        <div className="timeline-row">
          <div className="timeline-time">
            May 2022 - July 2022<small>Full-Time</small>
          </div>
          <div className="timeline-content">
            <h4>Junior Software Engineer · Bangalore</h4>
            <p>
              <span className={style.highlight}>Junior Software Engineer </span>{" "}
              at Eduladder Company, which is{" "}
              <span className={style.highlight}>e-learning platform </span>{" "}
              platform at Bangalore, India
            </p>

            {show2 && (
              <p className={style.lowerPara}>
                <span>
                  <img src={arrow} />
                  Linux Command lines
                </span>
                <span>
                  <img src={arrow} />
                  Clean Code Practice
                </span>
                <span>
                  <img src={arrow} />
                  Solved more than 75+ bugs on the e-commerse platform
                </span>

                <span className={style.techskills}>
                  <ul>
                    <li> #ReactJs</li>
                    <li>#JS</li>
                    <li> #html5</li>
                    <li>#css3</li>
                    <li>#linux</li>
                    <li>#CleanCode</li>
                  </ul>
                </span>
              </p>
            )}
            {show2 ? (
              <p className={style.hidepara} onClick={() => setShow2(false)}>
                show less
              </p>
            ) : (
              <p className={style.showpara} onClick={() => setShow2(true)}>
                ...show more
              </p>
            )}
          </div>
        </div> */}

        <div className="timeline-row">
          <div className="timeline-time">
            <small>Side Hustle</small>
          </div>
          <div className="timeline-content">
            <h4>Freelancing · Dubai · India · Canada  </h4>
              
            <p>
              Canadian Saloon Website -{" "}
              <a
                className="link"
                target="_blank"
                href="https://ebellanailbar.com/index.html"
              >
                E Bella Nail Bar
              </a>
            </p>
            <p>
              Created pure (html5 , css3 ) Dubai Website -{" "}
              <a
                className="link"
                target="_blank"
                href="https://shehban-services-est.netlify.app/"
              >
                SHEHBAN TECHNICAL SERVICES EST
              </a>
              {/* <a target="_blank" href="https://divulgejute.com">
                <span className={style.highlight}>
                  {" "}
                  https://divulgejute.com/{" "}
                </span>
              </a> */}
            </p>
            <p>
              Indian e-commerce website -{" "}
              <a
                className="link"
                target="_blank"
                href="https://divulgejute.com/"
              >
                Divulge Jute
              </a>
            </p>
          </div>
        </div>

        <div className="timeline-row">
          <div className="timeline-time">
            Dec 2021 - April 2022<small>Internship</small>
          </div>
          <div className="timeline-content">
            <h4>Web Developer · Germany</h4>
            <p>
              In three thrilling months, I had worked upon the{" "}
              <span className={style.highlight}> Logic Builing </span> in
              Javascript at
              <span className={style.highlight}>
                {" "}
                Germany-based consultant startup{" "}
              </span>
              , How To Abroad.
            </p>
            {show3 && (
              <p className={style.lowerPara}>
                <span>
                  <img src={arrow} />I have designed and built the entire{" "}
                  <span className={style.highlight}>
                    {" "}
                    college filtering system{" "}
                  </span>
                  for{" "}
                  <a
                    href="https://howtoabroad.com/find-study-programmes-in-germany/"
                    className="link"
                  >
                    {" "}
                    HowToAbroad in Germany
                  </a>{" "}
                  , The added functionalities include the following:
                  <span>
                    {" "}
                    <img src={arrow} />
                    Pagination feature
                  </span>
                  <span>
                    {" "}
                    <img src={arrow} />
                    University Name , Course Name and Germany Ranking (text
                    filter)
                  </span>
                  <span>
                    {" "}
                    <img src={arrow} />
                    Duration and sortby (menu filter)
                  </span>
                  <span>
                    {" "}
                    <img src={arrow} />
                    Tuition Fee (Range Bar Filter)
                  </span>
                </span>

                <span className={style.techskills}>
                  <ul>
                    <li> #Javascript</li>
                    <li> #webScraping</li>
                    <li>#html5</li>
                    <li>#css3</li>
                    <li> #WordPress</li>
                    <li> #CleanCode</li>
                  </ul>
                </span>
              </p>
            )}
            {show3 ? (
              <p className={style.hidepara} onClick={() => setShow3(false)}>
                show less
              </p>
            ) : (
              <p className={style.showpara} onClick={() => setShow3(true)}>
                ...show more
              </p>
            )}
          </div>
        </div>

        <div className="timeline-row">
          <div className="timeline-time">
            Aug 2021 - Aug 2022<small></small>
          </div>
          <div className="timeline-content">
            <h4>Google Developer Clubs</h4>
            <p>
              Empowering as Co-Lead of Competitive Programming, I've taught over{" "}
              <span className={style.highlight}> 300+ students </span>in coding
              languages like{" "}
              <span className={style.highlight}>
                {" "}
                HTML, CSS, JS, along with data structures{" "}
              </span>
              , through{" "}
              <span className={style.highlight}> 20+ engaging seminars </span>,
              while championing{" "}
              <span className={style.highlight}> gender diversity</span>in tech.
            </p>
          </div>
        </div>
       

        <div className="timeline-row">
          <div className="timeline-time">
            Mar 2021-May 2021<small>open-source Contest</small>
          </div>
          <div className="timeline-content">
            <h4>GirlScript Summer of Code</h4>
            <p>
              Learned{" "}
              <span className={style.highlight}>
                {" "}
                Open-Source contribution{" "}
              </span>{" "}
              and <span className={style.highlight}> Team work </span>.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
