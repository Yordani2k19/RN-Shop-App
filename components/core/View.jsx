import React from 'react'
import styled from 'styled-components/native'
import { color, space, typography, position, background } from 'styled-system'

const StyledView = styled.View`
  ${typography}
  ${space}
  ${color}    
  ${position}
  ${background}
`

export const View = ({ children, ...rest }) => {
  return <StyledView {...rest}>{children}</StyledView>
}
