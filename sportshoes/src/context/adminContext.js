import React, {createContext, useEffect, useState } from "react";


export const  AdminContext = createContext()
export const AdminProvider = ({ children }) => {
  const [option, setOption] = useState(0)
  const [admin, setAdmin] = useState([])
/
  useEffect(() => {
    fetchAdminData();
    
  },[])


    const fetchAdminData = async () => {
      const response = await fetch("http://localhost:8000/admin")
      const data = await response.json()
      setAdmin(data[0])
    }
    

    const up = async (newpassword) =>{
      admin.password=newpassword
      const response = await fetch("http://localhost:8000/admin/1",{
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body:JSON.stringify(admin)
      })
      alert("NEW PASSWORD IS: "+ admin.password)
    }

    const selectOption = (x) => {
      setOption(x)
      console.log(option)
    }

    return <AdminContext.Provider 
    value={{admin,option,selectOption,up}}
    >
      {children}
      </AdminContext.Provider>
    };

  export default AdminContext