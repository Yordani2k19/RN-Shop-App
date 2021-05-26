import React, { useState, useEffect, useCallback } from 'react'
import { useSelector, useDispatch } from 'react-redux'

import { createItem, updateItem } from '../../store/actions/products'

import { theme } from '../../theme'

import {
  TextInput,
  Dimensions,
  ScrollView,
  TouchableOpacity,
} from 'react-native'
import { View, Text, Card } from '../../components/core'

import { MaterialIcons } from '@expo/vector-icons'

export const EditProductScreen = (props) => {
  const dispatch = useDispatch()

  const { itemId } = props.route.params
  const PRODUCT = useSelector((state) =>
    state.products.availableProducts.find((item) => item.id === itemId)
  )

  // console.log(PRODUCT)

  const [title, setTitle] = useState(itemId === 'N/A' ? '' : PRODUCT.title)
  const [imageUrl, setImageUrl] = useState(
    itemId === 'N/A' ? '' : PRODUCT.imageUrl
  )
  const [price, setPrice] = useState(itemId === 'N/A' ? '' : PRODUCT.price)
  const [description, setDescription] = useState(
    itemId === 'N/A' ? '' : PRODUCT.description
  )

  const submitHandler = () => {
    if (itemId !== 'N/A') {
      dispatch(updateItem(itemId, title, description, imageUrl))
    } else {
      dispatch(createItem(title, description, imageUrl, +price))
    }
  }

  useEffect(() => {
    props.navigation.setOptions({
      headerRight: () => (
        <TouchableOpacity
          style={{ marginRight: Dimensions.get('screen').width / 10 }}
          onPress={submitHandler}
        >
          <MaterialIcons name="save-alt" size={24} color="white" />
        </TouchableOpacity>
      ),
    })
  }, [props.navigation.navigate, title, description, imageUrl, price])

  return (
    <ScrollView>
      <Card
        style={{
          padding: Dimensions.get('screen').width / 20,
          marginTop: Dimensions.get('screen').width / 10,
          alignSelf: 'center',
        }}
      >
        <View
          flexDirection="row"
          alignItems="center"
          justifyContent="center"
          marginBottom={Dimensions.get('screen').width / 25}
        >
          <TextInput
            value={title}
            onChangeText={(text) => setTitle(text)}
            style={{
              borderBottomWidth: 1,
              borderBottomColor: theme.primaryColors.primary,
              width: '80%',
              textAlign: 'center',
              fontSize: theme.size[1],
              fontFamily: 'open-sans',
            }}
            placeholder="Enter Title"
          />
        </View>
        <View
          flexDirection="row"
          alignItems="center"
          justifyContent="center"
          marginBottom={Dimensions.get('screen').width / 25}
        >
          <TextInput
            value={imageUrl}
            onChangeText={(text) => setImageUrl(text)}
            style={{
              borderBottomWidth: 1,
              borderBottomColor: theme.primaryColors.primary,
              width: '80%',
              textAlign: 'center',
              fontSize: theme.size[1],
              fontFamily: 'open-sans',
            }}
            placeholder="Enter Image Url"
          />
        </View>
        <View
          flexDirection="row"
          alignItems="center"
          justifyContent="center"
          marginBottom={Dimensions.get('screen').width / 25}
        >
          <TextInput
            value={price}
            onChangeText={(text) => setPrice(text)}
            style={{
              borderBottomWidth: 1,
              borderBottomColor: theme.primaryColors.primary,
              width: '80%',
              textAlign: 'center',
              fontSize: theme.size[1],
              fontFamily: 'open-sans',
            }}
            placeholder="Enter Price"
          />
        </View>
        <View flexDirection="row" alignItems="center" justifyContent="center">
          <TextInput
            value={description}
            onChangeText={(text) => setDescription(text)}
            style={{
              borderBottomWidth: 1,
              borderBottomColor: theme.primaryColors.primary,
              width: '80%',
              textAlign: 'center',
              fontSize: theme.size[1],
              fontFamily: 'open-sans',
            }}
            placeholder="Enter Description"
          />
        </View>
      </Card>
    </ScrollView>
  )
}
