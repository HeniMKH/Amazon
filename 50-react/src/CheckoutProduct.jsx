import React from 'react'
import "./CheckoutProduct.css"

function CheckoutProduct() {
  return (

    <div className="CheckoutProduct">
      <img src="https://images-na.ssl-images-amazon.com/images/I/71mEsHyzSCL._SL1000_.jpg" alt="" className="CheckoutProduct_image" /> 

      <div className="product_info"></div>
      <p className="CheckoutProduct_title">Bennett Mystic 15.6 inch Laptop Shoulder Messenger Sling Office Bag, Water Repellent Fabric for Men and Women (Blue)
      <p className="CheckoutProductPrice">
      <small>$</small>
  <strong>$20</strong>
</p>
      <div className="CheckoutProduct_rating">
        ⭐⭐
      </div>
      <button>Remove From Basket</button>

      </p>


    </div>

  )
}

export default CheckoutProduct