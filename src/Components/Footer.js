import React from 'react';
import { Grid, IconButton, Tooltip} from '@material-ui/core';
import '../CSS/Icons.css'

export default function Footer() {
    return (
        <div>
            <Grid container>
                <Grid xs={12}>
                    <Tooltip title="Linkedin">
                        <IconButton className="iconBtnLinkedin"/>
                    </Tooltip>
                    <Tooltip title="Facebook">
                        <IconButton className="iconBtnFacebook"/>
                    </Tooltip>
                    <Tooltip title="Twitter">
                        <IconButton className="iconBtnTwitter"/>
                    </Tooltip>
                    <Tooltip title="Google+">
                        <IconButton className="iconBtnGoogle"/>
                    </Tooltip>
                    <Tooltip title="Instagram">
                        <IconButton className="iconBtnInstagram"/>
                    </Tooltip>
                </Grid>
            </Grid>
        </div>
    );
}