export const DELETE_ITEM = 'DELETE_ITEM'
export const CREATE_ITEM = 'CREATE_ITEM'
export const UPDATE_ITEM = 'UPDATE_ITEM'

export const deleteItem = (itemId) => {
  return { type: DELETE_ITEM, itemId: itemId }
}

export const createItem = (title, description, imageUrl, price) => {
  return {
    type: CREATE_ITEM,
    itemData: {
      title,
      description,
      imageUrl,
      price,
    },
  }
}

export const updateItem = (itemId, title, description, imageUrl) => {
  return {
    type: UPDATE_ITEM,
    itemId,
    itemData: {
      title,
      description,
      imageUrl,
    },
  }
}
