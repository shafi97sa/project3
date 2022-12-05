import React, { useContext } from 'react'
import styled from 'styled-components'
import AdminContext from '../context/adminContext'
import Changepassword from './Changepassword'

function Options() {
  const {option,selectOption}=useContext(AdminContext)
  return (
    <Wrapper>
        <button onClick={()=>{selectOption(1)}}>change password</button>
        <button onClick={()=>{selectOption(2)}}>manage products</button>
        <button onClick={()=>{selectOption(3)}}>search users</button>
        <button onClick={()=>{selectOption(4)}}>purchase reports</button>
        <>
        {option===1&&<Changepassword/>}
        {option===2&&<p>option2selected</p>}
        {option===3&&<p>option3selected</p>}
        {option===4&&<p>option4selected</p>}
        {option===0&&<p>select a button</p>}
        </>
    </Wrapper>
  )
}
const Wrapper = styled.div`
   width:100%; 
   padding:10px;
   margin:0 auto;
   display:flex;
   flex-direction:column;
   button{
    width:200px;
    background-color:white;
    border:2px solid #2b3336;
    border-radius:10px;
    padding:10px;
   }
`
export default Options