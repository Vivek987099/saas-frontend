import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../feature/auth/authSlice";
import { authApi } from "../feature/auth/authApi";
import { projectApi } from "../feature/project/projectApi";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    [authApi.reducerPath]: authApi.reducer,
    [projectApi.reducerPath]: projectApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(authApi.middleware,projectApi.middleware),
});
