import React from 'react';
import {useState } from 'react';

const QuantityDropdown = () => {
{
    const [count, setCount] = useState(1);
  
    return (
        <div>
        <p>Quantity: {count}</p>
        <button onClick={() => setCount(count + 1)} style={{marginRight:"10px"}}>
          Increase Quantity
        </button>
        <button onClick={() => setCount(count - 1)}>
          Decrease Quantity
        </button>
      </div>
    );
}
}
export default QuantityDropdown;