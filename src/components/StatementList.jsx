import React from 'react'
import { styled } from '@mui/system';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import PropTypes from 'prop-types';
import Typography from '@mui/material/Typography';


const HeaderBox=styled(Box)({
    backgroundColor:'#E9E9EE',
    display:'flex',
    height:'50px',
     borderBottom: 1,
   borderColor: 'divider'

})

const SearchBarBox=styled(Box)({
    display:'flex',
    // backgroundColor:'blue'
})


const DataBox=styled(Box)({
    display:'flex',
    backgroundColor:'black'
})

const PaginationBox=styled(Box)({

    })

const StatementList = () => {

  const [value, setValue] = React.useState('one');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };




  
function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (

      <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}




  return (
    <Box sx={{ width: '100%',height:'100px',marginTop:'50px'}}>
    <HeaderBox>
            <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
          <Tab label="Item One" {...a11yProps(0)} />
          <Tab label="Item Two" {...a11yProps(1)} />
          <Tab label="Item Three" {...a11yProps(2)} />
        </Tabs>
     </HeaderBox>
    <SearchBarBox>
    <h1>fffffffffffffffff</h1>
    </SearchBarBox>
<DataBox>

     <TabPanel value={value} index={0}>
        Item One
      </TabPanel>
      <TabPanel value={value} index={1}>
        Item Two
      </TabPanel>
 
    <PaginationBox>

    </PaginationBox>
</DataBox>
    </Box>
  )
}

export default StatementList