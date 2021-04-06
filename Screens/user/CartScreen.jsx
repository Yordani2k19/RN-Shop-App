import React from 'react'
import { useSelector, useDispatch } from 'react-redux'

import { removeItemFromCart } from '../../store/actions/cart'
import { addOrder } from '../../store/actions/orders'

import { theme } from '../../theme'

import { FlatList, Dimensions } from 'react-native'
import { View, Text, SafeAreaView, Card, Button } from '../../components/core'
import { CartItem } from '../../components/common'

export const CartScreen = (props) => {
  const cartTotal = useSelector((state) => state.cart.totalAmount)

  const cartItem = useSelector((state) => {
    const transformedCartItemsToArray = []
    for (const key in state.cart.items) {
      transformedCartItemsToArray.push({
        itemId: key,
        itemTitle: state.cart.items[key].title,
        itemPrice: state.cart.items[key].price,
        quantity: state.cart.items[key].quantity,
        totalAmount: state.cart.items[key].totalAmount,
      })
    }
    return transformedCartItemsToArray.sort((a, b) =>
      a.itemId > b.itemId ? 1 : -1
    )
  })

  const dispatch = useDispatch()

  let displayNumOfOrders

  if (cartItem.length === 0) {
    displayNumOfOrders = (
      <Text fontFamily="open-sans" color={theme.primaryColors.shadedColor}>
        No Orders
      </Text>
    )
  } else {
    displayNumOfOrders = (
      <Text fontFamily="open-sans" color={theme.primaryColors.shadedColor}>
        ${cartTotal.toFixed(2)}
      </Text>
    )
  }

  const sendOrdersToOrdersScreen = () => {
    dispatch(addOrder(cartItem, cartTotal))
    props.navigation.navigate('Orders')
  }

  return (
    <SafeAreaView flex={1}>
      <View mt={theme.space[5]} flex={1}>
        <View justifyContent="center" alignItems="center">
          <Card style={{ padding: theme.space[1] }}>
            <View
              flexDirection="row"
              justifyContent="space-between"
              alignItems="center"
            >
              <Text
                fontSize={theme.size[1]}
                color={theme.primaryColors.primary}
                fontFamily="open-sans-bold"
              >
                Total: {displayNumOfOrders}
              </Text>
              <View>
                <Button
                  disabled={cartItem.length === 0 ? true : false}
                  onPress={sendOrdersToOrdersScreen}
                  bg={
                    cartItem.length === 0
                      ? theme.primaryColors.fakeOpacity
                      : theme.primaryColors.primary
                  }
                  p={Dimensions.get('screen').width / 80}
                >
                  <Text
                    fontSize={theme.size[1]}
                    color="white"
                    fontFamily="open-sans-bold"
                  >
                    Order Now
                  </Text>
                </Button>
              </View>
            </View>
          </Card>
        </View>
        <View
          pt={5}
          pl={Dimensions.get('screen').width / 12}
          justifyContent="center"
          alignItems="flex-start"
        >
          <Text
            fontFamily="open-sans-bold"
            color={theme.primaryColors.primary}
            fontSize={16}
          >
            YOUR CART
          </Text>
        </View>
        <View flex={1}>
          <FlatList
            contentContainerStyle={{
              padding: Dimensions.get('screen').height / 40,
            }}
            data={cartItem}
            keyExtractor={(item) => item.itemId}
            renderItem={(itemData) => (
              <CartItem
                itemId={itemData.item.itemId}
                quantity={itemData.item.quantity}
                title={itemData.item.itemTitle}
                price={itemData.item.totalAmount}
                nav={props.navigation}
                onViewDetails={() =>
                  props.navigation.navigate('Details', {
                    itemId: itemData.item.itemId,
                  })
                }
                deletable
                handleDelete={() =>
                  dispatch(removeItemFromCart(itemData.item.itemId))
                }
              />
            )}
          />
        </View>
      </View>
    </SafeAreaView>
  )
}
