import React from 'react'
import classes from './CartButton.module.css'
import { FaShoppingCart } from 'react-icons/fa'

const CartButton = () => {
  return (
    <button className={classes.button}>
      <span className={classes.icon}><FaShoppingCart /></span>
      <span>Your Cart</span>
      <span className={classes.badge}>5</span>
    </button>
  )
}

export default CartButton