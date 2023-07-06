import React from 'react';
import CreateNote from './CreateNote';
import Header from './Header';
const App = () => {

//   const [StoreData, setStoreData] = React.useState([]);

//   const AddNote =(titleValue)=>{
//     setStoreData((preData)=>{
//         return [...preData,  titleValue];
//     })
//   }

// const DeleteItem = (id)=>{
//   setStoreData((StoreData)=>{
//  return StoreData.filter((curElem, index)=>{
//   return index!== id;
//    })
//  })
// }

  return (
    <>
    <Header />
     <CreateNote />

     {/* {StoreData.map((Data, index)=>{
    return(
        <Note 
        title={Data.Title}
        content = {Data.Content}
        key = {index}
        id = {index}
        onDelete = {DeleteItem}
        />
    )  
    })} */}
   
    </>
  )
}

export default App;
