import React from 'react'

class Footer extends React.Component {
  render() {
    return (
      <div className='footer'>
       <a href='https://github.com/Ankit-Patel10' target='_blank' className='git'>
         <i className='icon git ion-social-github transition'></i>
       </a>
       <a href='https://linkedin.com/in/ankit-patel-10/' target='_blank' className='linkedin'>
         <i className='icon ion-social-linkedin transition'></i>
       </a>
       <a href='mailto:am9patel@edu.uwaterloo.ca' className='mail'>
         <i className='icon ion-paper-airplane transition'></i>
       </a>
      </div>
    );
  }
}

export default Footer
