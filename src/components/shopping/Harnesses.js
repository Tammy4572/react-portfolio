import React, { Component } from 'react';


export default class Harnesses extends Component {
     render() {
          return (
               <div>
                    <div>
                         <h1>No Pull Harness</h1>
                         <p className="primary-text">We now offer two harness styles. The Sturdy Harness is perfect for the escape artist—it envelops the body and keeps your dog safe. The Sleek Harness is meant to control pulling by attaching the leash to the o-ring placed at the center of the chest. It can also be worn with the o-ring placed between the shoulder blades. The Sleek Harness has its function, but it is also more streamlined for those who don't like the appearance of traditional harness.</p>
                    </div>
                    <div>
                         <form >
                              <div className="form-group">
                                   <label >Quantity</label>
                                   <input className="form-control" type="number" placeholder="quantity"/>
                                   <label forHtml="harnessType">Harness Type</label>
                              </div>
                              <div className="form-group">
                                   <select>
                                        <option value="sturdy">Sturdy Style</option>
                                        <option value="sleek">Sleek Style</option>
                                   </select>
                              </div>
                              <div className="form-group">
                                   <label forHtml="color">Color</label>
                                   <select>
                                        <option value="red">Red</option>
                                        <option value="blue">Blue</option>
                                        <option value="green">Green</option>
                                        <option value="purple">Purple</option>
                                   </select>
                              </div>
                              <div className="form-group">
                                   <label forHtml="width">Width</label>
                                   <select>
                                        <option value="0.625">5/8"</option>
                                        <option value="0.75">3/4"</option>
                                        <option value="1.0">1.0"</option>
                                        <option value="1.5">1.5"</option>
                                   </select>
                              </div>
                              <div className="form-group">
                                   <label forHtml="Hardware">Hardware</label>
                                   <select>
                                        <option value="silver">Silver</option>
                                        <option value="brass">Brass</option>
                                   </select>
                              </div>
                              <div className="form-group">
                                   <label forHtml="girth">Girth</label>
                                   <input className="form-control" type="text" placeholder="measure behind front legs"/>
                              </div>
                              <button type="submit" className="btn btn-primary">Add to Cart</button>
                         </form>
                    </div>
               </div>
          )
     }
}
