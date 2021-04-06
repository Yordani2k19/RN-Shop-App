import React from 'react'

import { TouchableOpacity, Dimensions } from 'react-native'
import { View, Text } from '../core'

import { theme } from '../../theme'

export const ShowDetails = (props) => {
  const { navigation, itemId, title, totalAmount, quantity } = props
  return (
    <TouchableOpacity
      onPress={() =>
        navigation.navigate('Details', {
          itemId: itemId,
        })
      }
    >
      <View
        mb={Dimensions.get('screen').width / 10}
        bg={theme.primaryColors.primary}
        p={Dimensions.get('screen').width / 30}
        borderRadius={50}
      >
        <View>
          <Text
            fontFamily="open-sans-bold"
            color="white"
            fontSize={theme.size[2]}
          >
            {title}
          </Text>
        </View>
        <View
          flexDirection="row"
          justifyContent="space-evenly"
          alignItems="center"
        >
          <View
            bg="red"
            p={Dimensions.get('screen').width / 100}
            borderRadius={50}
          >
            <Text fontSize={16} color="white">
              {quantity}
            </Text>
          </View>
          <View
            p={Dimensions.get('screen').width / 100}
            borderRadius={50}
            bg="green"
          >
            <Text fontSize={16} color="white">
              ${totalAmount}
            </Text>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  )
}
