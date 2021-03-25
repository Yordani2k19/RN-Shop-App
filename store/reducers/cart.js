import { ADD_ITEM_TO_CART, REMOVE_ITEM_FROM_CART } from '../actions/cart'
import { CartItem } from '../../model/cart-item'

const initialState = {
  items: {},
  totalAmount: 0,
}

export default (state = initialState, action) => {
  switch (action.type) {
    case ADD_ITEM_TO_CART:
      const addedItem = action.item
      const itemTitle = addedItem.title
      const itemPrice = addedItem.price

      let updatedOrNotUpdatedCartItem

      if (state.items[addedItem.id]) {
        // item in cart
        updatedOrNotUpdatedCartItem = new CartItem(
          state.items[addedItem.id].quantity + 1,
          itemPrice,
          itemTitle,
          state.items[addedItem.id].totalAmount + itemPrice
        )
      } else {
        updatedOrNotUpdatedCartItem = new CartItem(
          1,
          itemPrice,
          itemTitle,
          itemPrice
        )
      }
      return {
        ...state,
        items: { ...state.items, [addedItem.id]: updatedOrNotUpdatedCartItem },
        totalAmount: state.totalAmount + itemPrice,
      }
    case REMOVE_ITEM_FROM_CART:
      const selectedCartItem = state.items[action.itemId]
      const currentQty = selectedCartItem.quantity
      let updatedCartItems
      if (currentQty > 1) {
        const updatedCartItem = new CartItem(
          selectedCartItem.quantity - 1,
          selectedCartItem.price,
          selectedCartItem.title,
          selectedCartItem.totalAmount - selectedCartItem.price
        )
        updatedCartItems = { ...state.items, [action.itemId]: updatedCartItem }
      } else {
        updatedCartItems = { ...state.items }
        delete updatedCartItems[action.itemId]
      }
      return {
        ...state,
        items: updatedCartItems,
        totalAmount: state.totalAmount - selectedCartItem.price,
      }
  }
  return state
}
