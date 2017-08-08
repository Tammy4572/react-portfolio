import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import Layout from './Layout.js';
import Shopping from './Shopping';
import Collars from './shopping/Collars';
import Harnesses from './shopping/Harnesses';
import Leashes from './shopping/Leashes';

import { harnesses, collars, leashes } from '../js/data';


class App extends Component {
  render() {
    return (
         <div className="container-fluid">
              <div className="jumbotron">
                   <h1 className="co-name">FancyK9s</h1><small>a collar for every occasion</small>
              </div>
              <div className="primary-text">
                   <p>Inspired by the original owner of FancyK9s, a life-long love of dogs, and a desire to see the mission of FancyK9s continue, my daughter and I decided to take the reigns (or should that be “the leash?”) of the company.</p>
              </div>
              <div>
                   <div className="col-md-4 col-sm-6">
                        <div className="thumbnail">
                             <img src="http://via.placeholder.com/350x150" alt="" />
                             <div className="caption">
                                  <Link to="/harnesses"><h3>Harnesses</h3></Link>
                                  <p>Price:{harnesses.harness1.price}</p>
                                  <p>Description: {harnesses.harness1.description}</p>
                                  <p>
                                       <Link to="/Harnesses" className="btn btn-primary">Buy Now!</Link>
                                  </p>
                             </div>
                        </div>
                   </div>
                   <div className="col-md-4 col-sm-6">
                        <div className="thumbnail">
                             <img src="http://via.placeholder.com/350x150" alt="" />
                             <div className="caption">
                                  <Link to="/Leashes" classname="h3"><h3>Leashes</h3></Link>
                                  <p>Price:{leashes.leash1.price}</p>
                                  <p>Description:{leashes.leash1.description}</p>
                                  <p>
                                       <Link to="/Leashes" className="btn btn-primary">Buy Now!</Link>
                                  </p>
                             </div>
                        </div>
                   </div>

                   <div className="col-md-4 col-sm-6">
                        <div className="thumbnail">
                             <img src="http://via.placeholder.com/350x150" alt="" />
                             <div className="caption">
                                  <Link to="/Collars" classname="h3"><h3>Collars</h3></Link>
                                  <p>Price:{collars.collar1.price}</p>
                                  <p>Description:{collars.collar1.description}</p>
                                  <p>
                                       <Link to="/Collars" className="btn btn-primary">Buy Now!</Link>
                                  </p>
                             </div>
                        </div>
                   </div>
              </div>
         </div>
    );
  }
}

export default App;
