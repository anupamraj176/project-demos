import React from 'react'
import { FaStar } from "react-icons/fa";
import { FaShoppingBag } from "react-icons/fa";
import './Product.css'
import Card from '../components/Card';

const Products = () => {
  return (
    <>
        <section className='card-container'>
           <Card/>
           <Card/>
           <Card/>
           <Card/>
           <Card/>
           <Card/>
           <Card/>
           <Card/>
           <Card/>
        </section>
    </>
  )
}

export default Products