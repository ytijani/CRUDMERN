import { BrowserRouter, Route, Routes, useLocation, useNavigate } from 'react-router-dom'
import Home, { Navbar } from './component/Home'
import AddCustomers from './component/AddCustomers'
import Login from './component/Login'
import Register from './component/Register'

function App() {

  return (
    <BrowserRouter>
      <div className='flex gap-[20px]'>
        <Navbar />
        <Routes>
          <Route path='home' element={<Home />} />
          <Route path='addcustomers' element={<AddCustomers />} />
          <Route path='/' element={<Login />} />
          <Route path='/register' element={<Register />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App