import { Navigate, Route, Routes } from 'react-router-dom'
import './App.css'
import Register from './pages/Register'
import Dashboard from './pages/Dashboard'


function App() {

  return (
    <>
   
     <Routes>
      
    
      <Route path='/' element={<Register/>}/>
      <Route path='/dashboard' element={<Dashboard/>}/>
     
      <Route path='/*' element={<Navigate to={'/'}/>}/>

     </Routes>
 
    </>
  )
}

export default App