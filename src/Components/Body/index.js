import { Box, Grid, Stack } from '@mui/material'
import React from 'react'
import Analytics from './Analytics/Analytics'
import Info from './Info/Info'

const BodyMain = () => {
    return (
        <Box>
            <Analytics />
            <Box>
                <Grid container spacing={2}>
                    <Grid item md={6}>
                        <Info textheading="Visitor"
                            quatity={"24.532"}
                            percent="+14%"
                            color="#376fd0 "
                            colorPercent="green"
                        />
                    </Grid>
                    <Grid item md={6}>
                        <Info textheading="Activity"
                            quatity={"63.200"}
                            percent="-12%"
                            color="black "
                            colorPercent="#f44d4d"
                        />
                    </Grid>
                    <Grid item md={6}>
                        <Info textheading="Real-Time"
                            quatity={"1.320"}
                            percent="-18%"
                            color="#805f41"
                            colorPercent="#fa4e31"
                            showbutton={true}
                            contentBtn="Monthly"
                        />
                    </Grid>
                    <Grid item md={6}>
                        <Info textheading="Bounce"
                            quatity={"12.364"}
                            percent="+27%"
                            color="#376fd0 "
                            colorPercent="green"
                            showbutton={true}
                            contentBtn="Yearly"
                        />
                    </Grid>
                </Grid>

            </Box>
        </Box>
    )
}

export default BodyMain
