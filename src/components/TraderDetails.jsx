import React from 'react'
import { Typography,Box,TextField, Button } from '@mui/material'

const TraderDetails = () => {
  return (
 <Box>
    <form>
        <Box sx={{ display:
            'flex', flexDirection:'column'}}>
            <Box>
            <Typography>Add New Trader</Typography>
            </Box>
         

         <Box sx={{display:'flex',justifyContent:'space-between',mt:5}} >
           <TextField id="outlined-basic" label="First name" variant="outlined"/>
            <TextField id="outlined-basic" label="last name" variant="outlined"/>
         </Box>


         <Box sx={{display:'flex',justifyContent:'space-between',mt:5}}  >
         <TextField id="outlined-basic" label="Enter Email" variant="outlined"/>
         <TextField id="outlined-basic" label="Enter Phone" variant="outlined"/>
         </Box>

         <Box sx={{display:'flex',flexDirection:'column',mt:5}}  >
         <TextField id="outlined-basic" label="Enter password" variant="outlined"/>
         </Box>

         <Box sx={{display:'flex',flexDirection:'column',mt:5}}  >
         <TextField id="outlined-basic" label="Enter country" variant="outlined"/>
         </Box>

         <Box sx={{display:'flex',justifyContent:'space-between',mt:5}}  >
         <Button style={{backgroundColor:'#F7A928',width: '155px',borderRadius:'7px'}} variant="contained">Add</Button>
         <Button style={{border:'1px solid #6D7590',borderRadius:'7px'}} variant="outlined">Cancel</Button>
         </Box>
       
        </Box>
    </form>
 </Box>
  )
}

export default TraderDetails