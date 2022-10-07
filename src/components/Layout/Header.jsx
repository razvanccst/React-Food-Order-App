import React from 'react'
import bannerImage from '../../assets/meals.jpg'
import classes from './Header.module.css'
import CartButton from './CartButton'

const Header = (props) => {
  return (
    <>
      <header className={classes.header}>
        <h1>Logo</h1>
        <CartButton />
      </header>
      <div className={classes['main-image']}>
        <img src={bannerImage} alt="Banner Image" />
      </div>
    </>
  )
}

export default Header