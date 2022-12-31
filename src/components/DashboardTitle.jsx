import React from 'react'
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { styled } from '@mui/material/styles';
import TimeSelectDropdown from './TimeSelectDropdown';
import date from 'date-and-time';

const DashboardTitles = styled(Typography)({
color:'#30394A',
fontWeight:'600',
fontSize:'20px',
lineHeight:'23px',
width:'97px',
height:'23px',
left:'392px',
top:'37px'
})

function DashboardTitle(){
  const now = new Date();

  return (
    // <Box display={'flex'} justifyContent={'space-between'}>
    <Box sx={{marginTop:'20px',display:'flex',justifyContent:'space-between',alignItems:'center'}}>
        
        <DashboardTitles>Dashboard</DashboardTitles>
        <h3 className='dateAndTime'>{date.format(now, 'DD MMM YYYY - ddd hh:mm A')}</h3>
    </Box>
    
// </Box>
  )
}


export default DashboardTitle