
import React from 'react'
import Layout from '../components/Layout/Layout'
import { Box,Typography } from '@mui/material'

const About = () => {
  return (
    <Layout>
        <Box sx={{ my:10,
         textAlign:"center",
         "& h4":{fontWeight:'bold'}, 
         my:2, 
         fontSize:"2rem",
      "& p":{textAlign:'justify', fontSize:'20px'},
      "& p1":{textAlign:'justify', fontSize:'20px'},
      "@media (max-width:600px)":{
        mt:0,
        "& h4":{
          fontSize:"1.5rem",
        }
      }
      }}>
        <Typography variant="h4"> Welcome</Typography>
        <p>
        Visual Studio Code is a lightweight but powerful source code editor which runs on your desktop and is available for Windows, macOS and Linux. It comes with built-in support for JavaScript, TypeScript and Node.js and has a rich ecosystem of extensions for other languages and runtimes (such as C++, C#, Java, Python, PHP, Go, .NET). Begin your journey with VS Code with these introductory videos.
         <br />Visual Studio Code is a lightweight but powerful source code editor which runs on your desktop and is available for Windows, macOS and Linux. It comes with built-in support for JavaScript, TypeScript and Node.js and has a rich ecosystem of extensions for other languages and runtimes (such as C++, C#, Java, Python, PHP, Go, .NET). Begin your journey with VS Code with these introductory videos.
       </p>
       <p1>
        Visual Studio Code is a lightweight but powerful source code editor which runs on your desktop and is available for Windows, macOS and Linux. It comes with built-in support for JavaScript, TypeScript and Node.js and has a rich ecosystem of extensions for other languages and runtimes (such as C++, C#, Java, Python, PHP, Go, .NET). Begin your journey with VS Code with these introductory videos.
         Visual Studio Code <br />Visual Studio Code is a lightweight but powerful source code editor which runs on your desktop and is available for Windows, macOS and Linux. It comes with built-in support for JavaScript, TypeScript and Node.js and has a rich ecosystem of extensions for other languages and runtimes (such as C++, C#, Java, Python, PHP, Go, .NET). Begin your journey with VS Code with these introductory videos.
       </p1>
</Box>
    </Layout>
  )
}

export default About