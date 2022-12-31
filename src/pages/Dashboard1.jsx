import React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import DetailsBoxes from "../components/DetailsBoxes";
import SearchAppBar from "../components/SearchAppBar";
import DashboardTitles from "../components/DashboardTitle";
import MapBox from "../components/MapBox";
import ReminderBox from "../components/ReminderBox";
import PieChart from "../components/PieChart";
import ClientInvestmentViewBox from "../components/ClientInvestmentViewBox";
import Topbar from "../components/Topbar";
import date from 'date-and-time';

const Dashboard1 = () => {
  const now = new Date();
  return (
    <Box sx={{ height: "100vh",width:'100%', overflowY: "scroll"}}>
      <Box sx={{padding:'24px'}}>
       <Box id="datebar" sx={{marginTop: "25px"}}> 
          <Topbar/>
          {/* <h3 className='dateAndTime'>{date.format(now, 'DD MMM YYYY - ddd hh:mm A')}</h3> */}
         </Box> 
      {/* <SearchAppBar /> */}

      <DashboardTitles />
      
      <Grid container spacing={2}>
        <Grid item xs={3}>
          <DetailsBoxes
            titleOne={"My Wallet"}
            priceOne={"$865K"}
            lastWeekStatus={"+20.9"}
          />
        </Grid>

        <Grid item xs={3}>
          <DetailsBoxes
            titleOne={"Number of Traders"}
            priceOne={"1000"}
            lastWeekStatus={"-29 Trades"}
          />
        </Grid>
                  
        <Grid item xs={3}>
          <DetailsBoxes
            titleOne={"Spot Orders"}
            priceOne={"50"}
            lastWeekStatus={"-10%"}
          />
        </Grid>

        <Grid item xs={3}>
          <DetailsBoxes
            titleOne={"Highest Order Recieved"}
            priceOne={"80%"}
            lastWeekStatus={"-10%"}
          />
        </Grid>
      </Grid>
      <Grid container spacing={2} mt={4}>
        <Grid item xs={6}>
          <MapBox />
        </Grid>

        <Grid item xs={6}>
          <ReminderBox />
        </Grid>
      </Grid>

      <Grid container spacing={2} mt={4}>
        <Grid item xs={6}>
          <PieChart />
        </Grid>

        <Grid item xs={6}>
          <ClientInvestmentViewBox />
        </Grid>
      </Grid>
      </Box>
    </Box>
  );
};

export default Dashboard1;
