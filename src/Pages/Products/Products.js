import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import Product from './Product';

const Products = () => {
    const [products,setProducts] = useState([]);
  useEffect(()=>{
    fetch("fakeData.json")
    .then(res=>res.json())
    .then(data=>setProducts(data))
 }
    ,[]) 
    
    return (
        <div className='mt-16 '>
                <div className='text-center'>
                <h3 className='text-xl font-bold  uppercase  '>Product <span className='text-xl font-bold text-primary'>Detail View</span></h3>
                
        </div>
             <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 '>
             {
                products.map(product =><Product
                 key={product.id}
                 product={product}
                ></Product>
                    
                    )
            } 
         
        </div>
            
        </div>
    );
};

export default Products;