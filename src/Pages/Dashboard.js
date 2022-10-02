import { styled } from '@mui/material/styles';
import { AppBar, Box, Toolbar } from '@mui/material'
import React from 'react'
import SearchCommon from '../Components/Common/Search/Search'
const AppBarStyled = styled(AppBar)(({ theme }) => ({
    backgroundColor: '#fff',
    boxShadow: '0px 2px 4px -1px rgb(0, 0, 0, 0.05)'
}))
const Dashboard = () => {

    return (
        <Box >
            <AppBarStyled position="static" >
                <Toolbar>
                    <SearchCommon />
                </Toolbar>
            </AppBarStyled>
        </Box>
    )
}

export default Dashboard
