import React, { useEffect, useState } from 'react'
import "./Product.css"

const Product = () => {

const[product,setProduct]=useState([])
    useEffect(()=>{
       fetch('https://dummyjson.com/products')
       .then((res)=>res.json())
       .then((result)=>setProduct(result.products))

    },[])
  return (
    <div>
      <h1>Product list</h1>

    <div className='main'>
        {product.map((item)=>(
            <div className='cart' key={item.id}>
                <img src={item.images} alt="" width={200} />
                <h1> {item.title} </h1>
             
                <h2> {item.price} </h2>
                <button>View Details</button>
            </div>
        ))}
    </div>

    </div>
  )
}

export default Product
