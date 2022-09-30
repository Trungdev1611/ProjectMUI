import React from 'react'
import Drawer from '@mui/material/Drawer';
import { ListItemIcon, ListItemText, MenuItem, MenuList } from '@mui/material';
import AdUnitsIcon from '@mui/icons-material/AdUnits';
import { dataDrawer } from './const';
const Sidebar = () => {
    //render muneList in Sidebar
    function renderMenuList(arr, lv, padding, arr1 = []) {
        if (Array.isArray(arr) && arr.length > 0) {
            arr.forEach((item, index) => {
                item.name && arr1.push(<MenuItem key={Math.random()} disableGutters sx={{ '&.MuiMenuItem-root': { paddingLeft: `calc(${lv} * 20px + ${padding}px)`, paddingTop: '10px', paddingBottom: '10px' } }}  >
                    {item.iconleft && <ListItemIcon><AdUnitsIcon /></ListItemIcon>}
                    <ListItemText sx={{ '& .MuiTypography-root': { fontSize: '14px', color: 'rgba(238, 238, 238, 0.8)' } }} >{item.name}</ListItemText>
                </MenuItem>)
                if (item.children && item.children.length > 0) {
                    renderMenuList(item.children, lv + 1, 6, arr1)
                }
            })
        }
        return arr1
    }

    return (
        <Drawer
            variant="permanent"
            open={true}
            sx={{
                '& .MuiDrawer-paper': {
                    boxSizing: 'border-box',
                    backgroundColor: '#233044',
                    width: 250,
                    position: 'absolute',
                    top: '70px',
                    color: 'white',

                },
            }}
        >
            <MenuList >
                {renderMenuList(dataDrawer, 0, 20)}
            </MenuList>
        </Drawer>

    )
}

export default Sidebar
