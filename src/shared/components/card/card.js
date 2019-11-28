import React from 'react';
import { Box } from './styles'

const Card = (props) => {
    return (
        <Box>
            {props.children}
        </Box>
    )
}

export default Card;