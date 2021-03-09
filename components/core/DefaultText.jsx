import React from "react"
import styled from "styled-components/native"
import { color, space, typography, position } from "styled-system"

const StyledText = styled.Text`              
    ${typography}
    ${space}
    ${color}    
    ${position}        
`

export const DefaultText = ({ children, ...rest }) => {
    return <StyledText{...rest}>{children}</StyledText>            
}