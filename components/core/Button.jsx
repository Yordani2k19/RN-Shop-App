import React from "react"
import styled from "styled-components/native"
import { space, color, position } from "styled-system"

// Changing components using a condition

// let ButtonComponent

// Platform.OS === 'android' && Platform.Version >= 21 
//     ? ButtonComponent = TouchableNativeFeedback
//     : ButtonComponent = TouchableOpacity

const StyledButton = styled.TouchableOpacity`
    border-radius: 4px;    
    ${space}
    ${color}
    ${position}
`

export const Button = ({ children, ...rest }) => {
    return(
        <StyledButton {...rest}>
            {children}
        </StyledButton>
    )
}