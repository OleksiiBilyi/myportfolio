import React, { Component } from "react";
import { Header } from "./Header";

export class SkillsBlock extends Component {
  render() {
    return (
      <>
        <Header/>
        <div  className="page__skills-block skills-block">
          <h1 className="skills-block__title">Skills</h1>
          <div className="skills-block__container container">
            <div className="skills-block__content">
              <div className="skills-block__research-percentage">
                <div className="research-percentage__item">
                  <div className="skill-t-prc">
                    <h6 className="skill__title">HTML</h6>
                    <h6 className="num-prc np--html">100%</h6>
                  </div>
                  <div className="line-procent">
                    <div style={{width: '100%'}} className="learned-procent" > </div>
                  </div>
                </div>
                <div className="research-percentage__item">
                  <div className="skill-t-prc">
                    <h6 className="skill__title">CSS</h6>
                    <h6 className="num-prc np--css">85%</h6>
                  </div>
                  <div className="line-procent">
                    <div style={{width: '85%'}} className="learned-procent"> </div>
                  </div>
                </div>
                <div className="research-percentage__item">
                  <div className="skill-t-prc">
                    <h6 className="skill__title">JavaScript</h6>
                    <h6 className="num-prc np--js">70%</h6>
                  </div>
                  <div className="line-procent">
                    <div style={{width: '70%'}} className="learned-procent"> </div>
                  </div>
                </div>
                <div className="research-percentage__item">
                  <div className="skill-t-prc">
                    <h6 className="skill__title">React</h6>
                    <h6 className="num-prc np--react">25%</h6>
                  </div>
                  <div className="line-procent">
                    <div style={{width: '25%'}} className="learned-procent"> </div>
                  </div>
                </div>
                <div className="research-percentage__item">
                <div className="skill-t-prc">
                    <h6 className="skill__title">Backend</h6>
                  </div>
                  <div className="line-procent">
                    <div style={{width: ''}} className="learned-procent"> </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="skills-block__desc">
              <p className="skills-block__text">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum
              </p>
            </div>
          </div>
        </div>
      </>
    )
  }
}