import React from 'react'
import { Button } from '@mui/material'
const ButtonCommon = ({ classes, children, color, disable, sx, variant, startIcon }) => {
    return (
        <Button classes={classes} color={color} sx={sx} disable={disable} variant={variant} startIcon={startIcon}
            fontWeight="700"
        >
            {children}
        </Button>
    )
}

export default ButtonCommon
