import React from 'react'
import { useGlobalContext } from '../Contex'
import { langs } from '../Assets';


const Skills = () => {
  const {activeLink} = useGlobalContext();

  return (
    
    <section id='skills' className='sp-section'>
     <h2 className='sub-head'>Skills</h2>
      <div className="skill-set">
        {
          langs.map((item) => {
            const {id, icon, level} = item;
            return <article key={id} className='skill'>
              <span className='skill-icon'>{icon}</span>
              <span className='level'>{level}</span>
            </article>
          })
        }
      </div>
     </section>
  )
}

export default Skills