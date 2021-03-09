import React from 'react';
import styled from "styled-components/native"
import { space, color, position } from "styled-system"

const StyledSwitch = styled.Switch`
    ${space}
    ${color}
    ${position}
`

export const Switch = ({ children, ...rest }) => {
    return(
        <StyledSwitch {...rest} />
    )
}