import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'

import * as cartActions from '../../store/actions/cart'

import { theme } from '../../theme'

import { FlatList, TouchableOpacity, View, Dimensions } from 'react-native'
import { SafeAreaView } from '../../components/core'
import { ProductItem } from '../../components/common'

import { Ionicons } from '@expo/vector-icons'

export const ProductOverviewScreen = (props) => {
  const PRODUCTS = useSelector((state) => state.products.availableProducts)

  const dispatch = useDispatch()

  const renderItem = (itemData) => {
    const { id, title, imageUrl, price, description } = itemData.item

    return (
      <View mb={theme.space[3]} alignItems="center" justifyContent="center">
        <ProductItem
          id={id}
          title={title}
          imageUrl={imageUrl}
          price={price}
          description={description}
          nav={props.navigation}
          onViewDetails={() =>
            props.navigation.navigate('Details', { itemId: id })
          }
          onAddToCart={() => dispatch(cartActions.addItemToCart(itemData.item))}
        />
      </View>
    )
  }

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
      <FlatList
        style={{ paddingTop: theme.space[5], height: '100%' }}
        data={PRODUCTS}
        renderItem={renderItem}
      />
    </SafeAreaView>
  )
}
