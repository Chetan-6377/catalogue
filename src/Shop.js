import axios from 'axios';
import React, { useState } from 'react'
import "./App.css"
import PieChart from './PieChart';
import Products from './Products';

function Shop() {
  const [query, setquery] = useState("");
  const [product, setproduct] = useState([]);
  

  var url = `https://fakestoreapi.com/products/category/${query}`

  async function getProduct() {
    var res = await axios.get(url);
    setproduct(res.data);
    // console.log(res.data);
    console.log()
  };
  return (
    <>
      <div className="app">
        <h1 className="">Store</h1>
        <div className="app_search">
          <select value={query} className="products_input" onChange={(e) => {
            setquery(e.target.value);
          }}>
            <option value="choose">Choose</option>
            <option value="electronics">Electronics</option>
            <option value="jewelery">Jewelery</option>
            <option value="men's clothing">Men's clothing</option>
            <option value="women's clothing">Women's clothing</option>
          </select>
          <button className="submit_product" onClick={getProduct}>Search</button>
        </div>
      </div>

            <div className="">
        {product.map(id => {
          return <Products id={id} />;
        })}
      </div>

    </>
  )
}

export default Shop


