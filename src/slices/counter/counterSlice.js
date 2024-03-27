import { createSlice } from '@reduxjs/toolkit'

export const counterSlice = createSlice({
  name: 'counter',
  initialState: {
    value: 0,
  },
  reducers: {
   increment:(state, action)=>{
    state.value += action.payload;
   },
   decrement: (state, action)=>{
    if(state.value < 1){
      state.value = 0
    }else{
      state.value -= action.payload;
    }
   },
   multiplication: (state, action)=>{
    state.value *= action.payload;
   },
   division: (state, action)=>{
    state.value /= action.payload;
   }
  },
})

export const { increment, decrement, multiplication, division} = counterSlice.actions

export default counterSlice.reducer