import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import Harnesses from './shopping/Harnesses';
import Leashes from './shopping/Leashes';
import Collars from './shopping/Collars';

import {harnesses, collars, leashes } from '../js/data';

export default class Shopping extends Component {
     constructor(props) {
          super(props)
     }
     render(){
          return (
               <div>
                    <h1>I am the shopping Page</h1>
                    <section className="bg-primary">
                       <div className="container-body">
                           <div className="row text-center">
                               <div className="col-lg-10 col-lg-offset-1">
                                   <h2>Featured Items</h2>
                                   <hr className="small"/>
                                   <div className="row">
                                       <div className="col-md-4 col-sm-6">
                                           <div className="">
                                               <img src="http://via.placeholder.com/300x150" alt="" />
                                               <h4>
                                                   <Link to="/shopping/Collars"><strong>Collars</strong></Link>
                                               </h4>
                                               <p>{collars.collar1.description}</p>
                                               <a href="/shopping/Collars" className="btn btn-light">Learn More</a>
                                           </div>
                                       </div>
                                       <div className="col-md-4 col-sm-6">
                                           <div className="service-item">
                                               <img src="http://via.placeholder.com/300x150" alt="" />
                                               <h4>
                                                   <Link to="/shopping/Leashes"><strong>Leashes</strong></Link>
                                               </h4>
                                               <p>{leashes.leash1.description}</p>
                                               <a href="/shopping/Leashes" className="btn btn-light">Learn More</a>
                                           </div>
                                       </div>
                                       <div className="col-md-4 col-sm-6">
                                           <div className="service-item">
                                               <img src="http://via.placeholder.com/300x150" alt="" />
                                               <h4>
                                                   <Link to="/shopping/Harnesses"><strong>Harnesses</strong></Link>
                                               </h4>
                                               <p>{harnesses.harness1.description}</p>
                                               <a href="/shopping/Harnesses" className="btn btn-light">Learn More</a>
                                           </div>
                                       </div>
                                   </div>
                               </div>
                           </div>
                       </div>
                    </section>
                    <div className="products">
                         <div className="container-body">
                            <div className="product-img col-lg-3">
                                   <h2>Collars</h2>
                                   <div className="row">
                                        <div className="col-md-8 col-8">
                                           <img className="col-4" src="http://via.placeholder.com/300x150" alt="" />
                                           <h4><Link to="/collars"><strong>Collars</strong></Link></h4>
                                           <p className="col-8">{collars.collar1.description}</p>
                                           <a href="/collars" className="btn btn-light">Learn More</a>
                                        </div>
                                   </div>
                              </div>
                         </div>
                    </div>
                    <div className="products">
                         <div className="container-body">
                            <div className="product-img col-lg-3">
                                   <h2>Leashes</h2>
                                   <div className="row">
                                        <div className="col-md-8 col-sm-6">
                                           <img src="http://via.placeholder.com/300x150" alt="" />
                                           <h4><Link to="/leashes"><strong>Leashes</strong></Link></h4>
                                           <p>{leashes.leash1.description}</p>
                                           <a href="/leashes" className="btn btn-light">Learn More</a>
                                        </div>
                                   </div>
                              </div>
                         </div>
                    <div className="products">
                         <div className="container-body">
                            <div className="product-img col-lg-3">
                                   <h2>Harnesses</h2>
                                   <div className="row">
                                        <div className="col-md-8 col-sm-6">
                                           <img src="http://via.placeholder.com/300x150" alt="" />
                                           <h4><Link to="/harnesses"><strong>Harnesses</strong></Link></h4>
                                           <p>{harnesses.harness1.description}</p>
                                           <a href="/collars" className="btn btn-light">Learn More</a>
                                        </div>
                                   </div>
                              </div>
                         </div>
                    </div>
                    </div>
               </div>
          )
     }
}
