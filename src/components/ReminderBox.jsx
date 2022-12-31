import React from 'react';
import Box from '@mui/material/Box';
import { styled } from '@mui/material/styles';
import { Typography } from '@mui/material';
import {Button} from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import {Stack} from '@mui/material';
import { useNavigate } from 'react-router-dom';
import ReminderSlot from './ReminderSlot';

const Title=styled(Typography)({
    fontWeight: '500',
    fontSize: '16px',
    lineHeight: '19px',
    color: '#30394A'    
})

const ReminderDateHeader = styled(Box)({
   radius:'12px',
 backgroundColor: 'transparent',
height:'62px'
})

 const StyledButton=styled(Button)({
    color:'#30394A',
    fontWeight:'500',
    fontSize:'16px',
    lineHeight:'16.75px',
    textTransform:'capitalize',
    marginTop:'-5px'
   })




const ReminderBox = () => {
  const navigate=useNavigate()
  return (
    <Box sx={{height:'426px',
      radius:'12px',
      backgroundColor:'#FFFFFF',
        border:'1px solid #D9D9D9',
      boxShadow:'0px 1px 11px 4px rgba(141, 153, 172, 0.1)',
      borderRadius:'12px',
      overflowY:'scroll'
      }}>
    
  <ReminderDateHeader >
<Box sx={{display:'flex',justifyContent:'space-between',alignItems:'center',p:3}}>
<Title>Reminders</Title>
 <StyledButton onClick={()=>navigate('/dashboard/calendar')} startIcon={<AddIcon size='small'  />}>Add</StyledButton>
 </Box>
<Box>
<ReminderSlot/>
</Box>
 </ReminderDateHeader> 
</Box>

  )
}

export default ReminderBox