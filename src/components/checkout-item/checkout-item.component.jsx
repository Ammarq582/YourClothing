import { useDispatch, useSelector } from 'react-redux';
import { addItemsToCart, deleteItemsFromCart, removeItemsFromCart } from '../../store/cart/cart.actions';
import { selectCartItems } from '../../store/cart/cart.selectors';
import './checkout-item.styles.scss'

const CheckoutItem = ({item}) => {
    const dispatch = useDispatch()
    const cartItems = useSelector(selectCartItems);
    const {imageUrl, price, quantity, name} = item;
    const subTotalPrice = price * quantity;

    const removeItemsFromCartHandler = () => {
        dispatch(removeItemsFromCart(cartItems, item))
    }

    const addItemstoCartHandler = () => {
        dispatch(addItemsToCart(cartItems, item))
    }

    const deleteItemsFromCartHandler = () => {
        dispatch(deleteItemsFromCart(cartItems, item))
    }

    return(
        <div className="checkout-item-container">
            <img src={imageUrl} alt={name} />
            <span className="name">{name}</span>
            <div className="quantity">
                <span className="arrow" onClick={removeItemsFromCartHandler}>❮</span>
                {quantity}
                <span className="arrow" onClick={addItemstoCartHandler}>❯</span>
            </div>
            <span className="price">${subTotalPrice}</span>
            <div className="remove">
                <span onClick={deleteItemsFromCartHandler}>✕</span>
            </div>
        </div>
    )
}

export default CheckoutItem;