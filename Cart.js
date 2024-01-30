import Modal from './Modal'
import classes from './Cart.module.css'

const Cart = (props)=>{
    const CartItems = [{id:'c1',name:'pizza',amount:2,price: 40}].map((item)=> {
        <li>{item.name}</li>
    })
return (                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 
  <Modal>
    <div>
      <span>Total Amount</span>
      <span>35</span>
    </div>
    <div className={classes.actions}>
      <button className={classes['button--alt']}>Close</button>
      <button className={classes.button}>Order</button>
    </div>
  </Modal>
);
}
export default Cart;