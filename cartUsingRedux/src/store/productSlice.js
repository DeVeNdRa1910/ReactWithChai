import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const STATUSES = Object.freeze({
    IDLE: 'idle',
    ERROR: 'error',
    LOADING: 'loading',
})
//Object.freeze ka use karke Object ki prop kko koibhi change nahi kaar sakta

const initialState = {
    data: [],
    status: STATUSES.IDLE,
};


//MEthod 1 to write async code in Slice

const productSlice = createSlice({
    name: "product",
    initialState: initialState,
    reducers: {
        setProducts : (state, action) => {
            state.data = action.payload;
        },
        setStatus : (state, action) => {
            state.status = action.payload;
        },
    }
}) 



/* ////MEthod 2 to write async code in Slice
const productSlice = createSlice({
    name: "product",
    initialState: initialState,
    reducers: {
        // setProducts : (state, action) => {
        //     state.data = action.payload;
        // },
        // setStatus : (state, action) => {
        //     state.status = action.payload;
        // }
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchProduct.pending , (state, action) => {
                state.status = STATUSES.LOADING;
            })
            .addCase(fetchProduct.fulfilled, (state, action) => {
                state.data =  action.payload;
                state.status = STATUSES.IDEL;
            })
            .addCase(fetchProduct.rejected, (state, action) => {
                state.status = STATUSES.ERROR;
            })
    }
})  

//MEthod 2 to write async code in Slice
// products/fetch ye apne maan se kuchh bhio likh sakte hai
export const fetchProduct = createAsyncThunk('products/fetch', async () => {
    const resp = await fetch('https://fakestoreapi.com/products');
    const data = await resp.json();
    return data;
}) 

export const {setProducts, setStatus} = productSlice.actions;
export default productSlice.reducer;


*/

export const {setProducts, setStatus} = productSlice.actions;
export default productSlice.reducer;

/* 
we cant put asyync call in reducers bcs reducers call synchrounusly 
like -> const resp = await fetch('https://fakestoreapi.com/products'); dont do in reducer


But we have to fectch data in reducer for that we should use Thunks Middleware
Thuks is nothing but normal function

*/

//MEthod 1 to write async code in Slice
export function fetchProduct() {
    return async function fetchProductThunk(dispatch, getState) {
        //getState willl provide access of current state
        //like if we want data array
        const dataArray = getState().data;
        dispatch(setStatus(STATUSES.LOADING))
        try {
            const resp = await fetch('https://fakestoreapi.com/products');
            const data = await resp.json();
            dispatch(setProducts(data))
            dispatch(setStatus(STATUSES.IDLE))
        } catch (error) {
            console.log(error);
            dispatch(setStatus(STATUSES.ERROR))
        }
    }
} 




