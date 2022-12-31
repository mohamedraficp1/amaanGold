import React from 'react';
import Box from '@mui/material/Box';
import { styled } from '@mui/material/styles';
import { Typography } from '@mui/material';
import { fontSize } from '@mui/system';


const Boxes = styled(Box)({
    background: '#FFFFFF',
    border: '1px solid #D9D9D9',
    borderRadius: '6px',
    marginTop: '25px',
    padding: '25px'
})

const GreyTitle = styled(Typography)({
    fontWeight: '400',
    height:'18px',
    fontSize: '15px',
    lineHeight: '23px',
    color: '#8D99AC'
})

const BlackTitle = styled(GreyTitle)({
    color: '#000',
    fontWeight:'600',
    fontSize:'23px'
})

const SmallTitle=styled(Typography)({
    color:'#868899',
    fontSize: '12px',
    fontWeight: '200',
    lineHeight: '15px',
    })



  





const DetailsBoxes = ({titleOne, priceOne,lastWeekStatus}) => {
    const dataValueColor=Number(lastWeekStatus>0)?"#418559" : "#FF0000"

  return (
    <Boxes>
        <Box display={'flex'} mb={'35px'}>
        <GreyTitle variant='h3'>{titleOne}</GreyTitle>
        
        </Box>
        <Box display={'flex'} justifyContent='space-between' mb={'30px'}>
        <BlackTitle>{priceOne}</BlackTitle>
        </Box>
        <Box display={'flex'} justifyContent='space-between'>
       <SmallTitle><span style={{color:dataValueColor}}>{lastWeekStatus}</span> Since last week</SmallTitle>
        </Box>
        
        

    </Boxes>
  )
}

export default DetailsBoxes