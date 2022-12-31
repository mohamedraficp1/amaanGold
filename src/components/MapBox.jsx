import React from 'react'
import Box from '@mui/material/Box';
import { styled } from '@mui/material/styles';
import GeographyChart from './GeographyChart';
import { Typography } from '@mui/material';




const MapBoxes = styled(Box)({
    radius:'12px',
 color: '#30394A',
background:'rgba(255, 255, 255, 0.7)',
// border: '1px solid #E9E9EE',
boxShadow:' 0px 1px 11px 4px rgba(141, 153, 172, 0.1)',
border:'1px',
backgroundColor: '#FFFFFF',
borderRadius:12,
border: '1px solid #D9D9D9',



      // backgroundColor:'#FFFFFF',

  })

// const Maps=styled(Box)({
//   radius:'10px',
//   border:'1px',
//  color: '#30394A',
//  border: '1px solid #D9D9D9'  
// })

const Title=styled(Typography)({ 
color: '#30394A',
  padding:'20px',
})



const MapBox = () => {

  return (
 <MapBoxes> 
  <Box sx={{
     radius:'12px',
       border:'1px',
    backgroundColor: 'transparent',
    height:'62px',
   borderRadius:12,
   }}>
<Title>Customers Map</Title> 
</Box>
<GeographyChart/> 

</MapBoxes>
  )
}

export default MapBox