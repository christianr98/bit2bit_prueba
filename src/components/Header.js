import { IconButton, InputBase, Paper } from '@material-ui/core'
import React, { useState } from 'react'
import styled from 'styled-components'

const StyledHeader = styled.div`
    position: fixed;
    top: 0;
    width: 100%;
    height: 3rem;
    background-color: beige;
    display: flex;
    align-items: center;
    //justify-content: space-between;
`
const Logo = styled.div`
    margin-left: 2rem;
    :hover {
        cursor: pointer;
    }
`
const SearchField = styled(Paper)`
    && {
        border-radius: 5px;
        display: flex;
    }
    padding-left: 1rem;
    margin-left: 2rem;
    margin-right: 1rem;
    width: 50%;
    .MuiInputBase-root {
        width: 100%;
    }
`
const Auth = styled.div`
    justify-self: flex-end;
    margin-right: 2rem;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: burlywood;
    margin-left: auto;
`

const Header = () => {
    const [search, setSearch] = useState("")
    return (
        <StyledHeader>
            <Logo>Bit2Bit Overflow</Logo>
            <SearchField component="form" onSubmit={{}}>
                <InputBase
                    placeholder="Buscar"
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                />
                <IconButton type="submit" 
                aria-label="search">
                    
                </IconButton>
            </SearchField>
            <Auth>
                <button>Log In</button>
                <button>Register</button>
            </Auth>
        </StyledHeader>
    )
}

export default Header
