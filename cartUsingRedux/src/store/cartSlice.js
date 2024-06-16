import { createSlice } from "@reduxjs/toolkit";

const initialCartState = [];

const cartSlice = createSlice({
    name: "cart",
    initialState: initialCartState,
    reducers: {
        add: (state, action) => {
            //direct mutate karo state ko 
            state.push(action.payload);
        },
        remove: (state, action) => {
            // ya fir new state bnao or return karo 
            // override is not allow 
            //like -> state = state.filter(item => item.id !== action.payload); this is not allowe
            const newState = state.filter(item => item.id !== action.payload);
            return newState;
        }
    }
})

export const {add, remove} = cartSlice.actions;

export default cartSlice.reducer;