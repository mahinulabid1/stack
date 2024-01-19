import { configureStore } from '@reduxjs/toolkit'
import { setupListeners } from '@reduxjs/toolkit/query'
import { API } from './apiSlice';
import signUpReducer from './signUpSlice';
import signInReducer from './signInSlice';
import loadingSlice from './loadingSlice';

export const store = configureStore({
  reducer: {
    // have to add all modular reducer here
    signUpState: signUpReducer,
    signInState: signInReducer, // related to redux global state
    loadingState: loadingSlice,
    [API.reducerPath ] : API.reducer, // related to RTK query
  },

  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(API.middleware)
  
})

setupListeners(store.dispatch)

// export {store};

// Infer the `RootState` and `AppDispatch` types from the store itself
// export type RootState = ReturnType<typeof store.getState>
// // Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
// export type AppDispatch = typeof store.dispatch
