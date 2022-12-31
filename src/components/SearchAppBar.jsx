import * as React from 'react';
import { styled} from '@mui/material/styles';

import Box from '@mui/material/Box';

import Typography from '@mui/material/Typography';



const navBar = styled(Typography)({
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  backgroundColor:'black'
});



export default function SearchAppBar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      
    </Box>
  );
}