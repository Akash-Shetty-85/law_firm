import React from 'react'
import './newsletters.css'
const Newsletter = () => {
  return (
    <div className='newsletter-section' style={{background:"balck"}}>

        <div style={{display:'flex', justifyContent:'center', fontSize:'30px',color:'white'}}>
            <h1 >Subscribe Our Newsletter</h1>
        </div>
        <div className='newsletters-input'>
            <input type="text" name="" id="" placeholder='Name:' className='name'/>
            <input type="email" placeholder='Enter your Email' className='email' />
            <button className='send'>SEND</button>
        </div>
    </div>
  )
}

export default Newsletter