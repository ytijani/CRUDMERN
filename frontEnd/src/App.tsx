import { BrowserRouter, Route, Routes} from 'react-router-dom'
import Home from './component/Home'
import AddCustomers from './component/AddCustomers'
import Login from './component/Login'
import Register from './component/Register'
import { ToastContainer } from 'react-toastify';

function App() {

  return (
    <BrowserRouter>
        <ToastContainer />
        <Routes>
          <Route path='home' element={<Home />} />
          <Route path='addcustomers' element={<AddCustomers />} />
          <Route path='/' element={<Login />} />
          <Route path='/register' element={<Register />} />
        </Routes>
    </BrowserRouter>
  );
}

export default App