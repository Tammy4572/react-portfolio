import React, { Component } from 'react';
import '../styles/App.css';

export default class Contact extends Component {
     render(){
          return (
               <div className="page-header">
                    <div className="">
                         <div className="col-lg-12">
                              <h3>We want to hear from you!</h3>

                              <form className="contact-form" method="post" action="/mailto:example@example.com">
                              <div className="form-group">
                                   <label htmlFor="exampleInputEmail">Name</label>
                                   <input type="text" className="form-control" id="exampleInputEmail" placeholder="Enter Your Name: "/>
                              </div>
                              <div className="form-group">
                                   <label htmlFor="">Email Address</label>
                                   <input type="text" className="form-control" id="" placeholder="Enter your Email:"/>
                              </div>
                              <div className="form-group">
                                   <label htmlFor="">Message</label>
                                   <textarea className="form-control" id="message" rows="3"></textarea>
                              </div>
                              <button  type="submit" className="btn btn-primary">Submit</button>
                         </form>
                    </div>
               </div>
          </div>
          )
     }

}
