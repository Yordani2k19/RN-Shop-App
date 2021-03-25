import React from 'react'

import { theme } from '../../theme'

import { Image, Dimensions, TouchableOpacity } from 'react-native'
import { View, Text, Card, Button } from '../core'

export const ProductItem = (props) => {
  const { title, imageUrl, price, onViewDetails, onAddToCart } = props

  return (
    <TouchableOpacity onPress={onViewDetails}>
      <Card
        style={{
          justifyContent: 'center',
          alignItems: 'center',
          width: '100%',
          marginBottom: 40,
        }}
      >
        <View
          width={Dimensions.get('screen').height / 2}
          maxWidth={300}
          height={Dimensions.get('screen').height / 3}
          paddingTop={theme.size[4]}
        >
          <Image
            source={{ uri: imageUrl }}
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
            ${price.toFixed(2)}
          </Text>
        </View>
        <View
          width="100%"
          flexDirection="row"
          justifyContent="space-evenly"
          alignItems="center"
          flexWrap="wrap"
          py={theme.size[4]}
        >
          <Button
            onPress={onViewDetails}
            bg={theme.primaryColors.primary}
            p={Dimensions.get('screen').width / 80}
          >
            <Text
              fontFamily="open-sans"
              color={theme.primaryColors.accent}
              fontSize={theme.size[1]}
            >
              View Details
            </Text>
          </Button>
          <Button
            onPress={onAddToCart}
            bg={theme.primaryColors.primary}
            p={Dimensions.get('screen').width / 80}
          >
            <Text
              fontFamily="open-sans"
              color={theme.primaryColors.accent}
              fontSize={theme.size[1]}
            >
              Add To Cart
            </Text>
          </Button>
        </View>
      </Card>
    </TouchableOpacity>
  )
}
