import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    products: []
}

const cartSlice = createSlice({
    name: 'cart', // nome do reducer que criamos
    initialState,
    reducers: { // aqui a gente vai colocar as nossas actions (o que a gente chama pelo dispatch)
         addProduct: (state, action) => {
            const productIsAlreadyInCart = state.products.some((product) =>
            product.id === action.payload.id
            )

            if(productIsAlreadyInCart) {
                
                    state.products = state.products.map((product) =>
                     product.id === action.payload.id
                      ? { ...product, quantity: product.quantity + 1 }
                      : product
                     )

                return
            }

 
                state.products = [...state.products, {...action.payload, quantity:1}]
            
         },

         removeProduct: (state, action) => {
            state.products = state.products.filter((product) => product.id !== action.payload)

         },

         increaseProductQuantity: (state, action) => {
             
                    state.products = state.products.map((product) => 
                        product.id === action.payload
                        ? { ...product, quantity: product.quantity + 1 }
                        : product
                    )
         },

         decreaseProductQuantity: (state, action) => {
            state.products = state.products.map((product) => 
                        product.id === action.payload
                        ? { ...product, quantity: product.quantity - 1 }
                        : product
                    ).filter(product => product.quantity > 0)
         },

    }
})

export const { addProduct, decreaseProductQuantity, increaseProductQuantity, removeProduct } = cartSlice.actions

export default cartSlice.reducer