import React, { useState } from 'react'
import { Collapse, List, ListItemButton, ListItemIcon, ListItemText } from "@mui/material";
import { ExpandLess, ExpandMore } from '@mui/icons-material';
import { Link } from 'react-router-dom';
import { styled } from '@mui/material/styles';

//style fontsize and padding
const StyleListText = styled(ListItemText)(({ theme }) => ({
    '& .MuiTypography-root': {
        fontSize: "14px",
    }

}));

const ShowtypeMenu = ({ item }) => {
    return (item.children && item.children.length > 0) ?
        <NestedMenuLevel item={item} /> :
        <SingleLevelMenu item={item} />
}
const SingleLevelMenu = ({ item }) => {
    return (
        <ListItemButton component={Link} to={item.name}>
            {item.iconleft &&
                <ListItemIcon>
                    {item.iconleft}
                </ListItemIcon>}
            <StyleListText primary={item.name}
            />
        </ListItemButton >

    )
}
const NestedMenuLevel = ({ item }) => {
    const [open, setOpen] = useState(false)
    const handleClick = () => {
        setOpen(!open)
    }
    return (
        <>
            <ListItemButton onClick={handleClick}  >
                {item.iconleft &&
                    <ListItemIcon>
                        {item.iconleft}
                    </ListItemIcon>}
                <StyleListText primary={item.name} />
                {open ? <ExpandLess /> : <ExpandMore />}
            </ListItemButton>
            <Collapse in={open} timeout="auto" unmountOnExit sx={{ paddingLeft: '15px' }}>
                <List disablePadding>
                    {item.children.map((ele, index) => {
                        return <ShowtypeMenu item={ele} key={Math.random()} />
                    })}

                </List>
            </Collapse>
        </>)
}

const MenuNestReuse = ({ data }) => {
    return (
        <List >
            {data.map((ele, index) => {
                return <ShowtypeMenu item={ele} key={Math.random()}
                />
            })}
        </List>
    )
}

export default MenuNestReuse
