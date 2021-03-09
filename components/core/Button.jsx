import React from "react"
import styled from "styled-components/native"
import { space, color, position } from "styled-system"

// Changing components using a condition

// let ButtonComponent

// Platform.OS === 'android' && Platform.Version >= 21 
//     ? ButtonComponent = TouchableNativeFeedback
//     : ButtonComponent = TouchableOpacity

const StyledButton = styled.TouchableOpacity`
    background-color: rgb(0, 133, 122);                     
    border-radius: 4px;    
    ${space}
    ${color}
    ${position}
`

const StyledText = styled.Text`
    color: #FFF;
    font-size: 18px;
    font-weight: 500;
    width: 100%;    
    height: auto;
    padding-top: 5px;
    padding-bottom: 5px;
    padding-left: 20px;
    padding-right: 20px;
    font-family: 'open-sans';
    text-align: center;
`

export const Button = ({ children, ...rest }) => {
    return(
        <StyledButton {...rest}>
            <StyledText>{children}</StyledText>
        </StyledButton>
    )
}