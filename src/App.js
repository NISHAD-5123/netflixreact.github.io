import React from 'react';
import './index.css';
import Api from './Api';
import Card from'./Card';
// import Search from './Search';

const card = (val)=>{
  return (
    <>
    <div className='container'>
    <Card 
    imgsrc = {val.imgsrc}
    sname = {val.sname}
    category = {val.category}
    links = {val.links}
    />
    </div>
    </>
  );
}

const App = ()=>{
  const [searchItem , setSearchItem] =React.useState(''); 
  const Event = (obj)=>{
    setSearchItem(obj.target.value);
  }

    return(
    <>
    <h1 className='heading'>Top Five Best Korean Webseries</h1>
    <div className='text_data'>
   <input type="text" placeholder='Search...' value={searchItem} onChange={Event} />
   </div>
    {/* <Search /> */}
    <br /><br />
    {Api.filter((data)=>{
      return data === '' ?  data : data.sname.toLocaleLowerCase().includes(searchItem.toLocaleLowerCase())
    }).map(card)}
    </>
    );
}

export default App;