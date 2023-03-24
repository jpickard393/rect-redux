import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        cartProductIds:[]
    }, // remeber reducers are functions that do something to thestore
    reducers: {
        addToCart:(state,action) => {
            state.cartProductIds=[action.payload, ...state.cartProductIds]
        },
        removeFromCart:(state,action) => {
            const indexOfId = state.cartProductIds.indexOfId(action.payload)
            state.cartProductIds.splice(indexOfId, 1)
        },
        clearAllItems: (state) => {
            state.cartProductIds=[]
        }
    }
})

// This would destructure the cartSlice into cartActions and cartReducer, aowing us to export two functions
//const {actions: cartActions, reducer: cartReducer} = cartSlice;
export default cartSlice;