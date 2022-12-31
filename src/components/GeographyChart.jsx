
import React from "react";
import Chart from "react-google-charts";
import { Box } from "@mui/system";

const data = [
  ["Country", "Users"],
  ["Germany", 200],
  ["United States", 300],
  ["Brazil", 400],
  ["Canada", 500],
  ["France", 600],
  ["RU", 700],
  ["India",10]
];
var options = {colors: ['#6D7590']};

class GeographyChart extends React.Component {
  render() {
    return (
        <Box sx={{display:'flex',borderRadius:'12px',marginBottom:2}}>
         
        <Chart chartType="GeoChart" width="100%" height="350px" options={options}   data={data} />
       
        </Box>

    );
  }
}

export default GeographyChart



