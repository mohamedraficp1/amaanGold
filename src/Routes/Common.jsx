import { Route, Routes } from "react-router-dom";
import Box from "@mui/material/Box";
import Socket from "../components/Socket";
import Sidebar from "../components/Sidebar";
import Dashboard1 from "../pages/Dashboard1";
import Dashboard from "../pages/Dashboard";
import Calendar from "../pages/Calendar";
import CustomersList from "../pages/CustomersList";
import Gallery from "../pages/Gallery";
import Requests from "../pages/Requests";
import Topbar from "../components/Topbar";
// import StatementList  from '../pages/Stat';

function Common() {
  return (
    <Box className="App">
      <Socket />
      <Sidebar />

      <Routes>
        <Route path="/" exact element={<Dashboard />} />
        {/* <Route path="/requests" exact element={<Requests />} /> */}
        <Route path="/dashboard" exact element={<Dashboard1 />} />
        <Route path="/dashboard/calendar" exact element={<Calendar />} />
        {/* <Route path="/customers" exact element={<CustomersList />} /> */}
        {/* <Route path='/statement' exact element={<StatementList/>}/> */}
        <Route path="/Gallery" exact element={<Gallery />} />
      </Routes>
    </Box>
  );
}

export default Common;
