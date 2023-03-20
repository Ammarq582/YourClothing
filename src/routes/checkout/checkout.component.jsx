import { useSelector } from 'react-redux';
import CheckoutItem from '../../components/checkout-item/checkout-item.component';
import { selectCartItems, selectCartTotal } from '../../store/cart/cart.selectors';
import './checkout.styles.scss';

const Checkout = () => {
    const cartItems = useSelector(selectCartItems);
    const cartTotal = useSelector(selectCartTotal);

    return(
        <div className="checkout-container">
            <div className="header">
                <span>Product</span>
                <span>Description</span>
                <span>Quantity</span>
                <span>Price</span>
                <span>Remove</span>
            </div>
            {
                cartItems.map(item => <CheckoutItem item={item}/>)
            }

            <div className="total">Total: ${cartTotal}</div>
        </div>
        
    )
}

export default Checkout;