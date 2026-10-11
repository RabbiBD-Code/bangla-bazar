"use client"



import { RicePrice } from '@/type/type';
import { useState } from 'react';
import AllProducts from './AllProducts';

const FilteredProducts = ({products}:{products:RicePrice[]}) => {


    const [sortOrder, setSortOrder] = useState('');
  const sortedProducts = [...products].sort((a, b)=>{
    if(sortOrder === "low-to-high"){
      return a.today - b.today;
    }
    if(sortOrder === "high-to-low"){
      return b.today - a.today;
    }
    return 0;
  })


    return (
        <div>
            <div className="w-full rounded-2xl bg-[#F9FAF8] p-5 shadow-sm border border-gray-200 flex justify-end items-center gap-4 font-sans text-gray-800 mt-5" >
          <p>সাজান</p>
          <select className="select [&::picker(select)]:max-h-26"
          value={sortOrder}
          onChange={(e) => setSortOrder(e.target.value)}
          >
            <option disabled value=''>
              ডিফল্ট
            </option>
            <option value={"low-to-high"}>দাম: কম থেকে বেশি</option>
            <option value={"high-to-low"}>দাম: বেশি থেকে কম</option>
       
          </select>
        </div>

       <div className='mt-5 grid grid-cols-1 md:grid-cols-3 gap-3'>
         {
            sortedProducts.map(product => <AllProducts key={product.id} product={product}></AllProducts>)
        }
       </div>
        </div>
    );
};

export default FilteredProducts;