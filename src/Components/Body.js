import React, { Component } from "react";
import { Box, Typography, Grid, Link, Tooltip, IconButton } from '@material-ui/core';
import { connect } from 'react-redux';
import { getUser } from '../_actions/users'
import Moment from 'react-moment';
import '../CSS/Icons.css'

class Body extends Component {
  componentDidMount(){
    this.props.getUser();
  }
  render(){
    
    const { data } = this.props.user;
      console.log(data, 'results')
        return (
          <div style={{ width: '100%' }}>
            <Box
              display="flex"
              p={1}
              m={1}
              height={582}
            >
              {/* <h1>
              {data.map(res => {
                return (
                <h1>{res.location ? 
                  res.location.coordinates ? 
                  res.location.coordinates.latitude
                : ''
              : ''}</h1>
                )
              })}
              </h1> */}
                <Box width={535} border={1} borderColor="#707070" style={{marginBottom:"5%"}} bgcolor="white">
                  {data.map(res => {
                    return(
                      <img src={res.picture ? res.picture.large : ''} width="100%" height="100%"/>
                    )
                  })}
                </Box>
                <Box width={535} border={1} borderColor="#707070" style={{ marginTop:"5%", color:"#707070"}} bgcolor="white">
                    <Grid container style={{width:"85%", margin:"auto", marginTop:"5%"}}>
                      {data.map(res => {
                        return(
                          <>
                            <Grid xs={12} style={{marginBottom:"2%"}}>
                              {/* Name */}
                              <Typography style={{fontSize:50}}>
                                {res.name ? res.name.first : ''} {res.name ? res.name.last : ''}
                              </Typography>
                            </Grid>
                            {/* Date of Birth */}
                            <Grid xs={3}><Typography>Date of Birth</Typography></Grid>
                            <Grid xs={1}><Typography>:</Typography></Grid>
                            <Grid xs={8}>
                              <Typography>
                                <Moment format="D MMM YYYY" withTitle>
                                  {res.dob ? res.dob.date: ''}
                                </Moment>
                              </Typography>
                            </Grid>
                            {/* Gender */}
                            <Grid xs={3}><Typography>Gender</Typography></Grid>
                            <Grid xs={1}><Typography>:</Typography></Grid>
                            <Grid xs={8}><Typography>{res.gender}</Typography></Grid>
                            {/* Phone */}
                            <Grid xs={3}><Typography>Phone</Typography></Grid>
                            <Grid xs={1}><Typography>:</Typography></Grid>
                            <Grid xs={8}><Typography>{res.phone}</Typography></Grid>
                            {/* Email */}
                            <Grid xs={3}><Typography>Email</Typography></Grid>
                            <Grid xs={1}><Typography>:</Typography></Grid>
                            <Grid xs={8}><Typography>{res.email}</Typography></Grid>
                            {/* Address */}
                            <Grid xs={3}><Typography>Address</Typography></Grid>
                            <Grid xs={1}><Typography>:</Typography></Grid>
                            <Grid xs={8}>
                              <Typography>
                                street {res.location ? res.location.street ? res.location.street.name : '' : ''} {res.location ? res.location.street ? res.location.street.number : '' : ''}, city {res.location ? res.location.city : ''}, state {res.location ? res.location.state : ''}, country {res.location ? res.location.country : ''}
                              </Typography>
                            </Grid>
                            {/* Location */}
                            <Grid xs={3}><Typography>Location</Typography></Grid>
                            <Grid xs={1}><Typography>:</Typography></Grid>
                            <Grid xs={8}>
                              <Link href={`https://maps.google.com/maps?q=${res.location ? res.location.coordinates ? res.location.coordinates.latitude : '' : ''},${res.location ? res.location.coordinates ? res.location.coordinates.longitude : '' : ''}&hl=es&z=14&amp;output=embed`}>
                              <Typography>
                                <Tooltip title="See full map">
                                  <IconButton className="iconBtnPin"/>
                                </Tooltip>
                                latitude: {res.location ? res.location.coordinates ? res.location.coordinates.latitude : '' : ''}, longitude: {res.location ? res.location.coordinates ? res.location.coordinates.longitude : '' : ''}
                              </Typography>
                              </Link>
                              <iframe 
                                width="300" 
                                height="170" 
                                frameborder="0" 
                                scrolling="no" 
                                marginheight="0" 
                                marginwidth="0" 
                                src={`https://maps.google.com/maps?q=${res.location ? res.location.coordinates ? res.location.coordinates.latitude : '' : ''},${res.location ? res.location.coordinates ? res.location.coordinates.longitude : '' : ''}&hl=es&z=14&amp;output=embed`}
                              />
                            </Grid>
                          </>
                        )
                      })}
                    </Grid>
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
export default connect(mapStateToProps,mapDispatchToProps)(Body);