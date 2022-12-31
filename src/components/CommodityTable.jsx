import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Stack, styled, Typography } from '@mui/material';
import CommodityTableEditPopup from './CommodityTableEditPopup';
import { useState } from 'react';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import axios from 'axios'
import { AllCommodities } from '../service/api';
import DeleteConfirm from './DeleteConfirm';

function createData(id,metal, quality, unit, sellAed, sellUsd,premium, charges) {
  return {id, metal, quality, unit, sellAed, sellUsd,premium, charges };
}

const rows = [
  createData(1,'Gold', '916', '10 Tola', '24496', '6667','0','10'),
  createData(2,'Gold', '916', '1 GM', '210', '57','0','0'),
  createData(3,'Silver', '997', '1 KG', '2650', '721','0','0.00'),
  createData(4,'Gold', '995', '1 KG', '208867', '56853','0','0.00'),
  createData(5,'Gold', '9999', '1 KG', '209926', '57138','0','0.00'),
];

const TableTitle = styled(Typography)({
  fontWeight: 600,
  fontSize: '18px',
  lineHeight: '23px',
  color: '#30394A'
})

const TableData = styled(Typography)({
  fontWeight: 400,
  fontSize: '18px',
  lineHeight: '23px',
  color: '#616371'
})

export default function CommodityTable ({edit, setEdit}) {
  const [sellUsd, setSellUsd]=useState()
  const[commodities, setCommodities]= useState([])
  const goldValue = useSelector(state=> state.data.goldLive)
  const silverValue = useSelector(state=> state.data.silverLive)
  console.log(goldValue);
  const data= async ()=>{
      const tableCOntent= await axios.get(AllCommodities)
      setCommodities(tableCOntent.data.commodities)
  }
  
  useEffect(()=>{
    data()
  },[edit])
  console.log(commodities)
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell><TableTitle>Metal</TableTitle></TableCell>
            <TableCell align="right"><TableTitle>Purity</TableTitle></TableCell>
            <TableCell align="right"><TableTitle>Unit</TableTitle></TableCell>
            <TableCell align="right"><TableTitle>Sell(AED)</TableTitle></TableCell>
            <TableCell align="right"><TableTitle>Sell(USD)</TableTitle></TableCell>
            <TableCell align="right"><TableTitle>Premium</TableTitle></TableCell>
            <TableCell align="right"><TableTitle>Charges</TableTitle></TableCell>
            <TableCell align="right"></TableCell>
            
          </TableRow>
        </TableHead>
        <TableBody>
          {commodities?.map((row) => (
            <TableRow
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                <TableData>{row.commodity_title}</TableData>
              </TableCell>
              <TableCell align="right"><TableData>{Number(row.purity)*1000}</TableData></TableCell>
              <TableCell align="right"><TableData>{row.unit} {row.unitLabel} </TableData></TableCell>
              {/* <TableCell align="right"><TableData>{((((Number(row.commodity_title=='Silver' ? silverValue:goldValue )+Number(row.premium))*0.11812)
              *Number(row.unit)*Number(row.unitLabel=='KG' ? 1000 : (row.unitLabel=='TTB' ? 116.640: 1))*Number(row.purity))+Number(row.charges)).toLocaleString('en-US',{
                minimumFractionDigits: 2,
                maximumFractionDigits: 2
              })}</TableData></TableCell> */}
              <TableCell align="right"><TableData>{((Number(row.commodity_title=='Silver' ? silverValue:goldValue )+Number(row.premium))*0.11812*Number(row.unit)*Number(row.unitLabel=='KG' ? 1000 : (row.unitLabel=='TTB' ? 116.640: 1))*Number(row.purity)).toLocaleString('en-US',{
                minimumFractionDigits: 2,
                maximumFractionDigits: 2
              })}</TableData></TableCell>
              <TableCell align="right"><TableData>{((((Number(row.commodity_title=='Silver' ? silverValue:goldValue )+Number(row.premium))*0.11812)
              *Number(row.unit)*Number(row.unitLabel=='KG' ? 1000 : (row.unitLabel=='TTB' ? 116.640: 1))*Number(row.purity*0.27))+Number(row.charges)).toLocaleString('en-US',{
                minimumFractionDigits: 2,
                maximumFractionDigits: 2
              })}</TableData></TableCell>
              <TableCell align="right"><TableData>{row.premium}</TableData></TableCell>
              <TableCell align="right"><TableData>{row.charges}</TableData></TableCell>
              <TableCell align="center"><Stack direction={'row'} justifyContent='center'>
                  <CommodityTableEditPopup  setEdit={setEdit} edit={edit} data={row} add={false}/><DeleteConfirm id={row._id}  edit={edit} setEdit={setEdit}/>
                </Stack></TableCell>
              
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}