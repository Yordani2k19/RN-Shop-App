import React from 'react'
import { useSelector } from 'react-redux'

import uuid from 'react-native-uuid'

import { FlatList, Dimensions, TouchableOpacity } from 'react-native'
import { View, Text, Card } from '../../components/core'
import { OrderItem } from '../../components/common'

import { theme } from '../../theme'

export const OrderScreen = (props) => {
  const order = useSelector((state) => state.orders.orders)

  if (order.length === 0) {
    return (
      <View
        justifyContent="center"
        alignItems="center"
        pt={Dimensions.get('screen').height / 20}
        mt="50%"
      >
        <Card style={{ padding: Dimensions.get('screen').width / 10 }}>
          <Text textAlign="center" fontSize={theme.size[1]}>
            You have no{' '}
            <Text
              fontFamily="open-sans-bold"
              color={theme.primaryColors.primary}
            >
              orders
            </Text>{' '}
            placed
          </Text>
        </Card>
      </View>
    )
  }
  return (
    <View pt={Dimensions.get('screen').height / 20}>
      <FlatList
        data={order}
        keyExtractor={() => uuid.v4()}
        renderItem={(itemData) => (
          <OrderItem
            items={itemData.item.items}
            navigation={props.navigation}
            date={itemData.item.readableDate}
            totalAmount={itemData.item.totalAmount}
          />
        )}
      />
    </View>
  )
}
