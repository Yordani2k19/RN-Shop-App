import React from 'react';

import { TouchableOpacity } from 'react-native'
import { View, Text, SafeAreaView } from '../../components/core'

// import { PRODUCTS } from '../../data/dummy-data'

export const ProductDetailScreen = props => {
    const { itemId } = props.route.params    
    // const findItems = PRODUCTS.find(item => item.id === itemId)

    return (
        <SafeAreaView>
            <View>
                <Text>
                    ProductDetailScreen
                </Text>
                <View>
                    <TouchableOpacity onPress={() => props.navigation.goBack()}>
                        <Text>Go back</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </SafeAreaView>
    )
}