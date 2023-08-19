import React from 'react'
import { Box, Typography } from '@mui/material'
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import GitHubIcon from '@mui/icons-material/GitHub';
import YouTubeIcon from '@mui/icons-material/YouTube';

const Footer = () => {
  return (
    <>
    <Box sx={{textAlign:'center' , bgcolor:'#378ced' , color:'black' , p: 1 }}>
        <Box sx={{ margin: 1, "& svg":{fontSize:"60px", cursor:"pointer", mr: 1}, "& svg:hover":{color:'lightblue',transform:'translateX(5px)',transition:'all 400ms'}
    }}>
              <InstagramIcon/>
              <TwitterIcon/>
              <GitHubIcon/>
              <YouTubeIcon/>
        </Box>
        <Typography varient="h5" sx={{"@media (max-width:600px)": { fontSize:'1rem'}}}>All Right Reserved &copy; Cyborg-Sapient</Typography>
    </Box>
    </>
  )
}

export default Footer