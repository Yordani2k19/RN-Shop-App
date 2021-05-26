import uuid from 'react-native-uuid'

import { DELETE_ITEM, CREATE_ITEM, UPDATE_ITEM } from '../actions/products'

import { PRODUCTS } from '../../data/dummy-data'
import { Product } from '../../model/product'

const initialState = {
  availableProducts: PRODUCTS,
  userProducts: PRODUCTS.filter((product) => product.ownerId === 'u2'),
}

export default (state = initialState, action) => {
  switch (action.type) {
    case CREATE_ITEM:
      // new Date is id
      // change to uuid or nanoid
      console.log(action)
      const newItem = new Product(
        uuid.v4(),
        'u2',
        action.itemData.title,
        action.itemData.imageUrl,
        action.itemData.description,
        action.itemData.price
      )
      return {
        ...state,
        availableProducts: state.availableProducts.concat(newItem),
        userProducts: state.userProducts.concat(newItem),
      }

    case UPDATE_ITEM:
      const itemIndex = state.userProducts.findIndex(
        (item) => item.id === action.itemId
      )

      const updatedItem = new Product(
        action.itemId,
        state.userProducts[itemIndex].ownerId,
        action.itemData.title,
        action.itemData.description,
        action.itemData.imageUrl,
        state.userProducts[itemIndex].price
      )
      const updatedUserItems = [...state.userProducts]
      updatedUserItems[itemIndex] = updatedItem

      const availableItemIndex = state.availableProducts.findIndex(
        (item) => item.id === action.itemId
      )

      const updatedAvaiableItems = [...state.availableProducts]
      updatedAvaiableItems[availableItemIndex] = updatedItem

      return {
        ...state,
        availableProducts: updatedAvaiableItems,
        userProducts: updatedUserItems,
      }

    case DELETE_ITEM:
      return {
        ...state,
        userProducts: state.userProducts.filter(
          (item) => item.id !== action.itemId
        ),
        availableProducts: state.availableProducts.filter(
          (item) => item.id !== action.itemId
        ),
      }
  }
  return state
}
