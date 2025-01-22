"use client"
import React from 'react'

const ProductStatus = (props) => {
  return (
    <div>
      <h2 className={`inline-block py-1 px-3 text-xs rounded-md ${props.status ==="Pending" && 'bg-yellow-100 text-yellow-600 '} ${props.status ==="Cancel" && 'bg-red-100 text-red-600'} ${props.status ==="Delivered" && "bg-green-100 text-green-600"}`}>{props.status}</h2>
    </div>
  )
}

export default ProductStatus