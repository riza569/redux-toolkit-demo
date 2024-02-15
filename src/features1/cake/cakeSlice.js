import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  numofCakes: 10,
};
const cakeSlice = createSlice({
  name: "cake",
  initialState,
  reducers: {
    ordered: (state, action) => {
      state.numofCakes -= action.payload;
    },
    restocked: (state, action) => {
      state.numofCakes += action.payload;
    },
  },
});
export default cakeSlice.reducer;
export const { ordered, restocked } = cakeSlice.actions;

// import { createSlice } from "@reduxjs/toolkit";

// const initialState = {
//   numofcakes: 10,
// };

// const cakeSlice = createSlice({
//   name: "cake",
//   initialState,
//   reducers: {
//     ordered: (state, action) => {
//       state.numofcakes -= action.payload;
//     },
//     restocked: (state, action) => {
//       state.numofcakes += action.payload;
//     },
//   },
// });

// export default cakeSlice.reducer;
// export const { ordered, restocked } = cakeSlice.actions;
