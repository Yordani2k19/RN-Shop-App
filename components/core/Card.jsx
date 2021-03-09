import React from 'react';
import { View, StyleSheet, Dimensions } from 'react-native'

export const Card = props => {
    return(
        <View 
            style={{...styles.card, ...props.style}}>
                {props.children}
        </View>
    )
}

const styles = StyleSheet.create({
    card: {        
        shadowColor: '#767474',
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 6,
        shadowOpacity: 0.6,
        elevation: 5,        
        backgroundColor: 'white',
        borderRadius: 4,  
        width: 'auto',
        maxWidth: 300             
    },
})