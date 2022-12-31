
import { Box } from '@mui/material';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Login from './pages/Login';
import Common from './Routes/Common';
import LoggedInUser from './Routes/LoggedinUser';


function App() {
  const width = window.innerWidth
  if (width <= 600) {
    // ...function logic
    alert(width)
    return(
  
      <Box className="outerContainer">
        <h3>Please Check in Tab or Laptop</h3>
      </Box>
    )

  }
  return (
    <Box className="outerContainer">
       <Routes>
        <Route path='/login' exact element= {<Login />}/>
        <Route element={<LoggedInUser />} >
            <Route path='/*'  element= {<Common />}/>
        </Route>
       </Routes>
    </Box>
  );
}

export default App;
