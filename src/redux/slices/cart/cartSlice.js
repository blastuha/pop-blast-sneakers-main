import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  selectedSize: '',
  selectedColor: '',
  isInCart: false,
  cartData: [],
  sneakerIndex: null,
  sneakerQuantity: null,
}

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    // установка размера / цвета
    setSelectedSize: (state, action) => {
      state.selectedSize = action.payload
    },
    setSelectedColor: (state, action) => {
      state.selectedColor = action.payload
    },

    // в корзине ли товар с конкретным цветом и размером?
    setIsInCart: (state, action) => {
      state.isInCart = action.payload
    },

    // индекс кроссовка
    setSneakerIndex: (state, action) => {
      state.sneakerIndex = state.cartData.findIndex(
        (item) =>
          item.id === action.payload &&
          item.color === state.selectedColor &&
          item.size === state.selectedSize
      )
    },

    // взаимодействие с корзиной
    setCartData: (state, action) => {
      state.cartData = action.payload
    },
    addItemToCart: (state, action) => {
      const itemToAdd = {
        ...action.payload,
        quantity: 1,
        size: state.selectedSize,
        color: state.selectedColor,
      }
      state.cartData.push(itemToAdd)
    },
    deleteItem: (state, action) => {
      if (action.payload.sneakerQuantity === 1) {
        state.cartData = state.cartData.filter(
          (item) => item.id !== action.payload.sneakerId
        )
      }
    },

    // взаимодействие с количеством товара
    increaseQunatity: (state, action) => {
      const sneakerToChange = state.cartData.find(
        (_, i) => i === action.payload
      )
      if (sneakerToChange) {
        sneakerToChange.quantity = sneakerToChange.quantity + 1
      }
    },
    decreaseQunaitty: (state, action) => {
      state.cartData.map((sneaker, i) => {
        if (i === action.payload && sneaker.quantity > 1) {
          return sneaker.quantity--
        } else {
          return sneaker
        }
      })
    },
  },
})

export const {
  setSelectedSize,
  setSelectedColor,
  setIsInCart,
  setCartData,
  addItemToCart,
  deleteItem,
  setSneakerIndex,
  increaseQunatity,
  decreaseQunaitty,
  addToCart2,
} = cartSlice.actions

export default cartSlice.reducer
