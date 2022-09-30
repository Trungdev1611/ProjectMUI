import React from 'react'
import Drawer from '@mui/material/Drawer';
import { ListItemIcon, ListItemText, MenuItem, MenuList } from '@mui/material';
// import AccessibleIcon from '@mui/icons-material/Accessible';
import AdUnitsIcon from '@mui/icons-material/AdUnits';
import { dataDrawer } from './const';
const Sidebar = () => {

    const handleDrawerToggle = () => {
    };
    const ListDrawer = (arr, lv, arr1 = []) => {
        if (Array.isArray(arr) && arr.length > 0) {
            arr.forEach((item, index) => {
                arr1.push(item.name && <MenuItem key={Math.random()} sx={{ paddingLeft: `calc(${lv} * 20px)` }}>
                    {item.icon && <ListItemIcon>
                        <AdUnitsIcon sx={{ color: 'rgba(238, 238, 238, 0.4)' }} />
                    </ListItemIcon>}
                    <ListItemText sx={{ '& .MuiTypography-root': { fontSize: '14px', color: 'rgba(238, 238, 238, 0.4)' } }} >{item.name}</ListItemText>
                </MenuItem>)
                if (item.chilren && item.chilren.length > 0) {
                    ListDrawer(item.chilren, lv + 1, arr1)
                    console.log(index)
                }
            })
            console.log(arr1)
        }
        return arr1

    }
    return (
        <Drawer
            variant="permanent"
            onClose={handleDrawerToggle}
            open={true}
            sx={{
                '& .MuiDrawer-paper': {
                    boxSizing: 'border-box',
                    backgroundColor: '#233044',
                    width: 250
                    , position: 'absolute',
                    top: '70px',
                    color: 'white',
                    paddingLeft: '15px'
                },
            }}
        >
            <MenuList>

                {ListDrawer(dataDrawer, 0)}

            </MenuList>
        </Drawer>

    )
}

export default Sidebar
