import React from 'react'
import './index.css';
const Card = (props) => {
    // console.log(props);
  return (
  
    <>
                <div className='card-body'>
                    <h2 className='card-title'>{props.sname}</h2>
                        <img src={props.imgsrc} className='img' alt='images random' />
                        <h3 className='netflix'>Netflix Original Webseries</h3>
                        <h4 className='category'>{props.category}</h4>
                        <a href={props.links} className='link'><button>Watch Button</button></a>                                        
                </div>
    </>
   
  );
}
export default Card;