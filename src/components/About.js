import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class About extends Component {
     render() {
          return (
               <div>
                    <div className="page-header">
                      <h1>About Us </h1>
                      <small>Visit, Call or Click!</small>
                    </div>
                    <div className="container">
                         <div>
                         <p>My team and I have worked long and hard to perfect the art of collar making. We only use premium hardware, first quality fabrics, and all of our collars are available lined with a super soft cuddle satin lining. We spend a great deal of time searching and establishing relationships with fabric and ribbon dealers all over the world. From Hand loomed Laotian Silk to French Jacquard Ribbon to Asian Silk Brocades, and even Scalamandre Silks, I choose each fabric or ribbon myself to create a stunning selection of dog collars!</p>
                         </div>
                         <div className="row text-center">
                              <img src="http://via.placeholder.com/350x150" alt="about img"/>
                              <h3>Click below to see our newest designs and begin shopping!</h3>
                              <Link to="shopping" className="btn btn-primary">Visit Our Shopping Pages!</Link>
                         </div>
                    </div>
               </div>
          )
     }
}
