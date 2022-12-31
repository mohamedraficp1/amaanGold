import { styled, TextField, Typography } from '@mui/material'
import { Box } from '@mui/system'
import React, { useEffect } from 'react'
import { useState } from 'react';
import SpreadEditForm from './SpreadEditForm';

const OuterBox = styled(Box)({
    background: '#FFFFFF',
    border: '1px solid #D9D9D9',
    borderRadius: '6px',
    marginTop: '25px',
    padding: '25px'
})
const GreyTitle = styled(Typography)({
    fontWeight: '400',
    fontSize: '20px',
    lineHeight: '23px',
    color: '#8D99AC'
})

const BlackTitle = styled(GreyTitle)({
    color: '#000',
    fontWeight:'600'
})

function Bid({metal, titleOne, priceOne, tItleTwo, priceTwo, titleThree, priceThree,setEditSpread}) {
    const [margin, setMargin]=useState(priceTwo)
    const [price, setPrice]=useState(priceThree)

    useEffect(() => {
        setPrice((Number(priceOne)+Number(priceTwo)))
        // eslint-disable-next-line
    }, [priceOne])

    
  return (
    <OuterBox>
        <Box display={'flex'} justifyContent='end'>
            <SpreadEditForm metal={metal} spread={margin} type={titleOne} setMargin={setMargin} setEditSpread={setEditSpread} />
        </Box>
        <Box display={'flex'} justifyContent='space-between' mt={'20px'}>
            <GreyTitle variant='h3'>{titleOne}</GreyTitle>
            <BlackTitle >${Number(priceOne).toLocaleString('en-US',{
                minimumFractionDigits: 2,
                maximumFractionDigits: 2
              })}</BlackTitle>
        </Box>
        <Box display={'flex'} justifyContent='space-between' mt={'20px'}>
            <GreyTitle variant='h3'>{tItleTwo}</GreyTitle>
           <BlackTitle >${Number(priceTwo).toLocaleString('en-US',{
                minimumFractionDigits: 2,
                maximumFractionDigits: 2
              })}</BlackTitle>
        </Box>
        <Box display={'flex'} justifyContent='space-between' mt={'20px'}>
            <BlackTitle variant='h3'>{titleThree}</BlackTitle>
            <BlackTitle >${Number(price).toLocaleString('en-US',{
            minimumFractionDigits: 2,
            maximumFractionDigits: 2
          })}</BlackTitle>
        </Box>
    </OuterBox>
  )
}

export default Bid