import React, { useState } from 'react'

import { Dimensions } from 'react-native'
import { View, Text, Card, Button } from '../core'
import { ShowDetails } from './ShowDetails'

import { theme } from '../../theme'

export const OrderItem = (props) => {
  const [showDetails, setShowDetails] = useState(false)

  let buttonText
  {
    showDetails ? (buttonText = 'Hide Details') : (buttonText = 'Show Details')
  }
  return (
    <View
      justifyContent="center"
      alignItems="center"
      pb={Dimensions.get('screen').height / 20}
    >
      <Card style={{ padding: Dimensions.get('screen').height / 50 }}>
        <View
          flexDirection="row"
          justifyContent="space-between"
          alignItems="center"
          mb={Dimensions.get('screen').width / 20}
        >
          <Text
            fontFamily="open-sans-bold"
            fontSize={theme.size[1]}
            color={theme.primaryColors.shadedColor}
          >
            ${props.totalAmount.toFixed(2)}
          </Text>
          <Text
            fontSize={theme.size[1]}
            color={theme.primaryColors.primary}
            fontSize={14}
          >
            {props.date}
          </Text>
        </View>
        <View
          justifyContent="center"
          alignItems="center"
          mb={Dimensions.get('screen').width / 30}
        >
          <Button
            onPress={() => setShowDetails((prevState) => !prevState)}
            bg={theme.primaryColors.primary}
            p={Dimensions.get('screen').width / 80}
          >
            <Text color="white" fontSize={theme.size[1]}>
              {buttonText}
            </Text>
          </Button>
        </View>
        {showDetails && (
          <View
            justifyContent="center"
            alignItems="center"
            pt={Dimensions.get('screen').height / 40}
            width="100%"
          >
            {props.items.map((cartItem) => (
              <View key={cartItem.itemId}>
                <ShowDetails
                  navigation={props.navigation}
                  itemId={cartItem.itemId}
                  title={cartItem.itemTitle}
                  totalAmount={cartItem.totalAmount}
                  quantity={cartItem.quantity}
                />
              </View>
            ))}
          </View>
        )}
      </Card>
    </View>
  )
}
