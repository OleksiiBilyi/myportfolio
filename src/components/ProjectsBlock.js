import React, { Component } from "react";
import project01 from "../img/2.jpg";
import project02 from "../img/3.jpg";
import project03 from "../img/4.jpg";
import project04 from "../img/5.jpg";
import project05 from "../img/6.jpg";
import project06 from "../img/7.jpg";


export class ProjectsBlock extends Component {
  render() {
    return(
      <div className="page__projects projects">
        <div className="projects__container container">
          <h1 className="projects__title">Projects</h1>
          <div className="project__items">
            <div className="projects__item">
              <img className="item-img" src={project01} alt="img-project"/>
              <div className="item-desc">
                <h4 className="item-title">Gaming streaming portal</h4>
              </div>
            </div>
            <div className="projects__item">
              <img className="item-img" src={project02} alt="img-project"/>
              <div className="item-desc">
                <h4 className="item-title">Gaming streaming portal</h4>
              </div>
            </div>
            <div className="projects__item">
              <img className="item-img" src={project03} alt="img-project"/>
              <div className="item-desc">
                <h4 className="item-title">Gaming streaming portal</h4>
              </div>
            </div>
            <div className="projects__item">
              <img className="item-img" src={project04} alt="img-project"/>
              <div className="item-desc">
                <h4 className="item-title">Gaming streaming portal</h4>
              </div>
            </div>
            <div className="projects__item">
              <img className="item-img" src={project05} alt="img-project"/>
              <div className="item-desc">
                <h4 className="item-title">Gaming streaming portal</h4>
              </div>
            </div>
            <div className="projects__item">
              <img className="item-img" src={project06} alt="img-project"/>
              <div className="item-desc">
                <h4 className="item-title">Gaming streaming portal</h4>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}