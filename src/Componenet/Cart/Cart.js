import React, { useContext } from 'react'

import Modal from '../UI/Modal';
import classes from './Cart.module.css'
import CartItem from './CartItem';
import Context from '../../Store/auth-context';



const Cart = (props) => {

  const crtCntx = useContext(Context);
  console.log('context value', crtCntx)
//   const totalAmount = `$${crtCntx.totalAmount.toFixed(2)}`;
let totalamount=0;

crtCntx.cartItems.forEach((item)=>{
            totalamount = totalamount+ item.quantity*item.price;
          
        })
  const hasItem = crtCntx.cartItems.length > 0;

  const cartItemRemovehandler=(id)=>{
    
    crtCntx.removeItem(id);
  }

  const cartItemAddhandler =(item)=>{
    // crtCntx.addtocart({...item,quantity:1})
    crtCntx.addtocart(item,1)
    
  } 

  const cartItem =
    (<ul className={classes['cart-items']}>
      {crtCntx.cartItems.map((item) => (<CartItem id={item.id} name={item.candyname} price={item.price} description={item.discription} amount={item.quantity} onRemove={cartItemRemovehandler.bind(null,item.id)} onAdd={cartItemAddhandler.bind(null,item)}/>))}
    </ul>)

  { console.log('cart', crtCntx.items) }
  return (
    <Modal onClose={props.close}>
      {cartItem}
      <div className={classes.total}>
        <span>Total amount</span>
        <span>{totalamount}</span>
      </div>
      <div className={classes.actions}>
        <button className={classes['button--alt']} onClick={props.close}>Cancel</button>
        {hasItem && <button className={classes.button} >Order</button>}
      </div>
    </Modal>
  )
}
export default Cart;