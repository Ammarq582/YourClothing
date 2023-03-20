import { useEffect } from "react";
import { useState } from "react";
import { createContext } from "react";


const addCartItem = (cartItems, itemToAdd) => {
    const findItem = cartItems.find(item => item.id === itemToAdd.id);

    if(findItem) {
        const newItem = {...findItem, quantity: findItem.quantity + 1};
        return cartItems.map(item => item.id === newItem.id ? newItem : item);
    }

    return [...cartItems, {...itemToAdd, quantity: 1}]
}

const removeCartItem = (cartItems, itemToRemove) => {
    const findItem = cartItems.find(item => item.id === itemToRemove.id);

    if(findItem) {
        if(findItem.quantity === 1) {
            return cartItems.filter(item => item.id !== findItem.id);    
        }
        else {
            const newItem = {...findItem, quantity: findItem.quantity - 1};
            return cartItems.map(item => item.id === newItem.id ? newItem : item);
        }
    }
}

const deleteCartItem = (cartItems, itemToDelete) => {
    return cartItems.filter(item => item.id !== itemToDelete.id);
}

export const CartContext = createContext({
    isCartOpen: false,
    cartCount: 0,
    cartTotal: 0,
    cartItems: [],
    setIsCartOpen: () => null,
    addItemstoCart: () => null,
    removeItemsFromCart: () => null,
    deleteItemsFromCart: () => null,
})

export const CartProvider = ({children}) => {
    const [isCartOpen, setIsCartOpen] = useState(false);
    const [cartCount, setCartCount] = useState(0);
    const [cartTotal, setCartTotal] = useState(0);
    const [cartItems, setCartItems] = useState([]);

    console.log('provider');

    useEffect(() => {
        const newCartCount = cartItems.reduce((total, current) => total + current.quantity, 0);
        setCartCount(newCartCount);

        const newCartTotal = cartItems.reduce((total, current) => total + current.price * current.quantity, 0);
        setCartTotal(newCartTotal);

    }, [cartItems])

    const addItemstoCart = (itemToAdd) => {
        const newCartItems = addCartItem(cartItems, itemToAdd);
        setCartItems(newCartItems);
    }

    const removeItemsFromCart = (itemToRemove) => {
        const newCartItems = removeCartItem(cartItems, itemToRemove);
        setCartItems(newCartItems);
    }

    const deleteItemsFromCart = (itemToDelete) => {
        const newCartItems = deleteCartItem(cartItems, itemToDelete);
        setCartItems(newCartItems);
    }


    const value = {
        isCartOpen,
        cartCount,
        cartTotal,
        cartItems,
        setIsCartOpen,
        addItemstoCart,
        removeItemsFromCart,
        deleteItemsFromCart,
    };

    return(
        <CartContext.Provider value={value}>{children}</CartContext.Provider>
    )
}