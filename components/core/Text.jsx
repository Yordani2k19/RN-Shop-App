import React from "react"
import styled from "styled-components/native"
import { color, space, typography, position } from "styled-system"

const StyledText = styled.Text`              
    ${typography}
    ${space}
    ${color}    
    ${position}    
    font-family: 'open-sans';
`

export const Text = ({ children, ...rest }) => {
    return <StyledText{...rest}>{children}</StyledText>            
}