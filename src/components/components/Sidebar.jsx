import { AccountBox, Groups, Home, ModeNight, Pages, Person, Settings, Shop2 } from '@mui/icons-material'
import { Box, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Switch } from '@mui/material'
import React from 'react'


const Sidebar = ({mode,setMode}) => {

    return (
        <Box bgcolor={"Background.default"} color={"text.primary"} flex={1} sx={{ display: { xs: "none", sm: "block" } }}>
            <Box  position="fixed">
                <List sx={{ display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
                    <ListItem disablePadding >
                        <ListItemButton component="a" href="#home">
                            <ListItemIcon>
                                <Home />
                            </ListItemIcon>
                            <ListItemText primary="Homepage" />
                        </ListItemButton>
                    </ListItem>
                    <ListItem disablePadding >
                        <ListItemButton component="a" href="#home" >
                            <ListItemIcon>
                                <Pages />
                            </ListItemIcon>
                            <ListItemText primary="Pages" />
                        </ListItemButton>
                    </ListItem>
                    <ListItem disablePadding >
                        <ListItemButton component="a" href="#home">
                            <ListItemIcon>
                                <Groups />
                            </ListItemIcon>
                            <ListItemText primary="Groups" />
                        </ListItemButton>
                    </ListItem>
                    <ListItem disablePadding >
                        <ListItemButton component="a" href="#home">
                            <ListItemIcon>
                                <Shop2 />
                            </ListItemIcon>
                            <ListItemText primary="Marketplace" />
                        </ListItemButton>
                    </ListItem>
                    <ListItem disablePadding >
                        <ListItemButton component="a" href="#home">
                            <ListItemIcon>
                                <Person />
                            </ListItemIcon>
                            <ListItemText primary="Friends" />
                        </ListItemButton>
                    </ListItem>
                    <ListItem disablePadding >
                        <ListItemButton component="a" href="#home">
                            <ListItemIcon>
                                <Settings />
                            </ListItemIcon>
                            <ListItemText primary="Setting" />
                        </ListItemButton>
                    </ListItem>
                    <ListItem disablePadding >
                        <ListItemButton component="a" href="#home">
                            <ListItemIcon>
                                <AccountBox />
                            </ListItemIcon>
                            <ListItemText primary="Profile" />
                        </ListItemButton>
                    </ListItem>
                    <ListItem disablePadding >
                        <ListItemButton component="a" href="#home">
                            <ListItemIcon>
                                <ModeNight />

                            </ListItemIcon>
                            <Switch onChange={()=>setMode(mode === "light" ? "dark" : "light")} />
                        </ListItemButton>
                    </ListItem>

                </List>
                
            </Box>
        </Box>
    )
}

export default Sidebar
