
import React from 'react'
import {BiSearch} from 'react-icons/bi';
import home from '../assets/home.png'
export default function Home() {
  return (
    <div className='home'>
        <div className='container mx-3 py-3'>
            <div className='title-container'>
                <h2>Browse Million Products for your Needs</h2>
                <div className='input-container'>
                    <input type='text' placeholder='Enter Your Search'></input>
                    <div className='icon'>
                        <BiSearch/>
                    </div>
                </div>
            </div>
            <div className='extra-image'>
                <img src={home} alt=''/>
            </div>
        </div>
    </div>
  )
}
