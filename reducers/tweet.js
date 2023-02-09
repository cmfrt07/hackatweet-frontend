import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	value: [],
};

export const tweetSlice = createSlice({
  name: 'tweets',
  initialState,
  reducers: {
    addTweet: (state, action) => {
      state.value.push(action.payload);
    },
    removeTweet: (state, action) => {
      state.value = state.value.filter(tweet => tweet.content !== action.payload.content);
    },
  }
})

export const { addTweet, removeTweet } = tweetSlice.actions;
export default tweetSlice.reducer;