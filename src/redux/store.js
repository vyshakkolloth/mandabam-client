import { configureStore } from "@reduxjs/toolkit";
import user from "./user";
import admin from "./admin";
import vendor from "./vendor";
import alert from "./alert";

export const store = configureStore({
  reducer: {
    user,admin,vendor,alert
  },
})


