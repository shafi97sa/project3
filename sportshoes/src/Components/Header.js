import React from 'react'
import styled from 'styled-components'
import profile from '../images/profile.svg'
import logo from '../images/logo4.jpg'
import search from '../images/search.svg'
import basket from '../images/basket.svg'
import { useNavigate } from 'react-router-dom'
const StyledHeader = styled.div`

    display:flex;
    width:100%;
    background-color: #2b3336;
    max-width:1680px;
    max-height:80px;
    justify-content:space-between;
    align-items:center;
    margin:0 auto;
    padding: 10px;
    .logo {
        height:60px;
    }
    .search{
        display:flex;
        align-items:center;
        
    }
    .search>input{
        width:250px;
        height:30px;
        border:none;
        background-color:#2b3336;
        color:white;
    }
    .icons>img,.search>img{
        height:30px;
        margin-left:5px;
    }
`


function Header() {

    let navigate = useNavigate(); 

  const routeChange = () =>{ 
    let path = `login`; 
    navigate(path);
  }

  const homepage=()=>{
    let path = `/`
    navigate(path)
  }
  return (
    <StyledHeader>
    <img onClick={homepage} className='logo' src={logo}/>
    <div className='search'>
        <input type='text'></input>
        <img src={search}/>
    </div>
    <div className='icons'>
       <img onClick={routeChange} src={profile} />
       <img src={basket} />
       
    </div>
    </StyledHeader>
  )
}

export default Header
