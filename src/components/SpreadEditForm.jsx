import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import EditIcon from '@mui/icons-material/Edit';
import { styled } from '@mui/material';
import { useState } from 'react';
import { editSpred } from '../service/api';
import { useForm } from "react-hook-form";
import { Box } from '@mui/system';
import CancelOutlinedIcon from '@mui/icons-material/CancelOutlined';
import edit from '../assets/edit.png'
import { useSelector } from 'react-redux';

export default function SpreadEditForm({metal, spread ,type, setMargin,setEditSpread}) {
  const [open, setOpen] = React.useState(false);
  const [spreadValue, setSpreadValue]=useState(spread)
  const [loading,setLoading]=useState(false)
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm()

  const PenIcon = styled(EditIcon)({
    color:'#A0A9B7',
    '&:hover': {
        cursor:'pointer'
      },
})

const StyledButton = styled(Button)({
    borderRadius: "8px",
    background: "#F7A928",
    border: "2px solid #F7A928",
    color: "#fff",
    padding: "8px 18px",
    marginBottom: "20px",
    margin: " 0 auto 20px",
    "&:hover": {
      background: "#Fff",
      color:"#F7A928",
    },
  });

  const StyledIcon = styled(CancelOutlinedIcon)({
    color: "#F7A928",
    "&:hover": {
      cursor: 'pointer'
    },
  });


  const user = useSelector(state=>state.user)

  const onSubmit = async(datas) => {
    setLoading(true)
    const updatedSpread =await editSpred(user.token,datas,type, metal)
    setLoading(false)
    setEditSpread(prev=> !prev)
    setOpen(false);
 }

  return (
    <div className='editPopup'>
      {/* <PenIcon /> */}
      <img  src={edit} alt='Dashboard-icon' width={'25px'} onClick={handleClickOpen} />
      <Dialog open={open} onClose={handleClose} >
        <Box sx={{float: 'right', position: 'absolute', top: '7px', right: '7px'}}>
            <StyledIcon  onClick={handleClose}/>
        </Box>
      <form onSubmit={handleSubmit(onSubmit)} style={{width: "350px"}}>
        <DialogTitle align='center' fontWeight="600" marginTop={3}>Edit Spread</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Spread"
            color="warning"
            fullWidth
            variant="standard"
            defaultValue={spreadValue}
            {...register("spread", {
                required: "Please enter spread",
              })}
            onChange={(e)=>setSpreadValue(e.target.validity)}
          />
        </DialogContent>
        <DialogActions>
          <StyledButton type="submit">{loading ? "......" : "Submit"}</StyledButton>
        </DialogActions>
        </form>
      </Dialog>
    </div>
  );
}