export const ADD_ORDER = 'ADD_ORDER'
export const DELETE_ORDER = 'DELETE_ORDER'

export const addOrder = (cartItems, totalAmount) => {
  return {
    type: ADD_ORDER,
    orderData: { items: cartItems, amount: totalAmount },
  }
}

export const deleteOrder = (orderId) => {
  return { type: DELETE_ORDER, orderId: orderId }
}
