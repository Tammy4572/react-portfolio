import React, { Component } from 'react';
import Inventory from './Inventory';

export default class Leashes extends Component {
     render() {
          return (
               <div>
                    <div className="container-fluid">
                         <h1>Checkout Our Current Selection of Leashes</h1>
                         <div>
                              <Inventory />
                              <div class="product-description" data-name="Wine #1" data-price="5">
                                   <h3 class="product-name">Wine #1</h3>
                                   <p class="product-price">&euro; 5</p>
                                   <form class="add-to-cart" action="cart.html" method="post">
                                        <div>
                                             <label for="qty-1">Quantity</label>
                                             <input type="text" name="qty-1" id="qty-1" class="qty" value="1" />
                                        </div>
                                        <p><input type="submit" value="Add to cart" class="btn" /></p>
                                   </form>
                              </div>
                              <form id="shopping-cart" action="cart.html" method="post">
                                   <table class="shopping-cart">
                                        <thead>
                                             <tr>
                                                  <th scope="col">Item</th>
                                                  <th scope="col">Qty</th>
                                                  <th scope="col">Price</th>
                                             </tr>
                                        </thead>
                                        <tbody></tbody>
                                   </table>
                                   <p id="sub-total">
                                        <strong>Sub Total</strong>: <span id="stotal"></span>
                                   </p>
                                   <ul id="shopping-cart-actions">
                                        <li>
                                             <input type="submit" name="update" id="update-cart" class="btn" value="Update Cart" />
                                        </li>
                                        <li>
                                             <input type="submit" name="delete" id="empty-cart" class="btn" value="Empty Cart" />
                                        </li>
                                        <li>
                                             <a href="index.html" class="btn">Continue Shopping</a>
                                        </li>
                                        <li>
                                             <a href="checkout.html" class="btn">Go To Checkout</a>
                                        </li>
                                   </ul>
                              </form>
                         </div>
                    </div>
               </div>
          )
     }
}
