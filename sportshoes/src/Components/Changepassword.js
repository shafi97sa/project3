import React, { useContext } from 'react'
import AdminContext from '../context/adminContext'

function Changepassword() {
  const {admin,up}=useContext(AdminContext)
  const x =(event)=>{
const currentpassword= document.getElementById('ss').value 
const newpassword= document.getElementById('so').value 
const newpasswordx2= document.getElementById('sa').value 
event.preventDefault()
if(admin.password==currentpassword&&newpassword==newpasswordx2){
  alert ('matches')
  up(newpassword)
}
else {alert ('does not match')}
  }
  return (
    
    <form>
    <label >current password</label><br/>
    <input id='ss' type="text"  name="fav_language" ></input><br/>
    <label >password should include a number</label><br/>
    <input id='so' type="text"  name="fav_language" ></input><br/>
    <label >password should be more than six characters long</label><br/>
    <input id='sa' type="text"  name="fav_language" ></input><br/>
<button onClick={x} type='submit'>
submit
</button>
  </form>
  )
}

export default Changepassword