import { useContextCart } from '@/context/CardContext'
import React from 'react'
import Cards from './Cards'
const Category = () => {
  
    let {obj}=useContextCart()
    let product=obj.products.filter((prod)=>prod.category===obj.category)
  return (
    <div className='mt-5'>
     <Cards products={product} categoryname={obj.category.toUpperCase()}/>
    </div>
  )
}
export default Category