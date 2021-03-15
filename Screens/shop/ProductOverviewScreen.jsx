import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'

import { theme } from '../../theme'

import { FlatList, TouchableOpacity, View, Dimensions } from 'react-native'
import { SafeAreaView } from '../../components/core'
import { ProductItem } from '../../components/common/ProductItem'

import { Ionicons } from '@expo/vector-icons';

export const ProductOverviewScreen = (props) => {
      // state from redux
  // products is from the rootReducer in App.js
  // availableProducts comes from the Reducers (products) file
  const products = useSelector((state) => state.products.availableProducts)

  const renderItem = (itemData) => {
    const { id, title, imageUrl, price, description } = itemData.item

    return (    
        <View
            mb={theme.space[3]}
            alignItems='center'
            justifyContent='center'>
            <ProductItem 
                id={id}
                title={title}
                imageUrl={imageUrl}
                price={price}
                description={description}
                nav={props.navigation}
                onViewDetails={() => props.navigation.navigate('Details', {
                    itemId: id
                })}
                onAddToCart={() => console.log(title, 'was added to cart')} />   
        </View>                  
    )
  }

  useEffect(() => {
    props.navigation.setOptions({
        headerRight: () => (
            <TouchableOpacity 
                style={{ marginRight: Dimensions.get('screen').height / 18 }}
                onPress={() => props.navigation.navigate('Cart')}>
                    <Ionicons name="ios-cart" size={24} color="white" />
            </TouchableOpacity>
        ),
      });
  }, [props.navigation.navigate])


  return (
    <SafeAreaView>
        <FlatList
            style={{ paddingTop: theme.space[5], height: '100%' }}
            data={products}
            renderItem={renderItem} />                     
    </SafeAreaView>
  )
}