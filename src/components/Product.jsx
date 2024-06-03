import React from 'react'
import compare1 from "../assets/compare1.png"
import compare2 from "../assets/compare2.png"
import osimage from "../assets/os.png"
import processorimage from '../assets/processor.png'
import {BsChevronDown} from 'react-icons/bs'
export default function Product() {
  const product=[
    {
      image:compare1,
      name:"Asus Zenbook Pro",
      model:"UX-430 US",
      processor:"Intel&reg; Core&trade; i37100L",
      os:"Window 10 Pro for business",
    },
    {
      image:compare2,
      name:"Lenevo Legion",
      model:"Y545 2022",
      processor:"Intel&reg; Core&trade; i7 9100L",
      os:"Window 10 Pro for Enterprise",
    },
    {
      image:compare1,
      name:"Acer Swift Air",
      model:"5F-313 51",
      processor:"Intel&reg; Core&trade; i37100L",
      os:"Window 10 for business",
    },
    {
      image:compare2,
      name:"Lenovo Thinkpad Y51",
      model:"X1 2022",
      processor:"Intel&reg; Core&trade; i5 8000c",
      os:"Window 10 Pro for business",
    },
  ];
  return (
    <div className='product-container mx-3 py-3'>
     <div className='container'>
      <div className='title-container'>
        <h2>Compare the Products</h2>
        <button>New Comparison</button>
      </div>
      <div className='products'>
        {
          product.map(({image,name,model,processor,os},index)=>{
            return(
                 <div className='product' key={index}>
                   <div className='image'>
                    <img src={image} alt='compare'/></div>
                    <h4>{name}</h4>
                    <h4>{model}</h4>
                    <hr/>
                    <div className='processor'>
                      <img src={processorimage} alt='processor'/>
                      <h4>processor</h4>
                       <p>{processor}</p>
                    </div>
                    <div className='os'>
                      <img src={osimage} alt='osimage'></img>
                      <h4>Operating System</h4>
                      <p>{os}</p>
                    </div>
                    <BsChevronDown/>
                 </div>
            );
          })
        }
      </div>
     </div>
    </div>
  )
}
