import { Box, Icon, Stack, Typography } from '@mui/material'
import React from 'react'
import Iconcommon from '../../Common/Icon/Iconcommon'
import SyncIcon from '@mui/icons-material/Sync';
import FilterListIcon from '@mui/icons-material/FilterList';
import ButtonCommon from '../../Common/Button/ButtonCommon';
const Analytics = () => {
    return (
        <Stack direction={"row"} sx={{ justifyContent: "space-between", alignItems: "center", padding: "20px 15px", borderBottom: "1px solid #ccc", marginBottom: '20px' }}>
            <Box>
                <Typography component={"h5"} variant="h5" py="10px">Analytics Dashboard</Typography>
                <Typography component={"p"} variant="p" sx={{ color: "#547598" }}>Welcome back, Lucy! We've missed you. 👋</Typography>
            </Box>
            <Box sx={{ display: "flex", alignItems: "center", gap: 3 }}>
                <Icon color="primary">
                    <SyncIcon />
                </Icon>
                <Icon color="primary">
                    <FilterListIcon />
                </Icon>
                <ButtonCommon color="primary" variant="contained"
                >
                    Today: Oct 10
                </ButtonCommon>
            </Box>
        </Stack>
    )
}

export default Analytics
