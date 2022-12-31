import React from 'react'
import Box from '@mui/material/Box';
import { styled } from '@mui/material/styles';
import { Typography } from '@mui/material';
import ApexChart from './ApexChart';



const PieChartBox = styled(Box)({
    radius:'12px',
    border:'1px',
   backgroundColor: '#FFFFFF',
    border: '1px solid #D9D9D9',
   marginBottom:'24px',
   boxShadow: '0px 1px 11px 4px rgba(141, 153, 172, 0.1)',
   borderRadius:'12px',
   paddingLeft:150
    })

    const Title=styled(Typography)({ 
        radius:'12px',
       color: '#30394A',
       display:'flex',
       padding:'20px',
    
       })




const PieChart = () => {

    return (
  <PieChartBox>
    <Box sx= {{radius:'12px',
    display:'flex',
     backgroundColor: 'transparent',
      // border: '1px solid #D9D9D9',
      height:'62px'}}  >
  <Title>Customers Map</Title>
  </Box>
<ApexChart/>
</PieChartBox>
    )
  }
  
  export default PieChart