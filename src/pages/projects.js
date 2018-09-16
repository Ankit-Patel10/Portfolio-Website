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
            name='Televisor'
            classes='aya link-box'
            href='https://github.com/ankit-patel10/Televisor'
            caption='Responsive web app created with React to search TV info'
          />
          <Project
            name='Archimedes'
            classes='cannon link-box'
            href='https://github.com/Ankit-Patel10/Archimedes'
            caption='2D Puzzle Platformer made with Unity'
          />
        </div>
        <div className='project-row'>
          <Project
            name='Album Consensus'
            classes='latex link-box'
            href='https://github.com/ankit-patel10/Album-Consensus'
            caption='Node web app that displays general consensus on albums'
          />
          <Project
            name='Discord League Bot'
            classes='trendcast link-box'
            href='https://github.com/Ankit-Patel10/Discord-LeagueBuilds-Bot'
            caption='Discord bot that displays league builds'
          />
        </div>
        <div className='project-row'>
          <Project
            name='Chatfinity'
            classes='latex link-box'
            href='https://github.com/Ankit-Patel10/Chatfinity'
            caption='Chat client created with Socket.io and Node.js'
          />
          <Project
            name='Hearthstone Pack Simulator'
            classes='trendcast link-box'
            href='https://github.com/Ankit-Patel10/Hearthstone-Card-Pack-Simulator'
            caption='Generates random cards'
          />
        </div>
        <div className='project-row'>
          <Project
            name='Escape The Mines'
            classes='aya link-box'
            href='https://github.com/Ankit-Patel10/Escape-the-Mines'
            caption='Minesweeper with a special recursive algorithm'
          />
          <Project
            name='Snake Game'
            classes='latex link-box'
            href='https://github.com/Ankit-Patel10/Snake-Game-created-in-Java'
            caption='Created in Java for a programming competition'
          />
        </div>
        <div className='project-row'>
        <Project
            name='Password Strength Determiner'
            classes='trendcast link-box'
            href='https://github.com/Ankit-Patel10/Password-Strength-Determiner'
            caption='Uses Diceware Algorithm'
          />
          <Project
            name='Simple Discord Spam Bot'
            classes='latex link-box'
            href='https://github.com/Ankit-Patel10/SimpleDiscordSpamBot'
            caption='Discord bot that spams messages to specific channels'
          />
        </div>
        <Link to='/'><button className='button-purple'>Home</button></Link>
      </div>
    );
  }
}

export default ProjectsPage