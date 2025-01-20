"use client"
import React, { useState } from 'react'

const QuantityBox = () => {
    const [qtyValue, setQtyValue] = useState(0);

    const decreaseQty = () => {
        console.log("minus hua");
        if(qtyValue===1){
            setQtyValue(1)
        }else{
            setQtyValue(qtyValue - 1)
        }
       
    }
    const increaseQty = () => {
        console.log("plus  hua");
       
        setQtyValue(qtyValue + 1)
    }

    const handleQuantity = ()=>{
        
    }
   
    return (
        <div>
            <div className="quantity__wrapper">
                <button className="minus" onClick={decreaseQty}>&minus;</button>
                <input type="number" className="input-box" value={qtyValue} onChange={handleQuantity}  min="1" max="10" />
                <button className="plus" onClick={increaseQty}>+</button>
            </div>
        </div>
    )
}

export default QuantityBox
