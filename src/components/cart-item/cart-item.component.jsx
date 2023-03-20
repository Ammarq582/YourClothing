import './cart-item.styles.scss'

const CartItem = ({item}) => {
    const {price, quantity, name, imageUrl} = item;
    return(
        <div className="cart-item-container">
            <img src={imageUrl} alt={name} />
            <div className="cart-item-details">
                <span className="name">{name}</span>
                <span className="price">{quantity} x ${price}</span>
            </div>
        </div>
    )
    
}

export default CartItem;