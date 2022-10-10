import { Badge, Tooltip, IconButton } from '@mui/material'
import React from 'react'
const Iconcommon = ({ children, titleTooltip, amount, placement, ml, color }) => {
    let styleBadge = {
        '& .MuiBadge-badge': {
            fontSize: '13px'
        },
        '& .MuiSvgIcon-root': {
            fontSize: '30px',
            color: '#aaa'
        },
        marginLeft: ml
    }

    return (
        <Tooltip title={titleTooltip}>
            <IconButton sx={styleBadge}>
                <Badge badgeContent={amount}
                    placement={placement}
                    color="primary">
                    {children}
                </Badge>
            </IconButton>

        </Tooltip>
    )

}

export default Iconcommon
