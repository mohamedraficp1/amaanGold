import * as React from 'react';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import Slide from '@mui/material/Slide';
import { Box, styled } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import CommodityEditForm from './CommodityEditForm';
import CancelOutlinedIcon from '@mui/icons-material/CancelOutlined';

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const PenIcon = styled(EditIcon)({
    color:'#A0A9B7',
    marginRight: '20px',
    '&:hover': {
        cursor:'pointer'
      },
})

export default function  CommodityTableEditPopup({setEdit,edit,data,add}) {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const Title = styled(DialogTitle)({
    fontSize: '28px',
    fontWeight: 600,
    margin: '12px 0',
    textAlign:'center',
  })

  const StyledIcon = styled(CancelOutlinedIcon)({
    color: "#AB9554",
    "&:hover": {
      cursor: 'pointer'
    },
  });
 
  return (
    <div className='commodityForm'>
      <PenIcon onClick={handleClickOpen} />
        
      <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}  
        aria-describedby="alert-dialog-slide-description" 
        sx={{margin: '0 auto'}}
      >
        <Box sx={{float: 'right', position: 'absolute', top: '7px', right: '7px'}}>
            <StyledIcon  onClick={handleClose}/>
        </Box>
        <Title>{"Commodity"}</Title>
        <DialogContent>
            <CommodityEditForm data={data} handleClose={handleClose} add={add} setEdit={setEdit} edit={edit} />
        </DialogContent>
      </Dialog>
    </div>
  );
}