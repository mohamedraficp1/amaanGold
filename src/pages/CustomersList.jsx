
import React,{ useState} from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Stack } from '@mui/material';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box'
import {Modal} from '@mui/material';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import TraderDetails from '../components/TraderDetails';
import SearchIcon from '@mui/icons-material/Search';
import InputBase from '@mui/material/InputBase';
import { styled } from '@mui/system';
import KycDetails from '../components/KycDetails';
// import { allUsers } from '../service/api';

function TabPanel(props) {
    const { children, value, index, ...other } = props;
  
    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`vertical-tabpanel-${index}`}
        aria-labelledby={`vertical-tab-${index}`}
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
      id: `vertical-tab-${index}`,
      'aria-controls': `vertical-tabpanel-${index}`,
    };
  }

const style = {
     display:'flex',
     position:'absolute',
    justifyContent:'space-between',
    top: '50%',
    left: '50%',
     transform: 'translate(-50%, -50%)',
     width: '700px',
     height:'600px',
    backgroundColor:'none',
    //  border: '2px solid #000',
    // boxShadow: 24,
     p: 4,
  };

const toggleBox={
    // position:'absolute',
    width:'194px',
   height:'586px',
backgroundColor:'#FFFFFF',
borderRadius:'10px',

}

const userDetailsBox={
    position: 'absolute',
    width:'499px',
     height:'586px',
    backgroundColor:'#FFFFFF',
    //  display:'flex-end',
     marginLeft:'210px',
    borderRadius:'10px'
}






function createData(name, email, phone, country, kyc,action,report) {
  return { name,email, phone,country,kyc,action,report };
}

const rows = [
  createData('asic abduraheem', 'acd aburaheem@gmail,com','97479711', 'saudiarabia', 4.0),
  createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
  createData('Eclair', 262, 16.0, 24, 6.0),
  createData('Cupcake', 305, 3.7, 67, 4.3),
  createData('Gingerbread', 356, 16.0, 49, 3.9),
];



const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  border:'1px solid #8D99AC',
  borderRadius:'8px',
  innerBorder:'1px #8D99AC',
  backgroundColor:'#FFFFFF',
  '&:hover': {
    backgroundColor:'#FFFFFF',
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(3),
    width: 'auto',
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    // transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '20ch',
    },
  },
}));




export default function CustomersTable() {

  const [usersList,setUsersList]=useState([])
    const [value, setValue] = React.useState(0);
  

    
    
    const handleChange = (event, newValue) => {
      setValue(newValue);
    };

  



    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
     const handleClose = () => setOpen(false);

    //  const[users,setUsers]=useState([])
    //  const data=async()=>{
    //   const tableContent= await allUsers('eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzOTk2OThjYzRjMGUxNGVmMGE4MzVhNSIsImlhdCI6MTY3MTUxNjA5OCwiZXhwIjoxNjcyMTIwODk4fQ.aoH3KBf545ofdUvocb5Z8Ch27J7nQSjOuYEhtZn4xMw')
    // setUsersList(tableContent.users)
    // console.log(tableContent.users,"uuuuuuuuuuuuuuu")
    //  }
    
//  useEffect(()=>{
//       data() 
//      },[])



  return (
   
    <Stack style={{backgroundColor:'#E9E9EE',width:'100%',marginTop:'150px',marginRight:'20px'}}>
    <TableContainer  component={Paper} >
      <Box sx={{height:'80px',display:'flex', alignItems:'center',justifyContent:'space-between',mr:'20px'}}>
     
      <Search>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search…"
              inputProps={{ 'aria-label': 'search' }}
            />
          </Search>
          <Button onClick={handleOpen} style={{backgroundColor:'#F7A928',textTransform:'none',width: '160px',height: '47px'}} variant="contained">Add new trader</Button>


{/* ==================modal box================================= */}
<Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
            
            
            
            <Box sx={toggleBox}>
        <Tabs
         orientation="vertical"
          variant="scrollable"
        value={value}
        onChange={handleChange}
        aria-label="Vertical tabs"
        sx={{ borderRight: 1, borderColor: '#FFFFFF',m:2}}
      >
        <Tab label="Trader Details" {...a11yProps(0)} />
        <Tab label="Kyc Details" {...a11yProps(1)} />
      </Tabs>
       </Box>
          
          <Box sx={userDetailsBox}>
          <TabPanel value={value} index={0}>
          <TraderDetails/>
          </TabPanel>
          <TabPanel value={value} index={1}>
           <KycDetails/>
          </TabPanel>
          </Box>

     

        </Box>
      </Modal>





{/* ==================modal box================================= */}
      </Box>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead style={{backgroundColor:'#D9D9D9'}}>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell align='right'>Email</TableCell>
            <TableCell align="right">Phone</TableCell>
            <TableCell align="right">Country</TableCell>
            <TableCell align="right">Kyc</TableCell>
            <TableCell align="right">Action</TableCell>
            <TableCell align="right">Report</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {usersList.map((row) => (
            <TableRow
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.first_name} {row.last_name}
              </TableCell>
               <TableCell align="right">{row.email}</TableCell>
              <TableCell align="right">{row.phone}</TableCell>
              <TableCell align="right">{row.country}</TableCell>
              <TableCell align="right">No</TableCell> 
              <TableCell align="right">{row.action}</TableCell> 
              <TableCell align="right">{row.report}</TableCell> 
            </TableRow>
          ))}
        </TableBody>
      </Table>
      {/* <Box sx={{display:'flex'}}  >
           <Stack  sx={{display:'flex'}}>
      <Pagination count={15} shape="rounded" />
    
   </Stack> 
          </Box> */}
    </TableContainer>
    </Stack>
  );
}
