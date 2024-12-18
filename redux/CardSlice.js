import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  suitableCards: [],
  notSuitableCards: [],
  selectedCards: [],
}

const cardsSlice = createSlice({
  name: 'cards',
  initialState,
  reducers: {
    addSuitableCard: (state, action) => {
      state.suitableCards.push(action.payload)
    },
    addNotSuitableCard: (state, action) => {
      state.notSuitableCards.push(action.payload)
    },
    setSelectedCards: (state, action) => {
        state.selectedCards = action.payload;
      }
  }
})

export const { addSuitableCard, addNotSuitableCard, setSelectedCards } = cardsSlice.actions
export default cardsSlice.reducer
