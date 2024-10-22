import { createSlice } from "@reduxjs/toolkit";

export const avSlice = createSlice({
    name: "av",
    initialState: [
        {
            img: "https://cdn.pixabay.com/photo/2021/11/01/13/19/projector-6760348_1280.jpg",
            name: "Projectors",
            cost: 200,
            quantity: 0,
        },
        {
            img: "https://cdn.pixabay.com/photo/2018/10/14/22/07/speakers-3747617_1280.jpg",
            name: "Speaker",
            cost: 35,
            quantity: 0,
        },
        {
            img: "https://cdn.pixabay.com/photo/2019/07/10/07/03/microphone-4328055_1280.jpg",
            name: "Microphones",
            cost: 45,
            quantity: 0,
        },
        {
            img: "https://cdn.pixabay.com/photo/2015/01/08/18/23/white-board-593309_1280.jpg",
            name: "Whiteboards",
            cost: 80,
            quantity: 0,
        },

        {
            img: "https://cdn.pixabay.com/photo/2023/10/19/08/39/canvas-8325881_1280.jpg",
            name: "Signage",
            cost: 80,
            quantity: 0,
        },

    ],

    reducers: {
        incrementAvQuantity: (state, action) => {
            const item = state[action.payload];
            if (item) {
                item.quantity++;
            }
        },
        decrementAvQuantity: (state, action) => {
            const item = state[action.payload];
            if (item && item.quantity > 0) {
                item.quantity--;
            }
        },
    },
});

export const { incrementAvQuantity, decrementAvQuantity } = avSlice.actions;

export default avSlice.reducer;
