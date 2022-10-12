import React from 'react'
import classes from './CartButton.module.css'
import { FaShoppingCart } from 'react-icons/fa'
import { useContext } from 'react'
import CartContext from '../../store/CartContext'

const CartButton = (props) => {
  const cartCtx = useContext(CartContext);

  const numberOfCartItems = cartCtx.items.reduce((curNumber, item) => {
    return curNumber + item.amount;
  }, 0)

  return (
    <button onClick={props.onClick} className={classes.button}>
      <span className={classes.icon}><FaShoppingCart /></span>
      <span>Your Cart</span>
      <span className={classes.badge}>{numberOfCartItems}</span>
    </button>
  )
}

export default CartButton