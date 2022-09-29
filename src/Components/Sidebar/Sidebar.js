import React from 'react'
import Drawer from '@mui/material/Drawer';
import { List, ListItem, ListItemButton, ListItemIcon, ListItemText } from '@mui/material';
import AccessibleIcon from '@mui/icons-material/Accessible';
import AdUnitsIcon from '@mui/icons-material/AdUnits';
import { dataDrawer } from './const';
const Sidebar = () => {

    const handleDrawerToggle = () => {
    };
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
                    color: 'white'
                },
            }}
        >
            <List>
                {dataDrawer.map((item, index) => (
                    <ListItem key={Math.random()} disablePadding>
                        <ListItemButton>
                            <ListItemIcon sx={{ color: 'rgb(238, 238, 238)' }}>
                                {index % 2 === 0 ? <AccessibleIcon /> : <AdUnitsIcon />}
                            </ListItemIcon>
                            <ListItemText primary={item.parent.name} sx={{ '& .MuiTypography-root': { fontSize: '14px', color: 'rgb(238, 238, 238)' } }} />
                        </ListItemButton>
                    </ListItem>
                ))}
            </List>
        </Drawer>

    )
}

export default Sidebar
