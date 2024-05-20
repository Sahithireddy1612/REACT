import React, { useState } from 'react';

function Todo() {
    const cars = ["BMW", "LAMBORGINI", "AUDI", "SWIFT", "TESLA", "TOYOTA", "FORD"];
    const [carList, setCarList] = useState(["BMW"]); 

    const handleAddFlower = () => {
        const nextIndex = carList.length;
        setCarList([...carList, cars[nextIndex]]);
    };

    const handleRefresh = () => {
        setCarList([]);
    };

    const handleDelete = () => {
        setCarList(carList.slice(0, -1));
    };

    return(
        <div>
            <h1>CARS LIST</h1>
           {carList.map((car, index) => (
               <p key={index}>{index + 1}. {car}</p>
           ))}
           <button onClick={handleAddFlower}>Add Car</button>
           <button onClick={handleRefresh}>Refresh</button>
           <button onClick={handleDelete}>Delete</button>
        </div>
    );
}

export default Todo;
