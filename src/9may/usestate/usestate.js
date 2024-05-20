import React, { useState } from 'react';

function UseState() {
    const flowers=["Rose","Lilly","Jasmine","Lotus","Sun Flower","Marrie Gold","Tulip"]
    const [Index, setIndex]=useState(0);
    
    return(
        <div>
            {flowers.map((flower,index)=>{
                  return index===Index && <p key={index}>{flower}</p>
            })}
            <button onClick={()=>setIndex((prevIndex)=> (prevIndex +1) % flowers.length)}>
               Click Here
            </button>
        </div>
        
    );
  
 
}
export default UseState