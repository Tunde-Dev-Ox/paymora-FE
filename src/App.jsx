import {Route, Routes, BrowserRouter} from 'react-router-dom'
import Home from './views/home'
import Pricing from './views/pricing'
import About from './views/about'
import GetStarted from './views/auth/get-started'
import WhyPaymoraForSchools from './views/whyPaymoraForSchools'
import Success from './views/auth/get-started/success'
import Login from './views/auth/login'

function App() {

  return (
    <>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/about" element={<About />} />
        <Route path="/get-started" element={<GetStarted />} />
        <Route path="/why-paymora-for-schools" element={<WhyPaymoraForSchools />} />
        <Route path="/get-started/success" element={<Success />} />
        <Route path="/auth/login" element={<Login />} />
        {/* Add more routes as needed */}
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
