import React, {useState, useEffect} from 'react';
import Link from 'next/link';
import {BsBagCheckFill} from 'react-icons/bs';
import { runFireworks } from '../lib/utils';


import { useStateContext } from '../context/StateContext';


const success = () => {
    const {setCartItems, setTotalPrice, setTotalQuantities} = useStateContext();

    useEffect(() => {
        localStorage.clear();
        setCartItems([]);
        setTotalPrice(0);
        setTotalQuantities(0);
        runFireworks();
  
    }, [])
    


  return (
    <div className='success-wrapper'>
        <div className='success'>
            <p className='icon'>
                <BsBagCheckFill/>
                <h2>Thank you for your order!</h2>
                <p className='email-msg'>Check your email inbox for your receipt.</p>
                <p className='description'>
                    If you have any questions, please email
                    <a href="mailto:okeyemiomotoke@gmail.com" className='email'>
                        okeyemiomotoke@gmail.com
                    </a>
                </p>
                <Link 
                href="/"
                >
                    <button
                    type='button' width="300px" className='btn'>
                        Continue Shopping
                    </button>
                </Link>
            </p>
        </div>
      
    </div>
  )
}

export default success
