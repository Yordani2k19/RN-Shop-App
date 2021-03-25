import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'

import * as cartActions from '../../store/actions/cart'

import { theme } from '../../theme'

import { TouchableOpacity, Dimensions, Image, ScrollView } from 'react-native'
import { View, Text, SafeAreaView, Card, Button } from '../../components/core'

import { Ionicons } from '@expo/vector-icons'

export const ProductDetailScreen = (props) => {
  const PRODUCT = useSelector((state) => state.products.availableProducts)

  const dispatch = useDispatch()

  const { itemId } = props.route.params
  const product = PRODUCT.find((item) => item.id === itemId)

  useEffect(() => {
    props.navigation.setOptions({
      headerRight: () => (
        <TouchableOpacity
          style={{ marginRight: Dimensions.get('screen').height / 18 }}
          onPress={() => props.navigation.navigate('Cart')}
        >
          <Ionicons name="ios-cart" size={24} color="white" />
        </TouchableOpacity>
      ),
    })
  }, [props.navigation.navigate])

  return (
    <SafeAreaView>
      <ScrollView>
        <View
          justifyContent="center"
          alignItems="center"
          paddingTop={theme.space[5]}
        >
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
                source={{ uri: product.imageUrl }}
                style={{ flex: 1, borderRadius: 4, overflow: 'hidden' }}
              />
            </View>
            <View paddingTop={theme.size[4]}>
              <Text
                fontFamily="open-sans-bold"
                color={theme.primaryColors.primary}
                fontSize={theme.size[2]}
              >
                {product.title}
              </Text>
            </View>
            <View>
              <Text
                fontSize={theme.size[2]}
                color={theme.primaryColors.shadedColor}
              >
                ${product.price.toFixed(2)}
              </Text>
            </View>
            <View paddingTop={theme.size[4]}>
              <Button
                onPress={() => dispatch(cartActions.addItemToCart(product))}
                bg={theme.primaryColors.primary}
                p={Dimensions.get('screen').width / 80}
              >
                <Text
                  fontFamily="open-sans"
                  fontSize={theme.size[1]}
                  color="white"
                >
                  Add to Cart
                </Text>
              </Button>
            </View>
            <View
              mb={theme.space[5]}
              paddingTop={theme.size[4]}
              mx={theme.space[5]}
            >
              <Text
                fontFamily="open-sans"
                textAlign="center"
                fontSize={theme.size[1]}
              >
                {product.description}
              </Text>
            </View>
          </Card>
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}
