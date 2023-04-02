import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {Link, useNavigate} from 'react-router-dom'
import './view.css'
import { Updateapi } from '../redux/Slice'
function Viewuser() {

    const { userList } =useSelector((state)=>state.User)
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleupdate = () =>{
      dispatch(Updateapi())
      navigate('/reg')
    }

  return (
      <>
    <div className="container">
        {userList.map((item,key)=>(
          <>
          <div key={key} className="single-container-view">
            <Link to={'/'}>
            <button className='button-view-back'>Bact to User Details</button>
            </Link>
            <h4 className='heading-view'>{item.Fullname} Details</h4>
           <div className='details-div'>
            <h4>Full Name:{item.Fullname}</h4>
            <h4>_id:{item._id}</h4>
            <h4>Email ID:{item.EmailID}</h4>
            <h4>Mobile Number:{item.Phonenumber}</h4>
            <h4>City:{item.City}</h4>
            <h4>Country:{item.Country}</h4>
            <h4>Status:{item.Status}</h4>
           </div>
            <button className="btn-update" onClick={handleupdate} >Update</button>
          </div>
          </>
        ))}        
      </div>
    </>
  )
}

export default Viewuser