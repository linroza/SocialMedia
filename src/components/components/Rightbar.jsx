import { Avatar, AvatarGroup, Box, Divider, ImageList, ImageListItem, List, ListItem, ListItemAvatar, ListItemText, Typography } from '@mui/material'
import React from 'react'
import image from "../../../public/assets/MyPic.jpg"


function srcset(image, size, rows = 1, cols = 1) {
  return {
    src: `${image}?w=${size * cols}&h=${size * rows}&fit=crop&auto=format`,
    srcSet: `${image}?w=${size * cols}&h=${size * rows
      }&fit=crop&auto=format&dpr=2 2x`,
  };
}

const Rightbar = () => {
  return (
    <Box flex={2} p={2} sx={{ display: { xs: "none", sm: "block" } }}>
      <Box position='fixed' >
        <Typography variant="h6" fontWeight={100} width={200}>Online Friends</Typography>
        <AvatarGroup max={2} style={{ float: 'left' }}>
          <Avatar alt="Remy Sharp" src={image} />
          <Avatar alt="Remy Sharp" src={image} />
          <Avatar alt="Remy Sharp" src={image} />
          <Avatar alt="Remy Sharp" src={image} />
          <Avatar alt="Remy Sharp" src={image} />

        </AvatarGroup>

        <Typography variant="h6" fontWeight={100} style={{ textAlign: 'left', marginTop: '50px' }} >Lastest Photos</Typography>

        <ImageList
          sx={{ width: 500, height: 350 }}
          variant="quilted"
          cols={5}
          gap={5}
          rowHeight={100}
        >
          {itemData.map((item) => (
            <ImageListItem key={item.img} cols={item.cols || 1} rows={item.rows || 1}>
              <img
                {...srcset(item.img, 121, item.rows, item.cols)}
                alt={item.title}
                loading="lazy"
              />
            </ImageListItem>
          ))}
        </ImageList>
        <Box flex={2} p={2} sx={{ display: { sm: "none", md: "block" } }}>
          <Typography>Last Conversation</Typography>
          <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
            <ListItem alignItems="flex-start">
              <ListItemAvatar>
                <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
              </ListItemAvatar>
              <ListItemText
                primary="Brunch this weekend?"
                secondary={
                  <React.Fragment>
                    <Typography
                      component="span"
                      variant="body2"
                      sx={{ color: 'text.primary', display: 'inline' }}
                    >
                      Ali Connors
                    </Typography>
                    {" — I'll be in your neighborhood doing errands this…"}
                  </React.Fragment>
                }
              />
            </ListItem>
            <Divider variant="inset" component="li" />
            <ListItem alignItems="flex-start">
              <ListItemAvatar>
                <Avatar alt="Travis Howard" src="/static/images/avatar/2.jpg" />
              </ListItemAvatar>
              <ListItemText
                primary="Summer BBQ"
                secondary={
                  <React.Fragment>
                    <Typography
                      component="span"
                      variant="body2"
                      sx={{ color: 'text.primary', display: 'inline' }}
                    >
                      to Scott, Alex, Jennifer
                    </Typography>
                    {" — Wish I could come, but I'm out of town this…"}
                  </React.Fragment>
                }
              />
            </ListItem>
            <Divider variant="inset" component="li" />
            <ListItem alignItems="flex-start">
              <ListItemAvatar>
                <Avatar alt="Cindy Baker" src="/static/images/avatar/3.jpg" />
              </ListItemAvatar>
              <ListItemText
                primary="Oui Oui"
                secondary={
                  <React.Fragment>
                    <Typography
                      component="span"
                      variant="body2"
                      sx={{ color: 'text.primary', display: 'inline' }}
                    >
                      Sandra Adams
                    </Typography>
                    {' — Do you have Paris recommendations? Have you ever…'}
                  </React.Fragment>
                }
              />
            </ListItem>
          </List>
        </Box>
      </Box>
    </Box>
  )
}

const itemData = [
  {
    img: 'https://imageupscaler.com/wp-content/uploads/2024/07/deblured-cutty-fox.jpg',
    title: 'Breakfast',
    rows: 2,
    cols: 2,
  },
  {
    img: 'https://img-cdn.pixlr.com/image-generator/history/65bb506dcb310754719cf81f/ede935de-1138-4f66-8ed7-44bd16efc709/medium.webp',
    title: 'Burger',
  },

  {
    img: 'https://www.searchenginejournal.com/wp-content/uploads/2022/06/image-search-1600-x-840-px-62c6dc4ff1eee-sej.png',
    title: 'Hats',
    cols: 2,
  },
  {
    img: 'https://huggingface.co/datasets/huggingfacejs/tasks/resolve/main/image-segmentation/image-segmentation-input.jpeg',
    title: 'Honey',
    author: '@arwinneil',
    rows: 2,
    cols: 2,
  },

  {
    img: 'https://t3.ftcdn.net/jpg/09/66/25/08/360_F_966250839_jBhNnhyGs4wbtxXeBEsgFGu4dxhCrdjn.jpg',
    title: 'Bike',
    cols: 2,
  },

];

export default Rightbar
