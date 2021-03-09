import React from "react"
import styled from "styled-components/native"
import { color, space, position } from "styled-system"

const StyledSafeAreaView = styled.SafeAreaView`                  
    ${space}
    ${color}
    ${position}
`

export const SafeAreaView = ({ children, ...rest }) => {
    return <StyledSafeAreaView{...rest}>{children}</StyledSafeAreaView>            
}