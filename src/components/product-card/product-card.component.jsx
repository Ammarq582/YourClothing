import './product.styles.scss'
import Button, { BUTTON_TYPE_CLASSES } from '../button/button.component'
import { addItemsToCart } from '../../store/cart/cart.actions';
import { useDispatch, useSelector } from 'react-redux';
import { selectCartItems } from '../../store/cart/cart.selectors';


const ProductCard = ({product}) => {
    const {price, name, imageUrl} = product;
    const cartItems = useSelector(selectCartItems);
    const dispatch = useDispatch();

    const addItemstoCartHandler = () => {
        dispatch(addItemsToCart(cartItems, product));
    }

    return(
        <div className="product-card-container">
            <div className="image-container">
                <img src={imageUrl} alt={name} />
            </div>
            <div className="details">
                <span className="name">{name}</span>
                <span className="price">${price}</span>
            </div>
            <Button type='button' buttonType={BUTTON_TYPE_CLASSES.inverted} onClick={addItemstoCartHandler}>
                Add to cart
            </Button>
        </div>
    )
}

export default ProductCard;