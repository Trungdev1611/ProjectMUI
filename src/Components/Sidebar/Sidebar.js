import React from 'react'
import Drawer from '@mui/material/Drawer';
import { ListItemIcon, ListItemText, Menu, MenuItem, MenuList } from '@mui/material';
import AdUnitsIcon from '@mui/icons-material/AdUnits';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { dataDrawer } from './const';
const Sidebar = () => {
    const [open, setOpen] = React.useState(false);
    //render muneList in Sidebar
    const handleClick = (event) => {
        setOpen(!open)
    };
    const notClick = (event) => {
        console.log('aaa')
    };
    let handleClose = () => {
        setOpen(false);
    }
    console.log('open:::', open)
    function renderMenuList(arr, lv, padding, arr1 = []) {
        if (Array.isArray(arr) && arr.length > 0) {
            arr.forEach((item, index) => {
                item.name && arr1.push(<MenuItem key={Math.random()} disableGutters sx={{ '&.MuiMenuItem-root': { paddingLeft: `calc(${lv} * 20px + ${padding}px)`, paddingTop: '8px', paddingBottom: '8px' } }}
                    onClick={item.children && item.children.length > 0 && lv !== 0 ? handleClick : notClick}
                >
                    {item.iconleft && <ListItemIcon><AdUnitsIcon /></ListItemIcon>}
                    <ListItemText sx={{ '& .MuiTypography-root': { fontSize: '14px', color: 'rgba(238, 238, 238, 0.8)' } }}

                    >{item.name}</ListItemText>
                    {item.children && item.children.length > 0 && lv !== 0 && <ExpandMoreIcon style={{ paddingRight: '8px', color: 'rgba(238, 238, 238, 0.8)' }} />}
                </MenuItem>)
                if (item.children && item.children.length > 0) {
                    <MenuList
                        id="basic-menu"
                        open={false}
                        onClose={handleClose}
                    >
                        {renderMenuList(item.children, lv + 1, 6, arr1)}
                    </MenuList>

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
            }}
        >
            <MenuList
            >
                {renderMenuList(dataDrawer, 0, 20)}
            </MenuList>
        </Drawer>

    )
}

export default Sidebar
