import { configureStore } from "@reduxjs/toolkit";
import cakeReducer from "../features1/cake/cakeSlice";
import icecreamReducer from "../features1/icecream/iceCreamSlice";
// const reduxlogger = require("redux-logger");
// const logger = reduxlogger.createLogger();
import userReducer from "../features1/user/userSlice";
const store = configureStore({
  reducer: {
    cake: cakeReducer,
    icecream: icecreamReducer,
    user: userReducer,
  },
  //   middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});

export default store;
