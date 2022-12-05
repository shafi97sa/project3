import React, { useContext, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components'
import AdminContext from '../context/adminContext';


function LoginForm() {
    const{admin}=useContext(AdminContext)
    let navigate = useNavigate(); 
    const routeChange = () =>{ 
      let path = `admin`; 
      navigate(path);
    }
 function handleClick(e){
    e.preventDefault();
    const uLogin = document.getElementById('userlogin').value
    const uPassword = document.getElementById('userpassword').value
    if(uLogin==admin.username&&uPassword==admin.password){
        alert('Username is correct')
        alert('Password is correct')
        routeChange();
    }else{
        alert('Please check your credentials.')
        alert('username is .'+admin.username)
        alert('username is .'+admin.password)
    }
}   

 return (
    <StyledContainer>
        <form >
            <div>
                <h1>Sign in:</h1>
            </div>
            <div clasName="container">
                <label for="uname"><b>Username</b></label>
                <input id='userlogin' type="text" placeholder="Enter Username" name="uname" required /><br/>
                <label for="psw"><b>Password </b></label>
                <input id='userpassword' type="text" placeholder="Enter Password" name="psw" required /><br/>
                <button onClick={handleClick} type="submit">Login</button>
            </div>
        </form>
    </StyledContainer>
  )
}
const adminDetails = {
    userName:"admin",
    passWord:"admin123"
}
const StyledContainer = styled.div`
    margin:0 auto;
    width:100%;
    max-width:1480px;
    margin-top:50px;
    h1,label,input{
        color:#012c78;
    }
    input{
        margin-left:25px;
        margin-bottom:10px;
    }
    button{
        margin-top:50px;
        margin-left:205px;
        background-color:#012c78;
        color:white;
        padding:8px 16px;
        border-radius:10px;
    }
`

export default LoginForm