import { Typography,Button,Stack } from "@mui/material"
import React from 'react';
import Box from '@mui/material/Box';
import { styled } from '@mui/material/styles';
import {useSelector,useDispatch} from 'react-redux'
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import DoneIcon from '@mui/icons-material/Done';


 const Reminders=styled(Box)({
     marginTop:'30px',
     display:'flex',
     justifyContent:'space-between',
     marginLeft:'5px',
     marginRight:'5px',
    borderColor:'#E9E9EE',
    borderBottom:' 1px solid #E9E9EE',
 transform:'transform: rotate(-0.11deg)',
})

  
const DisplayDate=styled(Typography)({
    fontWeight:'400',
    fontSize:'16px',
    color:'#868899',
    lineHeight:'18.75px',
    marginLeft:'10px',
 })

  const DisplayTitle=styled(Typography)({
    fontWeight:'400',
    fontSize:'15px',
    lineHeight:'18.75px',
    color:'#30394A',
     width:'357px',
    overflowWrap:'break-word',
})




const ReminderSlot = () => {
   const data=useSelector((state)=>state.reminder.reminders)
 return (
  <Box>
    {data.map((reminder)=>(
    <Reminders mt={2}   >
    <DisplayDate>{reminder.start}</DisplayDate>
    <DisplayTitle>{reminder.title}</DisplayTitle> 
    <Box sx={{display:'flex'}}>
    <IconButton style={{color:'#A0A9B7'}}><EditIcon/></IconButton>
    <IconButton style={{color:'#A0A9B7'}}><DeleteIcon/></IconButton>
    {/* <IconButton style={{color:'#A0A9B7'}}><DoneIcon/></IconButton> */}
    </Box>
    </Reminders> 
      ))}
       </Box>  
    

    
  )
}

export default ReminderSlot