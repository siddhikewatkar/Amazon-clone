import React from 'react'
import './CheckoutProduct.css'
import { useStateValue } from './StateProvider'

function CheckoutProduct({image, title, price, rating}) {

  // eslint-disable-next-line no-unused-vars
    const [{cart}, dispatch] = useStateValue();

    const removeFromCart = () => {
        //remove the item from cart
        dispatch({
            type: 'REMOVE_FROM_CART',
            title: title,
        })
    }
  return (
    <div className="checkoutProduct">
       <img className="checkoutProduct__image" src={image} alt='sidhdi'/>

       <div className="checkoutProduct__info">
          <p className="checkoutProduct__title">
            {title}
          </p>
          <p className="checkoutProduct__price">
            <small>₹</small>
            <strong>{price}</strong>
            <div className="checkoutProduct__rating">
                {Array(rating)
                .fill()
                .map(() => (
                    <p>⭐</p>
                ))}
            </div>
            <button onClick={removeFromCart}>
                Remove from Cart
            </button>
          </p>
       </div>
    </div>
  )
}

export default CheckoutProduct
