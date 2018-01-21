import React from 'react'
import Link from 'gatsby-link'
import Project from '../components/Project.js'

class ProjectsPage extends React.Component {
  render() {
    return (
      <div className='main projects'>
        <div className='title'>
          <h1>Projects</h1>
        </div>
        <div className='project-row'>
          <Project
            name='Minesweeper'
            classes='aya link-box'
            href='https://github.com/EulerLoop/Minesweeper'
            caption=' Created in Java'
          />
          <Project
            name='Archimedes'
            classes='cannon link-box'
            href='https://github.com/EulerLoop/Archimedes'
            caption='2D Puzzle Platformer made with Unity'
          />
        </div>
        <div className='project-row'>
          <Project
            name='Snake Game'
            classes='latex link-box'
            href='https://github.com/EulerLoop/Snake-Game-created-in-Java'
            caption='Created in Java for a programming competition'
          />
          <Project
            name='Password Strength Determiner'
            classes='trendcast link-box'
            href='https://github.com/EulerLoop/Password-Strength-Determiner'
            caption='Common Passwords Data'
          />
        </div>
        <Link to='/'><button className='button-purple'>Home</button></Link>
      </div>
    );
  }
}

export default ProjectsPage