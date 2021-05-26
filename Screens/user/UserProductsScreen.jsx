import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'

import { deleteItem } from '../../store/actions/products'

import { FlatList, Dimensions, TouchableOpacity } from 'react-native'
import { View, Text, Button, Card } from '../../components/core'
import { ProductItem } from '../../components/common'

import { theme } from '../../theme'

import { MaterialCommunityIcons } from '@expo/vector-icons'

export const UserProductsScreen = (props) => {
  const userItems = useSelector((state) => state.products.userProducts)

  if (userItems.length === 0) {
    return (
      <View
        justifyContent="center"
        alignItems="center"
        pt={Dimensions.get('screen').height / 20}
        mt="50%"
      >
        <Card style={{ padding: Dimensions.get('screen').width / 20 }}>
          <Text textAlign="center" fontSize={theme.size[1]}>
            You have no{' '}
            <Text
              fontFamily="open-sans-bold"
              color={theme.primaryColors.primary}
            >
              items
            </Text>{' '}
            placed
          </Text>
        </Card>
      </View>
    )
  }
  const dispatch = useDispatch()

  useEffect(() => {
    props.navigation.setOptions({
      headerRight: () => (
        <TouchableOpacity
          style={{ marginRight: Dimensions.get('screen').width / 10 }}
          onPress={() =>
            props.navigation.navigate('Edit', {
              itemId: 'N/A',
            })
          }
        >
          <MaterialCommunityIcons name="pencil-box" size={32} color="white" />
        </TouchableOpacity>
      ),
    })
  }, [props.navigation.navigate])

  return (
    <View
      justifyContent="center"
      alignItems="center"
      mt={Dimensions.get('screen').width / 7}
    >
      {
        <FlatList
          data={userItems}
          keyExtractor={(item) => item.id}
          renderItem={(itemData) => (
            <ProductItem
              imageUrl={itemData.item.imageUrl}
              title={itemData.item.title}
              price={itemData.item.price}
              onSelect={() =>
                props.navigation.navigate('Details', {
                  itemId: itemData.item.id,
                })
              }
            >
              <Button
                onPress={() =>
                  props.navigation.navigate('Edit', {
                    itemId: itemData.item.id,
                  })
                }
                bg={theme.primaryColors.primary}
                p={Dimensions.get('screen').width / 80}
              >
                <Text
                  fontFamily="open-sans"
                  color={theme.primaryColors.accent}
                  fontSize={theme.size[1]}
                >
                  Edit Item
                </Text>
              </Button>
              <Button
                onPress={() => dispatch(deleteItem(itemData.item.id))}
                bg={theme.primaryColors.primary}
                p={Dimensions.get('screen').width / 80}
              >
                <Text
                  fontFamily="open-sans"
                  color={theme.primaryColors.accent}
                  fontSize={theme.size[1]}
                >
                  Delete Item
                </Text>
              </Button>
            </ProductItem>
          )}
        />
      }
    </View>
  )
}
