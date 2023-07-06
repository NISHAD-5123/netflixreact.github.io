import React from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import DeleteIcon from '@mui/icons-material/Delete';
import Button from '@mui/material/Button';

const Note = (props) => {
  // const DeleteNote = ()=>{
  //   props.onDelete(props.id);
  // }
  return (
   <>
    {/* <div className='div-center'>
      <p>{props.title}</p>
      <p>{props.content}</p>
      <button onClick={()=>{
        props.onDelete(props.id)
      }} className='right'><DeleteIcon/></button>
   </div> */}
<div class="card-group my-3">
  <div class="card mx-2 shadow">
    <div class="card-body">
      <h5 class="card-title">{props.title}</h5>
      <p class="card-text">{props.content}</p>
    </div>
    <button onClick={()=>{
        props.onDelete(props.id)
      }} className='right'><DeleteIcon/></button>
  </div>
</div>
   </>
  )
}
export default Note;
