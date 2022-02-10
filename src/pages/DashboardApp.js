// material
import { Box, Grid, Container, Typography } from '@mui/material';
// import { style } from '@mui/system';
// import DashboardNavbar from 'src/layouts/dashboard/DashboardNavbar';
// components
import Page from '../components/Page';
import {
  // AppTasks,
  // AppNewUsers,
  // AppBugReports,
  // AppItemOrders,
  AppWeeklySales,
  AppNewsUpdate,
  AppOrderTimeline,
  // AppCurrentVisits,
  // AppWebsiteVisits,
  // AppTrafficBySite,
  // AppCurrentSubject,
  // AppConversionRates,
  // AppTasks
} from '../components/_dashboard/app';
// import whitepng from './white.png'

// ----------------------------------------------------------------------

export default function DashboardApp() {
  return (
    <>
      <div
        style={{
          backgroundColor: 'white',
          // backgroundImage: `{${whitepng}}`,
          paddingTop: '0',
          paddingLeft: '6px',
          paddingRight: '6px',
          marginTop: '-50px'
        }}
      >
        <Page title="Dashboard | Minimal-UI">
          <Container maxWidth="xl">
            <Box sx={{ pb: 5 }}>
              <Typography variant="h2">Technology Adventure Society<span className="blockquote-footer"> Welcomes You...</span></Typography>
              {/* <img src={whitepng} alt="hey" className='house_image' /> */}
            </Box>
            {/* <DashboardNavbar/> */}
            <Grid container spacing={3}>
              <Grid item xs={12} sm={12} md={12}>
                <AppWeeklySales />
              </Grid>
              <Grid item xs={12} sm={6} md={3}>
                {/* <AppNewUsers /> */}
              </Grid>
              <Grid item xs={12} sm={6} md={3}>
                {/* <AppItemOrders /> */}
              </Grid>
              <Grid item xs={12} sm={6} md={3}>
                {/* <AppBugReports /> */}
              </Grid>

              <Grid item xs={12} md={6} lg={8}>
                <AppNewsUpdate />
              </Grid>

              <Grid item xs={12} md={6} lg={4}>
                <AppOrderTimeline />
              </Grid>

              <Grid item xs={12} md={6} lg={4}>
                {/* <AppCurrentVisits /> */}
              </Grid>

              <Grid item xs={12} md={6} lg={8}>
                {/* <AppWebsiteVisits /> */}
              </Grid>

              <Grid item xs={12} md={6} lg={8}>
                {/* <AppConversionRates /> */}
              </Grid>

              <Grid item xs={12} md={6} lg={4}>
                {/* <AppCurrentSubject /> */}
              </Grid>

              <Grid item xs={12} md={9} lg={12}>
                {/* <AppTrafficBySite /> */}
              </Grid>

              <Grid item xs={12} md={6} lg={4}>
                {/* <AppTasks /> */}
              </Grid>
            </Grid>
          </Container>
        </Page>
      </div>
    </>
  );
}
