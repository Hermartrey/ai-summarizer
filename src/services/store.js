import { configureStore } from '@reduxjs/toolkit'
import { articleApi } from './article.js';

//WE CAN THINK GLOBAL STATE OR STORE AS A WHOLE CAKE
export const store = configureStore({
    // REDUCER ALLOW US TO GET SPECIFIC SLICE FROM THE GLOBAL STATE OR STORE
    // WE CAN REDDUCE THE ENTIRE STATE AND ONLY GRAB WHAT WE NEED
    reducer: {
        [articleApi.reducerPath]:articleApi.reducer,
    },
    // THIS ALLOW US TO DO SOMETHING WITH STATE BEFORE WE GET IT
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(articleApi.middleware) 
});
