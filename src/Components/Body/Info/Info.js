import { alpha, styled } from '@mui/material/styles';
import { Box, Button, Paper, Typography } from '@mui/material'
import { Stack } from '@mui/system'
import React from 'react'

const Info = ({ textheading, quatity, showbutton, percent, color, colorPercent, contentBtn }) => {

    const ButtonShow = styled(Button)(({ theme }) => ({
        borderRadius: '5px',
        position: 'absolute',
        top: '20px',
        right: '10px',
        padding: '2px',
        fontSize: '11px'
    }))


    return (
        <Paper sx={{ position: 'relative', '& :hover': { backgroundColor: '#dfe8f6' } }}>
            <Stack direction={"row"} alignItems="flex-end" justifyContent={"space-between"} height="100%" sx={{ padding: "15px", }}  >
                <Stack sx={{ alignSelf: "stretch", justifyContent: "space-between" }}>
                    <Typography component={"h6"} variant="h6" color={color}>{textheading}</Typography>
                    <Typography component={"h6"} variant="h6" color={color}>{quatity}</Typography>
                    <Box color={color} display="flex" gap={4}>
                        <Box sx={{ color: colorPercent }}>{percent}</Box>
                        <span>Since last week</span>
                    </Box>
                </Stack>
                <Box>
                    {!showbutton ? <img src="https://mira.bootlab.io/static/img/illustrations/working.png"
                        width={"150px"}
                        height="150px"
                        alt="" /> : <div style={{ width: "150px", height: "150px" }}></div>}
                </Box>
            </Stack>
            {showbutton && <ButtonShow
                variant="contained"
                color="primary">{contentBtn}</ButtonShow>}
        </Paper>
    )
}

export default Info
