
import React from 'react'
import { Grid } from "@mui/material";
import SideNavbar from './SideNavbar';

export default function Dashboard() {
  return (
    <div className=''>
    <Grid container>
    <Grid item xs={12} sm={12} md={12} lg={3} m-q-b-d-n>
    <SideNavbar/>
    </Grid>
    <Grid item xs={12} sm={12} md={12} lg={9}>
    <div className='row'>
    <div className='col-lg-4 col-md-6 col-sm-12 col-12'>
    <div className='dashboard__box'>
    
    </div>
    </div>
    </div>
    </Grid>
    </Grid>
    </div>
  )
}
