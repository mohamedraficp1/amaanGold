import * as React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Gold from './Gold';
import Silver from './Silver';
import CommodityTable from './CommodityTable';
import Socket from './Socket';
import CommodityTableAddPopup from './CommodityTableAdd';

export default function Commodity() {
  const [edit, setEdit]=React.useState(false)
  const data ={
    charges: 0,
    commodity_title: "Gold",
    premium: 0,
    purity: 0.916,
    unit: 1,
    unitLabel: "GM"
  }
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={8}>
        <Grid item md={6} sm={12} className="gridItem">
          <Socket />
            <Gold />
        </Grid>
        <Grid item md={6} sm={12} className="gridItem">
            <Silver />
        </Grid>
      </Grid>
      <Box marginTop={'40px'}>
        <CommodityTableAddPopup data={data}  setEdit={setEdit} add={true} />
      </Box>
      <Box marginTop={'40px'}>
        <CommodityTable edit={edit} setEdit={setEdit} />
      </Box>
    </Box>
  );
}