import React, { Component, useState } from "react";
import { NavLink, Link } from 'react-router-dom'



export const Header = ()=> {

  const [open, setOpen] = useState(false);
  
  // const [activeBtn, setActiveBtn] = useState(false);

  return (
    <header className="header">
      <div className="header__container container">
        <nav className="nav-menu">
          <Link to='/'>
            <div className="logo">
              <h1 className="logo-text">Frontend</h1>
              <h2 className="logo-text-01">Portfolio</h2>
            </div>
          </Link>
          <ul className="menu-list">
            <li className="menu-item"><NavLink to='/' className="menu-link"  >Home</NavLink></li>
            <li className="menu-item"><NavLink to='/projects' className="menu-link">Projects</NavLink></li>
            <li className="menu-item"><NavLink to='/skills' className="menu-link">Skills</NavLink></li>
            <li className="menu-item"><NavLink to='/contacts' className="menu-link">Contacts</NavLink></li>
          </ul>
        </nav>
        {open && (
          <div className="menu--mobile">
            <nav className="nav-menu--mobile">
              <div className="logo">
                <h1 className="logo-text">Frontend</h1>
                <h2 className="logo-text-01">Portfolio</h2>
              </div>
            </nav>
            <ul className="menu-list--mobile">
              <li className="menu-item">
                <NavLink to='/' className="menu-link">Home</NavLink>
              </li>
              <li className="menu-item">
                <NavLink to='/projects' className="menu-link">Projects</NavLink>
              </li>
              <li className="menu-item">
                <NavLink to='/skills' className="menu-link">Skills</NavLink>
              </li>
              <li className="menu-item">
                <NavLink to='/contacts' className="menu-link">Contacts</NavLink>
              </li>
            </ul>
            <div 
              className="close-toggle-btn" 
              onClick={() => setOpen(false)}
            >
              <div className="menu-close-toggle"></div>
            </div>
          </div> 
        )}
        
        <div className="menu-toggle" onClick={() => setOpen(true)}>
          <div 
            className="menu-toggle-tg" 
          >
            <div className="menu-toggle-elem"></div>
          </div>
        </div>
      </div>
    </header>
  )
}