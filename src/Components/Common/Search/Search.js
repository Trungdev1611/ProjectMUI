import { styled } from '@mui/system';
import React from 'react'
import { Search as SearchIcon } from '@mui/icons-material';
import { InputBase } from '@mui/material';

const SearchCommon = () => {
    const Search = styled('div')(({ theme }) => ({
        position: 'relative',
        borderRadius: theme.shape.borderRadius,
        transition: 0.7,
        '&:hover': {
            backgroundColor: '#eee'
        },
        marginLeft: 0,
        // width: '300px',
        display: 'inline-block',
        fontWeight: '200',
        color: 'rgb(66, 66, 66)'

    }));

    const SearchIconWrapper = styled('div')(({ theme }) => ({
        padding: theme.spacing(0, 2),
        height: '100%',
        position: 'absolute',
        pointerEvents: 'none',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',

    }));

    const StyledInputBase = styled(InputBase)(({ theme }) => ({
        color: 'inherit',
        '& .MuiInputBase-input': {
            padding: theme.spacing(1, 1, 1, 0),
            // vertical padding + font size from searchIcon
            paddingLeft: `calc(1em + ${theme.spacing(4)})`,
            width: '100%',

        },
    }));
    return (
        <Search>
            <SearchIconWrapper>
                <SearchIcon sx={{ color: '#aaa' }} />
            </SearchIconWrapper>
            <StyledInputBase
                placeholder="Search…"
                inputProps={{ 'aria-label': 'search' }}
            />
        </Search>
    )
}

export default SearchCommon
