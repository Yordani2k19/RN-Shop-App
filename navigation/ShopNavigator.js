import React from 'react'

import { Dimensions } from 'react-native'
import { createStackNavigator } from '@react-navigation/stack'
import { createDrawerNavigator } from '@react-navigation/drawer'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

import { theme } from '../theme'

import { ProductOverviewScreen, ProductDetailScreen } from '../Screens/shop'
import {
  CartScreen,
  OrderScreen,
  UserProductsScreen,
  EditProductScreen,
} from '../Screens/user'

import { Ionicons } from '@expo/vector-icons'

const Stack = createStackNavigator()
const Drawer = createDrawerNavigator()
const BottomTab = createBottomTabNavigator()

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
      <Stack.Screen name="User" component={UserNavigator} />
      <Stack.Screen name="Cart" component={CartScreen} />
      <Stack.Screen name="Orders" component={OrderScreen} />
    </Stack.Navigator>
  )
}

export const OrdersNavigator = () => {
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
      <Stack.Screen name={'Orders'} component={OrderScreen} />
    </Stack.Navigator>
  )
}

export const UserNavigator = () => {
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
      <Stack.Screen name="User" component={UserProductsScreen} />
      <Stack.Screen name="Edit" component={EditProductScreen} />
    </Stack.Navigator>
  )
}

export const MainNavigator = () => {
  return (
    <BottomTab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName

          if (route.name === 'Products') {
            iconName = focused ? 'home-sharp' : 'home-outline'
          } else if (route.name === 'User') {
            iconName = focused ? 'person-sharp' : 'person-outline'
          } else if (route.name === 'Orders') {
            iconName = focused ? 'reorder-three' : 'reorder-three-outline'
          }
          return <Ionicons name={iconName} size={size} color={color} />
        },
      })}
      tabBarOptions={{
        labelStyle: { fontSize: 16, fontFamily: 'open-sans' },
        activeTintColor: 'rgb(0, 133, 122)',
        inactiveTintColor: 'gray',
      }}
    >
      <BottomTab.Screen name={'Products'} component={StackNavigator} />
      <BottomTab.Screen name={'User'} component={UserNavigator} />
      <BottomTab.Screen name={'Orders'} component={OrdersNavigator} />
    </BottomTab.Navigator>
  )
}
