import React from 'react'
import PropTypes from 'prop-types'
import Link from 'gatsby-link'
import Helmet from 'react-helmet'
import Footer from '../components/Footer.js'
import './index.css'
import './queries.css'
import Canvas from '../components/Canvas.js'


const TemplateWrapper = ({ children, location }) =>
  <div>
    <Helmet
      title='Ankit Patel'
      meta={[
        { name: 'description', content: 'Software engineering student at the University of Waterloo.' },
        { name: 'keywords', content: 'software, engineer, waterloo, student' },
        { name: 'viewport', content: 'width=device-width' }
      ]}
    />
    <Canvas />
    <div className='children'>
          { children() }
    </div>
    <Footer />
    
    </div>


TemplateWrapper.propTypes = {
  children: PropTypes.func,
}

export default TemplateWrapper
