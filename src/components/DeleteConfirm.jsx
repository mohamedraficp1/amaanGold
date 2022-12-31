import React from 'react'
import DeleteIcon from '@mui/icons-material/Delete';
import {useSelector} from 'react-redux'
import Swal from 'sweetalert2'
import { DeleteCommodity } from '../service/api';
import axios from 'axios';

function DeleteConfirm({id,setEdit,edit, }) {
  const user = useSelector(state=>state.user)
    const handleClick= ()=>{
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#AB9554',
            confirmButtonBorderColor: '#AB9554',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
          }).then((result) => {
            if (result.isConfirmed) {
               const deleteItem= async()=>{
                    const data=await axios.delete(DeleteCommodity(id),{
                        'headers': {
                          'Authorization': 'Bearer ' + user.token
                        }})
                        setEdit(!edit)
                }
                deleteItem()
              Swal.fire(
                'Deleted!',
                'Your file has been deleted.',
                'success'
              )
            }
          })
    }
  return (
    <div className='deleteIcon'><DeleteIcon onClick={handleClick} /></div>
  )
}

export default DeleteConfirm