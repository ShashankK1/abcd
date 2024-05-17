//@ts-nocheck
import { Box } from '@mui/material'
import React from 'react'

const Card = (props) => {
    console.log(props.game.property);
    return (
        <Box sx={{ height: 64, width: 64, padding: 2, backgroundImage: `url(${props.game.property.image})`, backgroundSize: 'cover' }}>
            
        </Box>
    )
}

export default Card