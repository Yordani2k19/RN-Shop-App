import React from 'react'
import { Dimensions } from 'react-native'
import { createStackNavigator } from '@react-navigation/stack'

import { theme } from '../theme'

import { ProductOverviewScreen, ProductDetailScreen } from '../Screens/shop'
import { CartScreen } from '../Screens/user'

const Stack = createStackNavigator()

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
          fontSize: Dimensions.get('screen').fontScale * 25,
        },
      }}
    >
      <Stack.Screen name="Products" component={ProductOverviewScreen} />
      <Stack.Screen name="Details" component={ProductDetailScreen} />
      <Stack.Screen name="Cart" component={CartScreen} />
    </Stack.Navigator>
  )
}
