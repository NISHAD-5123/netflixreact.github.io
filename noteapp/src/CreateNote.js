import React from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Note from './Note';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import './index.css';
import Button from '@mui/material/Button';

const CreateNote = () => {
    const [StoreData, setStoreData] = React.useState([]);
    const [open, setOpen] = React.useState(false);
    const [titleValue, setTitleValue] = React.useState({
        Title:" ",
        Content:" ",
    });
     
    const TitleEvent = (obj)=>{
        const {name,value} = obj.target;
        

        setTitleValue((preValue)=>{
            return {...preValue , 
            [name]:value,
        }
        })
       

    }
    const AddNote = (obj)=>{
            obj.preventDefault();
        setStoreData((preData)=>{
            return [...preData,  titleValue];
        })
        setTitleValue({
            Title:" ",
            Content:" ",
        });
      }
      const Open = ()=>{
        setOpen(true);
      }


const DeleteItem = (id)=>{
  setStoreData((StoreData)=>{
 return StoreData.filter((curElem, index)=>{
  return index!== id;
   })
 })
}

  
  
  return (
   <>   
    <div className='CreateNote'>
        {/* <input type="text" value={titleValue.Title} onChange={TitleEvent} name="Title"  placeholder="Enter Title" onClick={Open}  />
        {open ? <textarea  rows="4" column="21" value={titleValue.Content} onChange={TitleEvent}  name="Content" placeholder="Enter Content" /> :null}
        {open ? <button onClick={AddNote}  className='AddRight' ><AddCircleOutlineIcon /></button>:null} */}
<form>
  <div class="form-group">
    <label for="exampleFormControlInput1">Enter Title</label>
    <input type="text" onClick={Open} value={titleValue.Title} onChange={TitleEvent} name="Title" id="exampleFormControlInput1" class="form-control" placeholder=" Enter Title" ></input>
  </div>
  <div class="form-group">
  {open ? <label for="exampleFormControlTextarea1">Write a Note...</label>:null}
  {open ?<textarea class="form-control" name="Content" value={titleValue.Content} id="exampleFormControlTextarea1" onChange={TitleEvent} placeholder="Write a Note"  rows="3"></textarea>:null}
    {open ? <button onClick={AddNote}  className='AddRight' ><AddCircleOutlineIcon /></button>:null}
  </div>
</form>
    </div>
    <div className='NoteFlex'>
   {StoreData.map((Data, index)=>{
    return(
        <Note 
        title={Data.Title}
        content = {Data.Content}
        key = {index}
        id = {index}
        onDelete = {DeleteItem}
        />
    )  
    })}
    </div>
   </>
  )
}

export default CreateNote;