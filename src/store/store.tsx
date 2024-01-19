import { configureStore } from '@reduxjs/toolkit'
import { setupListeners } from '@reduxjs/toolkit/query'
import { API } from './apiSlice';
import signUpReducer from './signUpSlice';
import signInReducer from './signInSlice';
import loadingSlice from './loadingSlice';

export const store = configureStore({
  reducer: {
    signUpState: signUpReducer,
    signInState: signInReducer, 
    loadingState: loadingSlice,
    [API.reducerPath ] : API.reducer, 
  },

  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(API.middleware)
  
})

setupListeners(store.dispatch)
