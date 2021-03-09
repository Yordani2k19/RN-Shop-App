import React from 'react';
import { Dimensions } from 'react-native'

import { View, Text } from '../core'

export const MainHeader = props => {
    return (
        <View>
            <Text fontSize={Dimensions.get('screen').width / 12}>
                {props.mainHeader}
            </Text>
        </View>
    )
}