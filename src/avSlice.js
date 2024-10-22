import { createSlice } from "@reduxjs/toolkit";

export const avSlice = createSlice({
    name: "av",
    initialState: [
        {
            img: "Conference-Event-Planner_lab_project/src/assets/images/projectors.jpg",
            name: "Projectors",
            cost: 200,
            quantity: 0,
        },
        {
            img: "Conference-Event-Planner_lab_project/src/assets/images/speakers.jpg",
            name: "Speaker",
            cost: 35,
            quantity: 0,
        },
        {
            img: "Conference-Event-Planner_lab_project/src/assets/images/microphones.jpg",
            name: "Microphones",
            cost: 45,
            quantity: 0,
        },
        {
            img: "Conference-Event-Planner_lab_project/src/assets/images/whiteboards.jpg",
            name: "Whiteboards",
            cost: 80,
            quantity: 0,
        },

        {
            img: "Conference-Event-Planner_lab_project/src/assets/images/signage.jpg",
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
