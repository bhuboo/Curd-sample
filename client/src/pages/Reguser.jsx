import React, { useState } from 'react'
import axios from 'axios';
import './reg.css'
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

function Reguser() {

  const { userList,Regtype } =useSelector((state)=>state.User)
  const navigate = useNavigate();

   const [data,setdata]=useState({
    name:'',
    email:'',
    number:'',
    password:'',
    cpassword:'',
    city:'',
    country:'',
    status:'',
    id:'',
   })
 

   console.log(userList);

   const handleSubmit =  async (e) =>{
    e.preventDefault()
    setdata({...data,id:userList[0]._id})
    if(Regtype === 'Update'){
      if(data.password !== data.cpassword){
        alert("Paswword and confirm password must be same")
      }
      console.log(data);

      let message = await axios.put('http://localhost:8000/updateuser',data)
      if(message){
        return alert(`${message.data.message}`)
      }
      navigate('/')
    }else{
      if(data.password !== data.cpassword){
        alert("Paswword and confirm password must be same")
      }
    let message = await axios.post('http://localhost:8000/Reguser',data)

    console.log(message);

    if(message){
      return alert(`${message.data.message}`)
    }
  }
   }
  return (
    <>
    <div className='container'>
        
        <form action="" className='form-style' onSubmit={handleSubmit}>
        <h1>Register User Details</h1>
            <input type="text"  id=""  placeholder={Regtype === 'Update' ? `${userList[0].Fullname}` :'Full Name'} className='input'  onChange={(e)=>setdata({...data,name:e.target.value})} required/>
            <input type="email"  id=""  placeholder={Regtype === 'Update' ?  `${userList[0].EmailID}` :'Email'} className='input' onChange={(e)=>setdata({...data,email:e.target.value})} required/>
            <input type="text"  id=""  placeholder={Regtype === 'Update' ?  `${userList[0].Phonenumber}` :'Mobile Number'} className='input' onChange={(e)=>setdata({...data,number:e.target.value})} required/>
            <input type="text"  id=""   placeholder={Regtype === 'Update' ?  `${userList[0].City}` :'City'} className='input' onChange={(e)=>setdata({...data,city:e.target.value})} required/>
            <input type="text"  id=""  placeholder={Regtype === 'Update' ? `${userList[0].Country}` :'Country'} className='input' onChange={(e)=>setdata({...data,country:e.target.value})} required/>
            <input type="text"  id=""  placeholder='Status : you can enter Active or inactive' className='input' onChange={(e)=>setdata({...data,status:e.target.value})} required/>
            
            <input type="text"  id="" placeholder={Regtype === 'Update' ? 'New Password' :'Password'} className='input' onChange={(e)=>setdata({...data,password:e.target.value})} required/>
            <input type="text"  id="" placeholder={Regtype === 'Update' ? 'Confirm New Password' :'Confirm Password'} className='input' onChange={(e)=>setdata({...data,cpassword:e.target.value})} required/>
            <input type="submit" value="Submit" className='input-btn'/>
        </form>
    </div>
    </>
  )
}

export default Reguser;