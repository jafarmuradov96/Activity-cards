import { configureStore } from '@reduxjs/toolkit'
import cardsReducer from './CardSlice.js'

const store = configureStore({
  reducer: {
    cards: cardsReducer
  }
})

export default store
