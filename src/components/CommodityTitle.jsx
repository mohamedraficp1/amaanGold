import { Box, styled, Typography } from '@mui/material'
import React from 'react'


const CommodityTitile = styled(Typography)({
    fontWeight: '600',
    fontSize: '18px',
    lineHeight: '23px',
    color: '#30394A',
    marginTop: '7px',
    marginBottom: '25px'
})
function CommodityTitle({color, title}) {
    const ColoredBar = styled(Box)({
        width: '18px',
        height: "3px",
        background: color
    })
  return (
    <Box display={'flex'} justifyContent={'space-between'}>
        <Box marginTop={'30px'}>
            <ColoredBar></ColoredBar>
            <CommodityTitile>{title}</CommodityTitile>
        </Box>
        {/* <TimeSelectDropdown /> */}
    </Box>
    
  )
}

export default CommodityTitle