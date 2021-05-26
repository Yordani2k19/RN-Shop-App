import React from 'react'

import { theme } from '../../theme'

import { Dimensions, TouchableOpacity } from 'react-native'
import { View, Text, Card } from '../core'

import { Ionicons } from '@expo/vector-icons'

export const CartItem = (props) => {
  const {
    itemId,
    title,
    price,
    quantity,
    handleDelete,
    onViewDetails,
    deletable,
  } = props

  return (
    <TouchableOpacity onPress={onViewDetails}>
      <Card
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          alignSelf: 'center',
          padding: Dimensions.get('screen').height / 40,
          marginBottom: Dimensions.get('screen').height / 40,
        }}
      >
        <View flexDirection="row" alignItems="center">
          <Text
            fontSize={theme.size[1]}
            fontFamily="open-sans"
            color={theme.primaryColors.shadedColor}
            pr={Dimensions.get('screen').height / 30}
          >
            {quantity}
          </Text>
          <Text
            fontSize={theme.size[1]}
            fontFamily="open-sans-bold"
            color={theme.primaryColors.primary}
          >
            {title}
          </Text>
        </View>
        <View flexDirection="row" alignItems="center">
          <Text
            fontFamily="open-sans"
            fontSize={theme.size[1]}
            color={theme.primaryColors.shadedColor}
            pr={Dimensions.get('screen').height / 30}
          >
            ${Math.round(price.toFixed(2) * 100) / 100}
          </Text>
          {deletable && (
            <TouchableOpacity onPress={handleDelete}>
              <Ionicons
                name="ios-trash"
                size={24}
                color={theme.primaryColors.primary}
              />
            </TouchableOpacity>
          )}
        </View>
      </Card>
    </TouchableOpacity>
  )
}
