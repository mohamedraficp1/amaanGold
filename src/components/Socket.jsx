import React, {  useEffect } from 'react';
import io from 'socket.io-client';
import {useDispatch} from 'react-redux'

const socket = io("https://bullionstatus.com/");

function Socket() {
  const dispatch= useDispatch()

  useEffect(() => {
    socket.on('connect', () => {
     
    });

    socket.on('disconnect', () => {
        
    });

    socket.on("connect_error", (err) => {
      console.log(`connect_error due to ${err.message}`);
    });

    socket.on("gold-rate-change", (data) => {
       dispatch({type: "GOLD_DATA", payload: data})
    });

    socket.on("silver-rate-change", (data) => {
      dispatch({type: "SILVER_DATA", payload: data})
   });

    // eslint-disable-next-line
  }, []);

  

  return (
    <div>
      
    </div>
  );
}

export default Socket;