import React from "react";
import styles from "./Projects.module.css"; // Import the CSS module
import dashboard from "./images/dashboard-templates.jpg";
import growth from "./images/growth.jpg";
import gitapi from "./images/githubapi.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";


const Projects = () => {
  return (
    <div id="projects" className={styles.block}>
      <h2>
        <span className={styles.colored}>04.</span>Some Things I've Built
      </h2>
      <div className={styles["project-card"]}>
        <div className={styles["image-container"]}>
          <img style={{ width: "25rem" }} src={dashboard} alt="Project Image" />
        </div>
        <div className={styles["project-details"]}>
          <h2>
            {" "}
            <a
              href="https://github.com/reerajput930/zero-dashboard"
              target="_blank"
            >
              Zero Dashboard{" "}
            </a>
          </h2>
          <p>
            A dashboard is an information management tool that receives data
            from a linked database to provide data visualizations. It typically
            offers high-level information in one view that end users can use to
            answer a single question. Used MERN Tech Stack.
          </p>
          <div className={styles["project-skills"]}>
            <ul style={{flexDirection:"row"}}>
              <li>ReactJs</li>
              <li>NodeJs</li>
              <li>Javascript</li>
              <li>Mongoose</li>
            </ul>
          </div>
          <a
            href="https://github.com/reerajput930/zero-dashboard"
            target="_blank"
            className={styles["github-link"]}
          >
            <FontAwesomeIcon className={styles.github} icon={faGithub} />
          </a>
        </div>
      </div>
      <div id={styles.middle} className={styles["project-card"]}>
        <div
          className={`${styles["project-details-left"]} ${styles["project-details"]}`}
        >
          <h2>
            {" "}
            <a
              href="https://github.com/reerajput930/Github-followers-api"
              target="_blank"
            >
              Github Followers API
            </a>
          </h2>
          <p>
            Provide all the github followers on the page .Used Reactjs and
            Github followers Api , have Pagination and Filteration feature.
          </p>
          <div className={styles["project-skills"]}>
            <ul style={{flexDirection:"row"}}>
              <li>HTML</li>
              <li>CSS</li>
              <li>ReactJs</li>
              <li>API</li>
            </ul>
          </div>
          <a
            href="https://github.com/reerajput930/Github-followers-api"
            target="_blank"
            className={styles["github-link"]}
          >
            <FontAwesomeIcon className={styles.github} icon={faGithub} />
          </a>
        </div>
        <div className={styles["image-container"]}>
          <img style={{ width: "25rem" }} src={gitapi} alt="Project Image" />
        </div>
      </div>
      <div className={styles["project-card"]}>
        <div className={styles["image-container"]}>
          <img style={{ width: "25rem" }} src={growth} alt="Project Image" />
        </div>
        <div className={styles["project-details"]}>
          <h2>
            {" "}
            <a
              href="https://github.com/reerajput930/growth-app"
              target="_blank"
            >
              Growth Application{" "}
            </a>
          </h2>
          <p>
            Growth Application is a Todo app , which is build for two users
            only.This project have the jira software of drag and drop feature.
          </p>
          <div className={styles["project-skills"]}>
            <ul style={{flexDirection:"row"}}>
              <li>ReactJs</li>
              <li>Tailwindcss</li>
              <li>NodeJs</li>
              <li>MongooseJs</li>
            </ul>
          </div>
          <a
            href="https://github.com/reerajput930/growth-app"
            target="_blank"
            className={styles["github-link"]}
          >
            <FontAwesomeIcon className={styles.github} icon={faGithub} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Projects;
