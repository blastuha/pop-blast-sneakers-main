import { createSlice } from '@reduxjs/toolkit'
import { fetchSneakers } from './asyncActions'

const initialState = { sneakers: [], status: '' }

export const sneakersSlice = createSlice({
  name: 'sneakers',
  initialState,
  extraReducers: {
    [fetchSneakers.pending]: (state) => {
      state.sneakers = []
      state.status = 'loading'
    },
    [fetchSneakers.fulfilled]: (state, action) => {
      state.sneakers = action.payload
      state.status = 'success'
    },
    [fetchSneakers.rejected]: (state) => {
      state.sneakers = []
      state.status = 'error'
      console.error('Ошибка при загрузке данных')
    },
  },
})

export default sneakersSlice.reducer
