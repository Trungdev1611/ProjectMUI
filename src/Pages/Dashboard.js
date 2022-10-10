import { styled } from '@mui/material/styles';
import { AppBar, Box, Container, Toolbar } from '@mui/material'
import React, { useState, useRef } from 'react'
import SearchCommon from '../Components/Common/Search/Search'
import Iconcommon from '../Components/Common/Icon/Iconcommon';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import NotificationsOutlinedIcon from '@mui/icons-material/NotificationsOutlined';
import AvartarImage from '../Components/Common/Avartar/Avartar';
import Account from '../Components/Common/Account/Account';
import PowerSettingsNewOutlinedIcon from '@mui/icons-material/PowerSettingsNewOutlined';
import BodyMain from '../Components/Body';

const Dashboard = () => {
    const [openMenuAccount, setOpenMenuAccount] = useState(false)
    const [openMenuAccount1, setOpenMenuAccount1] = useState(false)
    const [anchorEl, setAnchorEl] = useState(null)
    const [anchorEl1, setAnchorEl1] = useState(null)
    const AppBarStyled = styled(AppBar)(({ theme }) => ({
        backgroundColor: '#fff',
        boxShadow: '0px 2px 4px -1px rgb(0, 0, 0, 0.05)'
    }))
    function handleClose() {
        setOpenMenuAccount(false)
    }
    function onClickAccount(e) {
        console.log(e.currentTarget)
        setAnchorEl((e.currentTarget))
        setOpenMenuAccount(!openMenuAccount)
    }

    function handleCloseLanguage() {
        setOpenMenuAccount1(false)
    }
    function onClickLanguage(e) {
        setAnchorEl1(e.currentTarget)
        setOpenMenuAccount1(!openMenuAccount)
    }
    return (
        <Box>
            <Box >
                <AppBarStyled position="static" >
                    <Toolbar sx={{ justifyContent: 'space-between', padding: '0px', }} >
                        <SearchCommon />
                        <Box sx={{ display: 'flex', alignItems: 'center' }}>
                            <Iconcommon titleTooltip="Message" amount={3} placement="top-end" >
                                <ChatBubbleOutlineIcon />
                            </Iconcommon>
                            <Iconcommon titleTooltip="Notifycation" amount={7} placement="top-end" >
                                <NotificationsOutlinedIcon />
                            </Iconcommon>
                            <Account open={openMenuAccount1}
                                handleClose={handleCloseLanguage}
                                onClickAccount={onClickLanguage}
                                anchorEl={anchorEl1}

                            >
                                <Iconcommon titleTooltip="Account" amount={0} showZero placement="top-end" ml="5px" >
                                    <AvartarImage
                                        src="https://images.unsplash.com/photo-1615920292087-6d9f818e9e13?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bmF0dXJhbCUyMGJlYXV0eXxlbnwwfHwwfHw%3D&w=1000&q=80"
                                        sx={{ width: 30, height: 30 }} />
                                </Iconcommon>
                            </Account>
                            <Account open={openMenuAccount}
                                handleClose={handleClose}
                                onClickAccount={onClickAccount}
                                anchorEl={anchorEl}
                            >   <Iconcommon titleTooltip="Account" amount={0} showZero placement="top-end"
                            >
                                    <PowerSettingsNewOutlinedIcon />
                                </Iconcommon>
                            </Account>
                        </Box>

                    </Toolbar>
                </AppBarStyled>
            </Box>
            <BodyMain />
        </Box>
    )

}





export default Dashboard
