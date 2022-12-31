import { Box,  styled, Typography } from '@mui/material'
import { Stack } from '@mui/system'
import React from 'react'
import logo from '../assets/logo.png'
import dashboard from '../assets/dashboard.png'
import gallery from '../assets/gallery.png'
import spotOrder from '../assets/spotOrder.png'
import messages from '../assets/messages.png'
import news from '../assets/news.png'
import bookingDesk from '../assets/booking-desk.png'
import goldTrend from '../assets/gold-trend.png'
import locations from '../assets/locations.png'
import invoice from '../assets/invoice.png'
import bankDeatails from '../assets/bankDeatails.png'
import { NavLink, useParams } from 'react-router-dom'
import customers from '../assets/customers.png'
import { useState } from 'react'

const SidebarBox = styled(Box)({
    backgroundColor: "#D1A235",
    borderRadius: '31px',
    padding: '30px',
    paddingLeft: '30px',
    height: '85vh',
    margin: '30px',
    width: '230px'
})

const IconContainer = styled(Box)({
    display:'flex',
    justifyContent: 'start',
    alignItems:'center',
    marginBottom: '35px'
})

const DashboarTitle =styled(Typography)({
    color: '#fff',
    fontSize: '16px',
    fontWeight: '400',
    marginLeft: '20px',
})

function Sidebar() {
    const [selected, setSelected]=useState("home")
    const {name}= useParams()
    console.log(name)
  return (
    <SidebarBox className='sidebar'>
        <Stack direction='row' justifyContent={'center'} marginBottom='50px'>
            <img src={logo} alt='logo'/>
        </Stack>
        <Box paddingLeft={'10px'}>
        <NavLink to={'/dashboard'}  style={{textDecoration:"none"}}><IconContainer  onClick={()=>setSelected("Dashboard")} 
              className= {selected=="Dashboard" ? "activeIem" : ""}
             >
                <img src={dashboard} alt='Dashboard-icon' />
                <DashboarTitle >Dashboard</DashboarTitle>
            </IconContainer></NavLink >
            <NavLink to={'/'}  style={{textDecoration:"none"}}><IconContainer onClick={()=>setSelected("Spot Order")} 
            className= {selected=="Spot Order" ? "activeIem" : ""}
            >
                <img src={spotOrder} alt='spotOrder-icon' width="20px" height="12px" />
                <DashboarTitle variant='h6' >Spot Order</DashboarTitle>
            </IconContainer></NavLink>
            <IconContainer>
                <img src={bookingDesk} alt='Dashboard-icon' />
                <DashboarTitle variant='h6' >Booking Desk</DashboarTitle>
            </IconContainer>
            <IconContainer>
                <img src={messages} alt='messges' />
                <DashboarTitle variant='h6' >Messages</DashboarTitle>
            </IconContainer>
            {/* <IconContainer>
                <img src={news} alt='News-icon' />
                <DashboarTitle variant='h6' >News</DashboarTitle>
            </IconContainer>
            <IconContainer>
                <img src={gallery} alt='messges' />
                <DashboarTitle variant='h6' >Media</DashboarTitle>
            </IconContainer> */}
            {/* <IconContainer>
                <img src={locations} alt='News-icon' />
                <DashboarTitle variant='h6' >Location</DashboarTitle>
            </IconContainer> */}
            <IconContainer>
                <img src={invoice} alt='messges' />
                <DashboarTitle variant='h6' >Invoices</DashboarTitle>
            </IconContainer>
            <IconContainer>
                <img src={customers} alt='News-icon' />
                <DashboarTitle variant='h6' >Customers</DashboarTitle>
            </IconContainer>
            <IconContainer>
                <img src={goldTrend} alt='Dashboard-icon' />
                <DashboarTitle variant='h6'>Gold Trend</DashboarTitle>
            </IconContainer>
            <IconContainer>
                <img src={bankDeatails} alt='Dashboard-icon' />
                <DashboarTitle variant='h6'>Bank Details</DashboarTitle>
            </IconContainer>
    
            
        </Box>
        
        <Box>

        </Box>
    </SidebarBox>
  )
}

export default Sidebar