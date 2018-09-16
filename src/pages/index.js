import React from 'react'
import Link from 'gatsby-link'

class IndexPage extends React.Component {
  render() {
    return (
<div className='main home'>
<p></p>
<p></p>
<p></p>
<p></p>
<p></p>
<p></p>
      	<div>
    <h1>Ankit Patel</h1>
    </div>
    <p>Hello, I am a first year <span className='red'> Software Engineering student </span>  at the
       University of Waterloo. My favourite things to do (besides programming) are playing video games, 
       reading Science Fiction novels, playing the piano, and socializing with friends. I am interested in occupying a
       <span className='green'> full-stack web development </span> or a<span className='green'> full-stack mobile development </span>position.</p>
    <p></p>
    <a href='/ResumeCurrent.pdf' target='_blank'><button className='button-purple'> RÉSUMÉ </button></a>
    <p></p>
    <Link to='/projects'><button className='button-blue'>PROJECTS</button></Link>
  </div>
    );
  }
}

export default IndexPage
