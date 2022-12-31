import { Box } from '@mui/material'
import React, { useEffect } from 'react'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { allSpreads } from '../service/api'
import Bid from './Bid'
import CommodityTitle from './CommodityTitle'
import TradingViewChart from './TradingviewChart'

function Gold() {
  const goldData= useSelector((state)=> state.data.gold)
  const[editSpread, setEditSpread]= useState(false)
  const [spreadData, EditSpreadData] =useState()
  const [goldAskSpread, setAskGoldSpread]=useState()
  const [goldBidSpread, setBidGoldSpread]=useState()
  
  const spread = async()=>{
    const data = await allSpreads()
    EditSpreadData(data)
    setAskGoldSpread(data.goldAskSpread)
    setBidGoldSpread(data.goldBidSpread)
  }
  console.log(spreadData);
  useEffect(() => {
    spread()
  }, [editSpread])

  const dispatch =useDispatch()
  dispatch({type:"GOLD_LIVE", payload: goldData?.data?.ask })
  return (
    <Box>
        <CommodityTitle title={'Gold'} color={' #F9BF5E'} />
        <TradingViewChart symbol={"OANDA:XAUUSD"} />
        <Bid metal={'Gold'}  titleOne={'Bid'} priceOne={goldData?.data?.bid} tItleTwo={'Spread'} priceTwo={goldBidSpread} titleThree={'Bidding Price' } priceThree={'1772'} setEditSpread={setEditSpread} />
        <Bid metal={'Gold'}  titleOne={'Ask'} priceOne={goldData?.data?.ask} tItleTwo={'Spread'} priceTwo={goldAskSpread} titleThree={'Asking Price' } priceThree={'1772'}  setEditSpread={setEditSpread} />
        
    </Box>
  )
}

export default Gold