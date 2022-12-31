import React from 'react';
import { Typography,Box,TextField, Button } from '@mui/material'

const KycDetails = () => {
  return (
    <Box>
         <form>
        <Box sx={{ display:
            'flex', flexDirection:'column'}}>
            <Box>
            <Typography>Add New Trader</Typography>
            </Box>

         <Box sx={{display:'flex',flexDirection:'column',mt:5}}  >
         <TextField id="outlined-basic" label="Proof of ID" variant="outlined"/>
         </Box>

         <Box sx={{display:'flex',flexDirection:'column',mt:5}}  >
         <TextField id="outlined-basic" label="ID" variant="outlined"/>
         </Box>

         <Box sx={{display:'flex',flexDirection:'column',mt:5}}  >
         <TextField id="outlined-basic" label="Proof of ID frontSide" variant="outlined"/>
         </Box>

         <Box sx={{display:'flex',flexDirection:'column',mt:5}}  >
         <TextField  id="outlined-basic" label="Proof of ID Backside" variant="outlined"></TextField>
         </Box>

         <Box sx={{display:'flex',justifyContent:'space-between',mt:5}}  >
         <Button style={{backgroundColor:'#F7A928',width: '155px',borderRadius:'7px'}} variant="contained">Submit</Button>
         <Button style={{border:'1px solid #6D7590',borderRadius:'7px'}} variant="outlined">Cancel</Button>
         </Box>
       
        </Box>
    </form>

    </Box>
  )
}

export default KycDetails