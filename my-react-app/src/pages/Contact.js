
import React from 'react'
import Layout from '../components/Layout/Layout'
import { Box,Paper,Table,TableBody,TableCell,TableContainer,TableHead,TableRow,Typography } from '@mui/material'
import SupportAgentIcon from '@mui/icons-material/SupportAgent';
import MailIcon from '@mui/icons-material/Mail';import CallIcon from '@mui/icons-material/Call';

const Contact = () => {
  return (
    <Layout>
      <Box sx={{ my:10,ml:10,"& h4":{fontWeight:"bold",mb: 2}}}>
        <Typography variant="h4">
          Contact us
        </Typography>
        <p>Visual Studio Code is a lightweight but powerful source code editor which runs on your desktop and is available for Windows, macOS and Linux. It comes with built-in support for JavaScript, TypeScript and Node.js and has a rich ecosystem of extensions for other languages and runtimes (such as C++, C#, Java, Python, PHP, Go, .NET). Begin your journey with VS Code with these introductory videos.</p>
      </Box>
        <Box sx={{m:3, width:"600px",ml:10, "@media (max-width:600px)":{
          width:"300px"}}}>
          <TableContainer component={Paper}>
            <Table arial-lable="contact table">
               <TableHead>
                <TableRow>
                  <TableCell sx={{bgcolor:"#378ced",color:"white"}} align="center">Contact detalis</TableCell>
                </TableRow>
               </TableHead>
               <TableBody>
                <TableRow>
                  <TableCell>
                     <SupportAgentIcon sx={{color:'blue',pt:1}} /> 1800-00-000 (torollfree)
                  </TableCell>
                </TableRow>
                <TableRow>
                <TableCell>
                     <MailIcon sx={{color:'red',pt:1}} /> cyborgsapient.com
                  </TableCell>
                </TableRow>
                <TableRow>
                <TableCell>
                     <CallIcon sx={{color:'green',pt:1}} /> 8567645342
                  </TableCell>
                </TableRow>
               </TableBody>
            </Table>

          </TableContainer>
        </Box>  
    </Layout>
  )
}

export default Contact