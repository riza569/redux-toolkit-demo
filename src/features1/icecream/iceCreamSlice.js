// import { ordered as cakeOrdered } from "../cake/cakeSlice";
// import { createSlice } from "@reduxjs/toolkit";

// const initialState = {
//   numofIcecreams: 20,
// };

// const icecreamSlice = createSlice({
//   name: "icecream",
//   initialState,
//   reducers: {
//     ordered: (state) => {
//       state.numofIcecreams--;
//     },
//     restocked: (state, action) => {
//       state.numofIcecreams += action.payload;
//     },
//   },
//   extraReducers: (builder) => {
//     builder.addCase(cakeOrdered, (state) => {
//       state.numofIcecreams--;
//     });
//   },
// });

// export default icecreamSlice.reducer;
// export const { ordered, restocked } = icecreamSlice.actions;

import { createSlice } from "@reduxjs/toolkit";
import { ordered as cakeOrdered } from "../cake/cakeSlice";
const initialState = {
  numofIcecream: 20,
};

const icecreamSlice = createSlice({
  name: "icecream",
  initialState,
  reducers: {
    ordered: (state, action) => {
      state.numofIcecream -= action.payload;
    },
    restocked: (state, action) => {
      state.numofIcecream += action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(cakeOrdered, (state) => {
      state.numofIcecream--;
    });
  },
});

export const { ordered, restocked } = icecreamSlice.actions;
export default icecreamSlice.reducer;
