import { CartActionTypes } from "./action-types";

export function addProductToCart(payload){
    return{
        type: CartActionTypes.ADD_PRODUCT, 
        payload
    }
}

export function removeProductFromCart(payload){
    return {
        type: CartActionTypes.REMOVE_PRODUCT,
        payload
    }
}

export function increaseProductQuantity(payload){
    return {
        type: CartActionTypes.INCREASE_PRODUCT_QUANTITY,
        payload
    }
}



export function decreaseProductQuantity(payload){
    return {
        type: CartActionTypes.DECREASE_PRODUCT_QUANTITY,
        payload
    }
}