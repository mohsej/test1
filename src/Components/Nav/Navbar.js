import React from 'react'
import "./Navbar.css";
import {  Search, ShoppingCartOutlined } from"@material-ui/icons"
import { Badge, Input } from '@material-ui/core';




const Navbar = () => {
  return (
    <div className='container'>
    
       <div className='center'><h1 className='game'>Game<span>stop</span></h1></div>

    <div className='searchcontainer'> <Search/>
    <div className='input'>
<Input/>
    </div>
      </div>
    <div className='right'>
    <div className='reg'>REGISTER</div>
    <div className='sig'>SIGN IN </div>
    <div className='shoppingcard'>
      <Badge badgeContent={1} color="primary">
      <ShoppingCartOutlined/> 
    </Badge>
</div>
</div>

    
    
    
    
    
    </div>
    
  )
}

export default Navbar
