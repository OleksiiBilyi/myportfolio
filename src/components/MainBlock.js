import React from "react";
import { Link } from "react-router-dom";

export const MainBlock = () => {
  return (
    <div className="page__main-block main-block">
      <div className="main-block__container container">
        <div className="main-block__content">
          <h1 className="main-block__greeting">
            Hi, my name is <span style={{color: '#5C62EC', fontWeight: 800}}>Oleksii</span>
            <br/> 
              <span className="span-greeting">a frontend developer</span>
          </h1>
          <h2 className="main-block__message">with passion for learning and creating.</h2>
          <Link to='/projects' className="main-block__watch--btn">Watch</Link>
        </div>
      </div>
    </div>
  )
}