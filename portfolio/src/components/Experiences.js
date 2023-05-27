import "../index.css"

export default function Experiences() {
  return (
    <div className="experience" id="experence">
      <h2>Experience!</h2>

      <div className="timeline">
        <div className="timeline-row">
          <div className="timeline-time">
            May 2022 - July 2022<small>Part-Time</small>
          </div>
          <div className="timeline-content">
            <h4>Junior Software Engineer · Internship</h4>
            <p>
              {" "}
              Doing Three Month paid internship at Eduladder Company as a Junior
              Software Engineer.
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
              Created wordpress websites.{" "}
              <a target="_blank" href="https://divulgejute.com">
                https://divulgejute.com/
              </a>
            </p>
          </div>
        </div>

        <div className="timeline-row">
          <div className="timeline-time">
            Dec 2021 - April 2022<small>Part-time</small>
          </div>
          <div className="timeline-content">
            <h4>Web Developer · Internship</h4>
            <p>
              Did Three Month paid internship at How To Abroad german based
              startup as a web developer.
            </p>
          </div>
        </div>

        <div className="timeline-row">
          <div className="timeline-time">
            Aug 2021 - Aug 2022<small>Part-time</small>
          </div>
          <div className="timeline-content">
            <h4>Google Developer Student Clubs</h4>
            <p>Co-Lead at Competitive Programming.</p>
          </div>
        </div>
        <div className="timeline-row">
          <div className="timeline-time">
            Apr 2021 - Present<small>Part-time</small>
          </div>
          <div className="timeline-content">
            <h4>Microsoft Learn Student Ambassador</h4>
            <p>Conduct and Participate in Tech Events on a global level.</p>
          </div>
        </div>

        <div className="timeline-row">
          <div className="timeline-time">
            Mar 2021-May 2021<small>Part-time</small>
          </div>
          <div className="timeline-content">
            <h4>GirlScript Summer of Code</h4>
            <p>Learned How to contribute in Open-Source and Team work.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
