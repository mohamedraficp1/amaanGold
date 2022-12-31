import { Box } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { allSpreads } from '../service/api'
import Bid from './Bid'
import CommodityTitle from './CommodityTitle'
import TradingViewChart from './TradingviewChart'

function Silver() {
  const dispatch= useDispatch()
  const silverData= useSelector((state)=> state.data.silver)
  const[editSpread, setEditSpread]= useState(false)
  const [spreadData, EditSpreadData] =useState()
  const [silverAskSpread, setAskSilverSpread]=useState()
  const [silverBidSpread, setBidSilverSpread]=useState()
  
  const spread = async()=>{
    const data = await allSpreads()
    EditSpreadData(data)
    setAskSilverSpread(data.silverAskSpread)
    setBidSilverSpread(data.silverBidSpread)
  }
  console.log(spreadData);
  useEffect(() => {
    spread()
  }, [editSpread])

  dispatch({type:"SILVER_LIVE", payload: silverData?.data?.ask })
  return (
    <Box>
        <CommodityTitle title={'Silver'} color={' #C0C0C0'} />
        <TradingViewChart symbol={"OANDA:XAGUSD"} vol={false} />
        <Bid metal={'Silver'} titleOne={'Bid'} priceOne={silverData?.data?.bid} tItleTwo={'Spread'} priceTwo={silverBidSpread} titleThree={'Bidding Price' } priceThree={'24.41'} setEditSpread={setEditSpread} />
        <Bid metal={'Silver'} titleOne={'Ask'} priceOne={silverData?.data?.ask} tItleTwo={'Spread'} priceTwo={silverAskSpread} titleThree={'Asking Price' } priceThree={'24.41'}  setEditSpread={setEditSpread} />
    </Box>
  )
}

export default Silver