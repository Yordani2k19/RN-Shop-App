import React from 'react';

import { theme } from '../../theme'

import { Image, Dimensions } from 'react-native'
import { View, Text, Card, Button } from '../core'

export const ProductItem = props => {
    const { title, imageUrl, price, onViewDetails, onAddToCart } = props

    return(
        
            <Card style={{ justifyContent: 'center', alignItems: 'center', width: '100%', marginBottom: 40 }}>
                <View 
                    width={Dimensions.get('screen').height / 3} 
                    maxWidth={300}
                    height={Dimensions.get('screen').height / 4} 
                    paddingTop={theme.size[4]}>
                    <Image 
                        source={{ uri: imageUrl }}
                        style={{ flex: 1, borderRadius: 4, overflow: 'hidden' }}/>
                </View>
                <View paddingTop={theme.size[4]}>
                    <Text fontSize={theme.size[1]}>{title}</Text>
                </View>
                <View>
                    <Text color={theme.primaryColors.shadedColor}>${price}</Text>
                </View>
                <View 
                    width='100%'
                    flexDirection='row' 
                    justifyContent='space-evenly' 
                    alignItems='center'
                    flexWrap='wrap'
                    py={theme.size[4]}>
                    <Button 
                        onPress={onViewDetails}
                        bg={theme.primaryColors.primary}
                        p={10}>
                        <Text 
                            color={theme.primaryColors.accent}
                            fontSize={15}>View Details</Text>
                    </Button>
                    <Button 
                        onPress={onAddToCart}
                        bg={theme.primaryColors.primary}
                        p={10}>
                        <Text 
                            color={theme.primaryColors.accent}
                            fontSize={15}>Add To Cart</Text>
                    </Button>
                </View>
            </Card>
        
    )
}