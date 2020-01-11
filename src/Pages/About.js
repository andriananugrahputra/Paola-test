import React, { Component } from "react";
import { Box, Grid, Typography } from '@material-ui/core';
import AppBarPage from '../Components/AppBarPage'
import Body from '../Components/Body'
import Footer from '../Components/Footer'
import '../CSS/About.css'

export default class Home extends Component {
    render(){
        return (
            <div>
                <Box 
                    display="flex" 
                    bgcolor="#FFFFFF" 
                    height={249} 
                    justifyContent="center" 
                    alignItems="center"
                    borderBottom={1}
                    borderColor="#707070"
                    >
                    <AppBarPage/>
                </Box>
                <Grid container alignItems="center" className="backgroundPageAbout">
                    <Box style={{marginLeft:"8%"}}>
                        <Body/>
                    </Box>
                </Grid>
                <Box 
                    display="flex"
                    borderTop={1} 
                    borderColor="#707070" 
                    height={98}
                    bgcolor="#192250"
                    justifyContent="center" 
                    alignItems="center"
                >
                    <Footer/>
                </Box>
            </div>
        );
    }
}