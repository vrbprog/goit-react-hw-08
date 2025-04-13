import { configureStore } from "@reduxjs/toolkit";
// import tasksReducer from './tasks/slice';
import authReducer from "./auth/slice";
import storage from "redux-persist/lib/storage";

import {
    persistStore,
    persistReducer,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
} from "redux-persist";

const persistedAuthReducer = persistReducer(
    {
        key: "user-token",
        storage,
        whitelist: ["token"],
    },
    authReducer
);

export const store = configureStore({
    reducer: {
        // tasks: tasksReducer,
        auth: persistedAuthReducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: [
                    FLUSH,
                    REHYDRATE,
                    PAUSE,
                    PERSIST,
                    PURGE,
                    REGISTER,
                ],
            },
        }),
});

export const persistor = persistStore(store);
