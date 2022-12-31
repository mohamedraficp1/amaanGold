import * as React from 'react';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import Slide from '@mui/material/Slide';
import { Box, Button, styled } from '@mui/material';
import CommodityEditForm from './CommodityEditForm';
import CancelOutlinedIcon from '@mui/icons-material/CancelOutlined';

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const StyledButton = styled(Button)({
  borderRadius: "8px",
  background: "#F9BF5E",
  color: "#fff",
  fontWeight: "500",
  width: "auto",
  padding: '10px 25px',
  float: 'right',
  marginBottom: '30px',
  "&:hover": {
    background: "#F7A928",
  },
});


export default function  CommodityTableAddPopup({data,setEdit, add}) {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const StyledIcon = styled(CancelOutlinedIcon)({
    color: "#AB9554",
    "&:hover": {
      cursor: 'pointer'
    },
  });

  const Title = styled(DialogTitle)({
    fontSize: '28px',
    fontWeight: 600,
    margin: '12px 0',
    textAlign:'center',
  })

  return (
    <div className='commodityForm'>
      < StyledButton  onClick={handleClickOpen} >Add Commodity</ StyledButton> 
      <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}  
        aria-describedby="alert-dialog-slide-description" 
        sx={{ margin: '0 auto'}}
      >
        <Box sx={{float: 'right', position: 'absolute', top: '7px', right: '7px'}}>
            <StyledIcon  onClick={handleClose}/>
        </Box>
        <Title>{"Commodity"}</Title>
        <DialogContent>
            <CommodityEditForm data={data} handleClose={handleClose} setEdit={setEdit} add={add}/>
        </DialogContent>
      </Dialog>
    </div>
  );
}