import { Spin } from 'antd'
import React from 'react'

const Loader = () => {
  return (
    <div style={{display:'flex' , alignItems:'center', justifyContent:'center' , height:'100vh'}}>
        <h5 style={{color:'gray'}}>Loading...</h5>
        <Spin/>
    </div>
  )
}

export default Loader