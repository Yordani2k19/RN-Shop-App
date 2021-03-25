import React from 'react'
import styled from 'styled-components/native'
import { space, color, position } from 'styled-system'

const StyledButton = styled.TouchableOpacity`
  border-radius: 4px;
  ${space}
  ${color}
  ${position}
`

export const Button = ({ children, ...rest }) => {
  return <StyledButton {...rest}>{children}</StyledButton>
}
