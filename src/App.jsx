import React, { useState } from 'react'
import Landing from './Pages/Landing'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Patients from './Pages/Patients'
import PatientCard from './Pages/PatientCard'

function App() {
  const [det,setdet] = useState('')
  
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path="/" element ={<Landing/>}/>
        <Route path='/patients' element = {<Patients setdet={setdet}/>}/>
        <Route path='/patients/info' element ={<PatientCard det={det}/>}/>
        

        
      </Routes>
      </BrowserRouter>


      
    </div>
  )
}

export default App
