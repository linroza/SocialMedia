import { Avatar, Box, Fab, IconButton, Modal, Stack, styled, TextField, Tooltip, Typography } from '@mui/material'
import React, { useState } from 'react'
import AddIcon from '@mui/icons-material/Add';
import image from '../../assets/MyPic.jpg'

export const Add = () => {
    const StyleModal = styled(Modal)({
        display: "flex",
        alignItems: "center",
        justifyContent: "center"
    });
    const UserBox = styled(Box)({
        display: "flex",
        alignItems: "center",

    });
    const [open, setopen] = useState(false)
    return (
        <div>
            <Tooltip onClick={e => setopen(true)} title="Delete" sx={{ position: "fixed", bottom: 20, left: { xs: "calc(50% - 25px)", md: 30 } }}>
                <IconButton component="span" aria-label="Delete">
                    <Fab color="primary" aria-label="add">
                        <AddIcon />
                    </Fab>
                </IconButton>
            </Tooltip>
            <StyleModal
                open={open}
                onClose={(e) => setopen(false)}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box width={400} height={280} bgcolor={"#b0b0b0"} color={"text.primary"}  p={3} borderRadius={5} >
                    <Typography variant="h6" color="gray" textAlign="center"  >Create Post</Typography>
                    <UserBox>
                        <Avatar
                            src={image}
                            sx={{ width: 30, height: 30 }} />
                        <Typography variant="span" ml={1} fontWeight="bold">Roza</Typography>
                    </UserBox>
                    <TextField
                        sx={{ width: "100%", color: "gray", mt: 1 }}
                        id="standard-multiline-static"
                        label="What's on your mind, Roza?"
                        multiline
                        rows={3}
                        defaultValue=""
                        variant="standard"
                    />
                    <Stack direction="row" gap={1}>

                    </Stack>
                </Box>
            </StyleModal>

        </div>
    )
}
