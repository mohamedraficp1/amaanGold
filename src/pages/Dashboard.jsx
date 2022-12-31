import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Commodity from '../components/Commodity';
import date from 'date-and-time';
import Topbar from '../components/Topbar';

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

export default function Dashboard() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const now = new Date();
  return (
    <Box sx={{ width: '100%',overflowY:'scroll', height: '100vh'}}>
      <Box id="datebar" sx={{float:"right", marginRight: "30px", paddingTop: "25px"}}>
          <Topbar/>
          <h3 className='dateAndTime'>{date.format(now, 'DD MMM YYYY - ddd hh:mm A')}</h3>
        </Box>
        <Box>
            <Box marginTop={'30px'}>
                <Tabs value={value} onChange={handleChange} aria-label="basic tabs example" className='dashboard-tabs'>
                    <Tab label="Commodity" {...a11yProps(0)} />
                    {/* <Tab label="Products" {...a11yProps(1)} /> */}
                </Tabs>
            </Box>
            <TabPanel value={value} index={0}>
                <Commodity />
            </TabPanel>
            {/* <TabPanel value={value} index={1}>
                Item Two
            </TabPanel> */}
        </Box>
    </Box>
  );
}