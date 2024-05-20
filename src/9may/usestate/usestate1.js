import React, { useState } from 'react';

function UseState1() {
    const flowers = ["Rose", "Lilly", "Jasmine", "Lotus", "Sun Flower", "Marrie Gold", "Tulip"];
    const [flowerList, setFlowerList] = useState(["Rose"]); 

    const handleAddFlower = () => {
        const nextIndex = flowerList.length;
        setFlowerList([...flowerList, flowers[nextIndex]]);
    };

    const handleRefresh = () => {
        setFlowerList([]);
    };

    const handleDelete = () => {
        setFlowerList(flowerList.slice(0, -1));
    };

    return(
        <div>
            <h1>FLOWERS LIST</h1>
           {flowerList.map((flower, index) => (
               <p key={index}>{index + 1}. {flower}</p>
           ))}
           <button onClick={handleAddFlower}>Add Flower</button>
           <button onClick={handleRefresh}>Refresh</button>
           <button onClick={handleDelete}>Delete</button>
        </div>
    );
}

export default UseState1;
