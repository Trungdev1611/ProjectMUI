import React, { useState } from 'react'
import Drawer from '@mui/material/Drawer';
import { dataDrawer } from './const';
import MenuNestReuse from '../Common/Menu/MenuNestReuse';
const Sidebar = () => {
    const sxSidebar = {
        '& .MuiDrawer-paper': {
            boxSizing: 'border-box',
            backgroundColor: '#233044',
            width: 250,
            position: 'absolute',
            top: '70px',
            color: 'white',
            '&::-webkit-scrollbar': {
                width: '0.4em',
                height: '20px',
                display: 'none'
            },
            '&::-webkit-scrollbar-track': {
                boxShadow: 'inset 0 0 6px rgba(0,0,0,0.00)',
                webkitBoxShadow: 'inset 0 0 6px rgba(0,0,0,0.00)',
                height: '20px',
                display: 'none'
            },
            '&::-webkit-scrollbar-thumb': {
                backgroundColor: 'rgba(0,0,0,.1)',
                height: '20px',
                display: 'none'
            }
        },
    }
    return (
        <Drawer
            variant="permanent"
            open={true}
            sx={sxSidebar}>
            <MenuNestReuse
                data={dataDrawer}
                fontsize="14px"
                padding="15px"
            />
        </Drawer>

    )
}

export default Sidebar
