import { Avatar } from '@mui/material'
import React from 'react'

const AvartarImage = ({ src, sizes, sx }) => {
    return (
        <Avatar
            sx={sx}
            src={src}
            sizes={sizes} />

    )
}

export default AvartarImage
