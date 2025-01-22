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
            <div className="quantity__wrapper !border-gray-300">
                <button className="minus bg-slate-100  text-green-600" onClick={decreaseQty}>&minus;</button>
                <input type="text" className="input-box text-xs" value={qtyValue} onChange={handleQuantity}  min="1" max="10" />
                <button className="plus  bg-slate-100 text-green-600" onClick={increaseQty}>+</button>
            </div>
        </div>
    )
}

export default QuantityBox
