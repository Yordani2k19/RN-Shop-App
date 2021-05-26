import React, { useState } from 'react'
import AppLoading from 'expo-app-loading'
import * as Font from 'expo-font'

import { theme } from './theme'
import { ThemeProvider } from 'styled-components/native'

import { createStore, combineReducers } from 'redux'
import { Provider } from 'react-redux'

import { NavigationContainer } from '@react-navigation/native'
import {
  StackNavigator,
  ShopNavigator,
  MainNavigator,
} from './navigation/ShopNavigator'

import productsReducer from './store/reducers/products'
import cartReducers from './store/reducers/cart'
import ordersReducer from './store/reducers/orders'

const rootReducer = combineReducers({
  products: productsReducer,
  cart: cartReducers,
  orders: ordersReducer,
})

const store = createStore(rootReducer)

const fetchFont = () => {
  return Font.loadAsync({
    'open-sans': require('./assets/fonts/OpenSans-Regular.ttf'),
    'open-sans-bold': require('./assets/fonts/OpenSans-Bold.ttf'),
  })
}

export default function App() {
  const [dataLoaded, setDataLoaded] = useState(false)

  if (!dataLoaded) {
    return (
      <AppLoading
        startAsync={() => fetchFont()}
        onFinish={() => setDataLoaded(true)}
        onError={(err) => console.log('App Loading ERROR: ', err)}
      />
    )
  }
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <NavigationContainer>
          <MainNavigator />
        </NavigationContainer>
      </ThemeProvider>
    </Provider>
  )
}
