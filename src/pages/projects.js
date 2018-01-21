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
            name='Escape The Mines'
            classes='aya link-box'
            href='https://github.com/EulerLoop/Escape-the-Mines'
            caption='Minesweeper with a special recursive algorithm'
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
            caption='Uses Diceware Algorithm'
          />
        </div>
        <div className='project-row'>
          <Project
            name='Chatfinity'
            classes='latex link-box'
            href='https://github.com/EulerLoop/Chatfinity'
            caption='Chat client created with Socket.io and Node.js'
          />
          <Project
            name='Hearthstone Pack Simulator'
            classes='trendcast link-box'
            href='https://github.com/EulerLoop/Hearthstone-Card-Pack-Simulator'
            caption='Generates random cards'
          />
        </div>
        <Link to='/'><button className='button-purple'>Home</button></Link>
      </div>
    );
  }
}

export default ProjectsPage