import React from 'react'
import productList from '../ProductList/productList'
import Banner from '../Banner/Banner'
import Cards from '../Cards/Cards'

const CategoryPage = ({ title, bgImage,  categories=[]}) => {

  let filteredItems = categories.includes('All') ? productList : productList.filter(item=> categories.includes(item.category))

  const renderProduct = filteredItems.map(Product => {
    return (
      <Cards image={Product.image} name={Product.name} price={Product.price} />
    )
  })

  return (
    <div>
      <Banner title={title} bgImage={bgImage} />

      <div className='grid grid-cols-1 md:grid-cols-4 gap-9 py-20 max-w[1200px] mx-auto px-10'>
        {renderProduct}
      </div>
    </div>
  )
}

export default CategoryPage
