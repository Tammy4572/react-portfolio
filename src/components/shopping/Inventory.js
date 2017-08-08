import React, { Component } from 'react';

export default class Inventory extends Component {
     render(){
          return(
               <section>
                    <div>
                         <form >
                         <table>
                              <thead>
                                   <th scope="col">Item</th>
                                   <th scope="col">Description</th>
                                   <th scope="col">Price</th>
                                   <th scope="col">Qty</th>
                              </thead>
                              <tbody>
                                   <tr>
                                        <td>Side Release Collar</td>
                                        <td>Description</td>
                                        <td>7.00</td>
                                        <td><input type="hidden" value="1" name="sr-collar" className="btn btn-primary"/></td>
                                   </tr>
                                   <tr>
                                        <td>Martingale Collar</td>
                                        <td>Description</td>
                                        <td>12.00</td>
                                        <td><input type="hidden" value="1" name="mart-collar" className="btn btn-primary"/></td>
                                   </tr>
                                   <tr>
                                        <td>Side Realease Martingale Collar</td>
                                        <td>Description</td>
                                        <td>24.00</td>
                                        <td><input type="hidden" value="1" name="sr-mart-collar" className="btn btn-primary"/></td>
                                   </tr>
                                   <tr>
                                        <td>Fancy Martingale Collar</td>
                                        <td>Description</td>
                                        <td>20.00</td>
                                        <td><input type="hidden" value="1" name="f-mart-collar" className="btn btn-primary"/></td>
                                   </tr>
                              </tbody>
                         </table>
                         </form>
                    </div>
               </section>
          )
     }
}
