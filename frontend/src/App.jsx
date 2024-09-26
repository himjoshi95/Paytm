import {Routes,Route} from 'react-router-dom'
import Home from './Pages/Home'
import About from './Pages/About'
import Contact from './Pages/Contact'
import Signup from './Pages/Signup'
import Signin from './Pages/Signin'
import Dashboard from './Pages/Dashboard'
import SendMoney from './Pages/SendMoney'
import Navbar from './components/Navbar'
import { Footer } from './components/Footer'
function App() {
  return (
    <>           
        <Navbar/>
        <Routes>
          <Route path='/' element={<Home/>}></Route>
          <Route path='/about' element={<About/>}></Route>
          <Route path='/contact' element={<Contact/>}></Route>
          <Route path='/signup' element={<Signup/>}></Route>
          <Route path='/signin' element={<Signin/>}></Route>
          <Route path='/dashboard' element={<Dashboard/>}></Route>
          <Route path='/send' element={<SendMoney/>}></Route>
        </Routes>
        <Footer/>

    </>
  )
}

export default App
