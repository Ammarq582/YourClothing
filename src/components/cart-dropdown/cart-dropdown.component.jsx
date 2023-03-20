import './cart-dropdown.styles.scss'
import Button from '../button/button.component'
import CartItem from '../cart-item/cart-item.component'
import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { selectCartItems } from '../../store/cart/cart.selectors'

const CartDropdown = () => {
    const cartItems = useSelector(selectCartItems)
    const navigate = useNavigate()

    const navigateToCheckout = () => {
        navigate('/checkout')
    }
    

    return(
        <div className="cart-dropdown-container">
            <div className="items-container">
                {
                    cartItems
                    ?
                    cartItems.map(item => <CartItem item={item}/>)
                    :
                    <div className="empty-message">
                        Cart is Empty
                    </div>
                }
            </div>
            <Button type='button' onClick={navigateToCheckout}>Go to Checkout</Button>
        </div>
    )
}

export default CartDropdown;