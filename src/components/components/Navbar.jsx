import { AppBar, Avatar, Badge, Box, InputBase, Menu, MenuItem, styled, Toolbar, Typography } from '@mui/material'
import React, { useState } from 'react'
import MailIcon from '@mui/icons-material/Mail';
import { Notifications } from '@mui/icons-material';
import logo from '../../assets/MYPic.jpg';

const Navbar = () => {
    const [open,setOpen] = useState(false)

    const StyleToolbar = styled(Toolbar)({
        display: "flex",
        justifyContent: "space-between",
    });

    const Search = styled("div") ({
        backgroundColor: "white",
        padding: "0 10px",
        borderRadius: "8px",
        width: "40%"
    });

    const Icons = styled(Box)(({ theme }) => ({
        display: "none",
        gap: "20px",
        alignItems: "center",
        [theme.breakpoints.up("sm")]: {
            display: "flex",
        }
    }));

    const UserBox = styled(Box)(({ theme }) => ({
        display: "flex",
        gap: "10px",
        alignItems: "center",
        [theme.breakpoints.up("sm")]: {
            display: "none",
        }
    }));
    return (
        <AppBar position="sticky">
            <StyleToolbar>
                <Typography variant="h6" sx={{ display: { xs: "none", sm: "block" } }}>Lin Roza</Typography>
                <Avatar src={logo} sx={{ display: { xs: "none", sm: "block" } }} />
                <Search><InputBase placeholder='Search...'></InputBase></Search>
                <Icons>
                    <Badge badgeContent={4} color="error">
                        <MailIcon />
                    </Badge>
                    <Badge badgeContent={2} color="error">
                        <Notifications />
                    </Badge>
                    <Avatar  src={logo} sx={{ width: 30, height: 30 }}  onClick={e=>setOpen(true)} />

                </Icons>
                <UserBox onClick={(e)=>setOpen(true)}>
                    <Avatar src={logo} sx={{ width: 30, height: 30 }}/>
                    <Typography variant="span">Roza</Typography>
                </UserBox>
            </StyleToolbar>
            <Menu
                id="demo-positioned-menu"
                aria-labelledby="demo-positioned-button"
                open={open}
                onClose={e=>setOpen(false)}
                anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                }}
                transformOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                }}
            >
                <MenuItem>Profile</MenuItem>
                <MenuItem>My account</MenuItem>
                <MenuItem>Logout</MenuItem>
            </Menu>

        </AppBar>
    )
}

export default Navbar
