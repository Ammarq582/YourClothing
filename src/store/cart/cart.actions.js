import { createAction } from "../../utils/createAction";
import { CART_ACTION_TYPES } from "./cart.types";

const setCartItems = (cartItems) => createAction(CART_ACTION_TYPES.SET_CART_ITEMS, cartItems);
export const setIsCartOpen = (boolean) => createAction(CART_ACTION_TYPES.SET_IS_CART_OPEN, boolean);






const addCartItem = (cartItems, itemToAdd) => {
    const findItem = cartItems.find(item => item.id === itemToAdd.id)

    if(findItem) {
        const newItem = {...findItem, quantity: findItem.quantity + 1};
        return cartItems.map(item => item.id === newItem.id ? newItem : item)
    }

    return [...cartItems, {...itemToAdd, quantity: 1}]
}

const removeCartItem = (cartItems, itemToRemove) => {
    const findItem = cartItems.find(item => item.id === itemToRemove.id);

    if(findItem) {
        if(findItem.quantity === 1) {
            return deleteCartItem(cartItems, findItem);
        }
        else {
            const newItem = {...findItem, quantity: findItem.quantity - 1}
            return cartItems.map(item => item.id === newItem.id ? newItem : item)
        }   
    }
}

const deleteCartItem = (cartItems, itemToDelete) => {
    return cartItems.filter(item => item.id !== itemToDelete.id)
}






export const addItemsToCart = (cartItems, itemToAdd) => {
    const newCartItems = addCartItem(cartItems, itemToAdd);
    return setCartItems(newCartItems);
}
export const removeItemsFromCart = (cartItems, itemToRemove) => {
    const newCartItems = removeCartItem(cartItems, itemToRemove);
    return setCartItems(newCartItems);
}
export const deleteItemsFromCart = (cartItems, itemToDelete) => {
    const newCartItems = deleteCartItem(cartItems, itemToDelete);
    return setCartItems(newCartItems);
}