import {createSlice} from '@reduxjs/toolkit';

interface TypeLoadMessage {
  message: string
}

const initialState:TypeLoadMessage = {
  message : "Please Wait!"
} 

const loadingSlice = createSlice({
  name: 'loadingSlice',
  initialState,
  reducers: {
    setMessage: (state, action ) =>{
      state.message = action.payload
    }
  }
})

export const {setMessage} = loadingSlice.actions;
export default loadingSlice.reducer;