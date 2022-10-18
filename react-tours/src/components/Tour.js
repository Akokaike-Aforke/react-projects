import { useState } from 'react';
import './styles.css'
export const Tour = (props) =>{
     
    const{id, name, info, image, price, del} = props;
    const[read, setRead] = useState(true);
    const toggle = () =>{
        setRead(!read)
    }
    return<section className='sections'>
    <img src={image} alt="" />
    <div className="textDiv">
        <div className="flexDiv">
        <h3>{name}</h3>
        <span className='price'>${price}</span>
    </div>
    <p>{info.substring(0, 200)}{read &&<span className='spanButton' onClick={toggle}>... Read More</span>}
    {!read && <span>{info.substring(200)}</span>}{!read && <span className='spanButton' onClick={toggle}> Show Less</span>}</p>
    <button onClick={del}>Not Interested</button>
    
    </div>
    
    </section>
}