import React from 'react'

import { theme } from '../../theme'

import { Image, Dimensions, TouchableOpacity } from 'react-native'
import { View, Text, Card } from '../core'

export const ProductItem = (props) => {
  const { title, imageUrl, price, onSelect } = props

  return (
    <TouchableOpacity onPress={onSelect}>
      <Card
        style={{
          justifyContent: 'center',
          alignItems: 'center',
          width: '100%',
          marginBottom: 20,
        }}
      >
        <View
          width={Dimensions.get('screen').height / 2}
          maxWidth={300}
          height={Dimensions.get('screen').height / 3}
          paddingTop={theme.size[4]}
        >
          <Image
            source={imageUrl ? { uri: imageUrl } : null}
            style={{ flex: 1, borderRadius: 4, overflow: 'hidden' }}
          />
        </View>
        <View paddingTop={theme.size[4]}>
          <Text
            fontFamily="open-sans-bold"
            color={theme.primaryColors.primary}
            fontSize={theme.size[2]}
          >
            {title}
          </Text>
        </View>
        <View>
          <Text
            color={theme.primaryColors.shadedColor}
            fontFamily="open-sans"
            fontSize={theme.size[2]}
          >
            ${price}
          </Text>
        </View>
        <View
          width="100%"
          flexDirection="row"
          justifyContent="space-evenly"
          alignItems="center"
          flexWrap="wrap"
          py={theme.size[2]}
        >
          {props.children}
        </View>
      </Card>
    </TouchableOpacity>
  )
}
