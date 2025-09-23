import React from 'react'
import './PatientCard.css'
import data from "../Assets/data.json"
import  profile from '../Assets/profile.jpg'
import left from '../Assets/left.svg'
import { Link } from 'react-router-dom'

function PatientCard({det}) {
    
     const resp = data.find((item)=>
        item.id===det
    )
   console.log(resp)
  return (
    <div className='card-container'>
        <div className='list'>
            <div className='list-basics'>
                <div> <Link to='/patients' ><img  style={{width:'30px'}} src={left}alt="" /> </Link> </div>
            <div className='img'> <img style={{height:'30px', width:'30px'}} src={profile}alt="" /> </div>
            <h2> Name:{resp.patientName}</h2>
            </div>
            <div className='list-moderate'>
            <h3>Age:{resp.age}</h3>
            <h3>Contact:{resp.contact}</h3>
            <h4>Place:Visakhapatnam</h4>


            </div>
            
            

        </div>
        
        
      
    </div>
  )
}

export default PatientCard
