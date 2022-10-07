import React from 'react'
import classes from './ItemForm.module.css'
import Input from '../../UI/Input'

const ItemForm = (props) => {
  return (
    <form className={classes.form}>
      <Input label="Amount" input={{
        id: 'amount',
        type: 'number',
        min: '1',
        max: '10',
        step: '1',
        defaultValue: '1'
      }} />
      <button>+ Add</button>
    </form>
  )
}

export default ItemForm