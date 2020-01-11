import React, { Component } from "react";
import { Box, Grid, Typography } from '@material-ui/core';
import { connect } from 'react-redux';
import { getUser } from '../_actions/users'
import AppBarPage from '../Components/AppBarPage'
import Body from '../Components/Body'
import Footer from '../Components/Footer'
import '../CSS/About.css'

class Home extends Component {
    componentDidMount(){
        this.props.getUser();
    }
    render(){
        const { data, isLoading, error} = this.props.user;
        if (data) {
            return (
                <div>
                    <Box 
                        display="flex" 
                        bgcolor="#FFFFFF" 
                        height={249} 
                        justifyContent="center" 
                        alignItems="center"
                        borderTop={18}
                        borderColor="#932A8A"
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
        if (isLoading) {
			return(
                <div style={{ width: '100%' }}>
                    <Box height="100%" display="flex" justifyContent="center" alignItems="center">
                        <Typography>Loading...</Typography>
                    </Box> 
                </div>
            );
		}
		if (error) {
			return(
                <div style={{ width: '100%' }}>
                    <Box height="100%" display="flex" justifyContent="center" alignItems="center">
                        <Typography>Error...</Typography>
                    </Box> 
                </div>
            );
        }
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
export default connect(mapStateToProps,mapDispatchToProps)(Home);