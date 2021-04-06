import React from 'react'
import { Dimensions } from 'react-native'
import { createStackNavigator } from '@react-navigation/stack'
import { createDrawerNavigator } from '@react-navigation/drawer'

import { theme } from '../theme'

import { ProductOverviewScreen, ProductDetailScreen } from '../Screens/shop'
import { CartScreen, OrderScreen } from '../Screens/user'

const Stack = createStackNavigator()
const Drawer = createDrawerNavigator()

export const StackNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: true,
        headerStyle: {
          backgroundColor: theme.primaryColors.primary,
        },
        headerTintColor: theme.primaryColors.accent,
        headerTitleStyle: {
          fontFamily: 'open-sans-bold',
          fontSize: Dimensions.get('screen').fontScale * 25,
        },
      }}
    >
      <Stack.Screen name="Products" component={ProductOverviewScreen} />
      <Stack.Screen name="Details" component={ProductDetailScreen} />
      <Stack.Screen name="Cart" component={CartScreen} />
      <Stack.Screen name={'Orders'} component={OrderScreen} />
    </Stack.Navigator>
  )
}

export const OrdersNavigator = () => {
  return <Stack.Screen name={'Orders'} component={OrderScreen} />
}

export const ShopNavigator = () => {
  return (
    (<Drawer.Screen name={'Products'} component={ProductOverviewScreen} />),
    (<Drawer.Screen name={'Orders'} component={OrdersNavigator} />)
  )
}
