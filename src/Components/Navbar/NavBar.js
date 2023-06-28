import React from 'react'
import Icon  from "../Images/1.png"
import "./Navbar.css"

const NavBar = () => {
  return (
    <div className='NevSection'>
      <div className='navtitle'>
        <img className='icon' src={Icon} alt='Icon'/>  
        <h1 className='ntitle'>MarkDown App</h1>
      </div>
      <a className='DevLink' href='https://sidemenuportfolio.netlify.app/' target='_blank' rel="noreferrer"><i class="fa-solid fa-laptop-code"></i></a>
    </div>
  )
}

export default NavBar
