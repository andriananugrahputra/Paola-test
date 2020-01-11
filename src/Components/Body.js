import React, { Component } from "react";
import {Box, Typography, Grid} from '@material-ui/core';

export default class Body extends Component {
    render(){

        return (
          <div style={{ width: '100%' }}>
            <Box
              display="flex"
              p={1}
              m={1}
              height={582}
            >
                <Box width={535} style={{marginBottom:"5%"}}bgcolor="grey.300">
                    <img src="https://randomuser.me/api/portraits/men/75.jpg" width="100%" height="100%"/>
                </Box>
                <Box width={535} style={{ marginTop:"5%"}}bgcolor="grey.300">
                    <Grid container style={{width:"80%", margin:"auto", marginTop:"5%"}}>
                        <Grid xs={12} style={{marginBottom:"2%"}}><Typography>User Name</Typography></Grid>
                        {/* Date of Birth */}
                        <Grid xs={3}><Typography>Date of Birth</Typography></Grid>
                        <Grid xs={1}><Typography>:</Typography></Grid>
                        <Grid xs={8}><Typography>1955-08-24T21:14:55.663Z</Typography></Grid>
                        {/* Gender */}
                        <Grid xs={3}><Typography>Gender</Typography></Grid>
                        <Grid xs={1}><Typography>:</Typography></Grid>
                        <Grid xs={8}><Typography>1955-08-24T21:14:55.663Z</Typography></Grid>
                        {/* Phone */}
                        <Grid xs={3}><Typography>Phone</Typography></Grid>
                        <Grid xs={1}><Typography>:</Typography></Grid>
                        <Grid xs={8}><Typography>1955-08-24T21:14:55.663Z</Typography></Grid>
                        {/* Email */}
                        <Grid xs={3}><Typography>Email</Typography></Grid>
                        <Grid xs={1}><Typography>:</Typography></Grid>
                        <Grid xs={8}><Typography>1955-08-24T21:14:55.663Z</Typography></Grid>
                        {/* Address */}
                        <Grid xs={3}><Typography>Address</Typography></Grid>
                        <Grid xs={1}><Typography>:</Typography></Grid>
                        <Grid xs={8}><Typography>1955-08-24T21:14:55.663Z 1955-08-24T21:14:55.663Z 1955-08-24T21:14:55.663Z 1955-08-24T21:14:55.663Z 1955-08-24T21:14:55.663Z 1955-08-24T21:14:55.663Z 1955-08-24T21:14:55.663Z 1955-08-24T21:14:55.663Z 1955-08-24T21:14:55.663Z 1955-08-24T21:14:55.663Z </Typography></Grid>
                        {/* Location */}
                        <Grid xs={3}><Typography>Location</Typography></Grid>
                        <Grid xs={1}><Typography>:</Typography></Grid>
                        <Grid xs={8}><Typography>1955-08-24T21:14:55.663Z</Typography></Grid>
                    </Grid>
                </Box>
            </Box>
          </div>
        );
    }
}