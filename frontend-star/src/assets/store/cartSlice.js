import { createSlice } from "@reduxjs/toolkit";



const cartSlice = createSlice({
name : 'cart',
initialState : localStorage.getItem("state",)?JSON.parse(localStorage.getItem("state",)):{
    itemsList:[],
    totalQuantity:0
},
reducers : {
    addToCart(state,action){
        const newItem = action.payload;
        const existingItem = state.itemsList.find((item)=> item.id === newItem.id && item.size === newItem.size);
        if(existingItem){
            existingItem.quantity++;
            state.totalQuantity++;
            localStorage.setItem("state",JSON.stringify(state))
        }else {
        state.itemsList.push({
            id   :newItem.id,
            img  :newItem.img,
            quantity:1,
            title:newItem.title,
            size:newItem.size,
        })
        state.totalQuantity++;
        localStorage.setItem("state",JSON.stringify(state))
    }


   
},

    removeFromCart(state,action){
        const Itm = action.payload;
        const existingItem = state.itemsList.find((item)=> item.id === Itm.id && item.size === Itm.size);
        if(existingItem.quantity === 1){
            state.itemsList=state.itemsList.filter((item)=> item.id !== Itm.id ) ;
            state.totalQuantity--;
        } else {
            existingItem.quantity--;
            state.totalQuantity--;
        }
        localStorage.setItem("state",JSON.stringify(state))
    },
}

});

export const cartActions = cartSlice.actions;
export default cartSlice;