import React, { Component } from 'react';

import { NavLink } from 'react-router-dom';

export default class NavBar extends Component {
     render(){
          return (
               <div className="nav-container">
                    <nav className="navbar navbar-inverse navbar-default" role="navigation">
                         <div className="container-fluid">
                              <div className="navbar-header">
                                   <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1">
                                        <span className="sr-only">Toggle navigation</span>
                                        <span className="icon-bar" id="home"></span>
                                        <span className="icon-bar" id="about"></span>
                                        <span className="icon-bar" id="shopping"></span>
                                        <span className="icon-bar" id="contact"></span>
                                   </button>
                                   <a className="navbar-brand nav-link" href="/">Home</a>
                              </div>

                              <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                                   <ul className="nav navbar-nav">
                                        <li><NavLink activeclassName="selected" className="nav-link" to="/about">About Us</NavLink></li>
                                        <li className="dropdown">
                                             <NavLink activeclassName="selected" className="dropdown-toggle nav-link" data-toggle="dropdown" to="/shopping">Shopping<b className="caret"></b></NavLink>
                                             <ul className="dropdown-menu">
                                                  <li><NavLink activeclassName="selected" className="nav-link" to="/shopping/collars">Collars</NavLink></li>
                                                  <li className="divider"></li>
                                                  <li><NavLink activeclassName="selected" className="nav-link" to="/shopping/leashes">Leashes</NavLink></li>
                                                  <li className="divider"></li>
                                                  <li><NavLink activeclassName="selected" className="nav-link" to="/shopping/harnesses">Harnesses</NavLink></li>
                                             </ul>
                                        </li>
                                        <li><NavLink activeclassName="selected" className="nav-link" to="/contact">Contact Us</NavLink></li>
                                   </ul>
                              </div>
                         </div>
                    </nav>
               </div>
          )
     }
}
