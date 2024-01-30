import classes from './headerCartButton.module.css'
import CartIcon from '../Cart/CartIcon';

const HeaderCartButton = props=>{
    return (
      <button  className={classes.button}>
        <span className={classes.icon}>
            <CartIcon />
        </span>
        <span>Your cart</span>
        <span className={classes.badge}>
            4
        </span>
      </button>
    );

}
export default HeaderCartButton;