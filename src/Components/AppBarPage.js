import React, { Component } from "react";
import { Box, Typography } from '@material-ui/core';
import { connect } from 'react-redux';
import { getUser } from '../_actions/users'

class ButtonAppBar extends Component {
    componentDidMount(){
        this.props.getUser();
      }
    render(){
        const { data } = this.props.user;
        return (
            <div style={{ width: '100%' }}>
                <Box display="flex" style={{marginLeft:"3%"}}>
                    <Box flexGrow={1}>
                        {data.map(res => {
                            return(
                                <Typography style={{fontSize:50, color:"#707070"}}>
                                    {res.name ? res.name.first : ''} {res.name ? res.name.last : ''}
                                </Typography>
                            )
                        })}
                    </Box>
                    <Box p={1}>
                        <Typography style={{fontSize:35, color:"#AFB4D1"}}>
                            About
                        </Typography>
                    </Box>
                    <Box p={1}>
                        <Typography style={{fontSize:35, color:"#192250"}}>
                            Resume
                        </Typography>
                    </Box>
                    <Box p={1}>
                        <Typography style={{fontSize:35, color:"#192250"}}>
                            Education
                        </Typography>
                    </Box>
                    <Box p={1}>
                        <Typography style={{fontSize:35, color:"#192250"}}>
                            Portofolio
                        </Typography>
                    </Box>
                </Box>
            </div>
        );
    }
}
const mapStateToProps = state => {
    return{
        //get state.user from store users
        user: state.getUser
    }
  }
  
const mapDispatchToProps = dispatch => {
    return{
        //get getUser from _actions users
        getUser: () => {
            dispatch(getUser())
        }
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(ButtonAppBar);