import './cart-icon.styles.scss'

import {ReactComponent as ShoppingIcon} from '../../assets/shopping-bag.svg'
import { useDispatch, useSelector } from 'react-redux'
import { setIsCartOpen } from '../../store/cart/cart.actions'
import { selectCartCount, selectIsCartOpen } from '../../store/cart/cart.selectors'



const CartIcon = () => {
    const dispatch = useDispatch();
    const isCartOpen = useSelector(selectIsCartOpen);
    const cartCount = useSelector(selectCartCount);

    const displayCartDropDownHandler = () => {
        dispatch(setIsCartOpen(!isCartOpen))
    }

    return(
        <div className="cart-icon-container" onClick={displayCartDropDownHandler}>
            <ShoppingIcon/>
            <span className="cart-count">{cartCount}</span>
        </div>
    )
}

export default CartIcon;