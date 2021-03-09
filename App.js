import React, { useState } from 'react'
import { Text } from 'react-native'
import AppLoading from 'expo-app-loading'
import * as Font from 'expo-font'

import { View, SafeAreaView } from './components/core'
import { MainHeader } from './components/common'

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
    <SafeAreaView>
      <View height="100%">
        <MainHeader mainHeader="Hello Worldddd" />
      </View>
    </SafeAreaView>
  )
}
