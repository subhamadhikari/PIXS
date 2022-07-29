import React from 'react'
import { useContext } from 'react'
import CartContext from '../CartContext'

const Card = () => {
    const prod = {name:"tshirt",price:"12"}
    const {addToCart} = useContext(CartContext)
    const {items} = useContext(CartContext)
  return (
    <>
    <div>Card</div>   
    <button onClick={() => {addToCart(prod.name,prod.price)}}>Add</button>
    {console.log(items)}
    {console.log(items.length)}
    </>
  )
}

export default Card