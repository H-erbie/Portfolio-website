import React from 'react'
import { useGlobalContext } from '../Contex'
import { langs } from '../Assets';
import { Fade} from "react-awesome-reveal";


const Skills = () => {
  const {activeLink} = useGlobalContext();

  return (
    
    <section id='skills' className='sp-section'>
     <h2 className='sub-head'>Skills</h2>
      <div className="skill-set">
      <Fade cascade damping={0.1} triggerOnce fraction={0} delay={1000} duration={1000}>

        {
          langs.map((item) => {
            const {id, icon, level} = item;
            return <article key={id} className='skill'>
              <span className='skill-icon'>{icon}</span>
              <span className='level'>{level}</span>
            </article>
          })
        }
        </Fade>
      </div>
     </section>
  )
}

export default Skills