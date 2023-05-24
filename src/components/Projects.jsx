import React from "react";
import { useGlobalContext } from "../Contex";
import { projects } from "../Assets";

const Projects = () => {
  return (
    <section id="projects" className="sp-section">
      <h2 className="sub-head">Projects</h2>
      <div className={projects.length > 2 ? 'projects col-more' : 'projects'}>
        {projects.map((item) => {
          const { id, img, code, live, name } = item;
          return (
            <article key={id} className="project">
              <img src={img} alt={name} />
              <div className="project-overlay">
                <a href={live} target="_blank">
                  <button className="btn live">Live demo⚡</button>
                </a>
                <a href={code} target="_blank">
                  <button className="btn code">Source code🐈</button>
                </a>
              </div>
              <p className='project-name'>{name}</p>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default Projects;
