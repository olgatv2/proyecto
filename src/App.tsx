import Body from './components/body/Body'
import Header from './components/header/Header'
import Footer from './components/footer/Footer'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Profile from './components/user/Profile'
import Create from './components/user/create/Create'

const App: React.FC = () => {

  return (
    <div className='app'>
      <Header />
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Body />} />
          <Route path='/profile' element={<Profile />} />   
        </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  )
}

export default App
