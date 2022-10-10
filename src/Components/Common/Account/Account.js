import { Button, Menu, MenuItem } from '@mui/material'
import React, { useState } from 'react'

const Account = ({
    // onClickAccount,
    //  handleClose,
    //   anchorEl, 
    //  open,
    children }) => {

    const [open, setOpen] = useState(false)
    const [anchorEl, setAnchorEl] = useState(false)
    let onClickAccount = (e) => {
        setAnchorEl(e.currentTarget)
        setOpen(true)
    }
    let handleClose = (e) => {
        setOpen(false)
    }
    return (
        <>
            <Button component="span"
                id="basic-button"
                aria-controls={open ? 'basic-menu' : undefined}
                aria-haspopup="true"
                aria-expanded={open ? 'true' : undefined}
                onClick={onClickAccount}
            >
                {children}
            </Button>
            <Menu
                id="basic-menu"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                MenuListProps={{
                    'aria-labelledby': 'basic-button',
                }}
            >
                <MenuItem onClick={handleClose}>Profile1</MenuItem>
                <MenuItem onClick={handleClose}>My account1</MenuItem>
                <MenuItem onClick={handleClose}>Logout</MenuItem>
            </Menu>
        </>
    )
}

export default Account
