import React, { Component } from "react";
import {Toolbar, Box, Typography, AppBar, Grid} from '@material-ui/core';

export default class ButtonAppBar extends Component {
    render(){
        return (
            <Grid container display="flex" style={{marginLeft:"3%"}}>
                <Grid xs={8} flexGrow={1}>
                    <Typography>
                        User Name
                    </Typography>
                </Grid>
                <Grid xs={1}>
                    <Typography>
                        About
                    </Typography>
                </Grid>
                <Grid xs={1}>
                    <Typography>
                        Resume
                    </Typography>
                </Grid>
                <Grid xs={1}>
                    <Typography>
                        Education
                    </Typography>
                </Grid>
                <Grid xs={1}>
                    <Typography>
                        Portofolio
                    </Typography>
                </Grid>
            </Grid>
        );
    }
}