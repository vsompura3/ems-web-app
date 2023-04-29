import { useReducer } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Footer from './components/layout/Footer'
import Header from './components/layout/Header'
import { EMSContext, initialState } from './context/EMSContext'
import { reducer } from './context/reducer'
import About from './pages/About'
import Auth from './pages/Auth'
import Dashboard from './pages/Dashboard'
import Home from './pages/Home'
import NotFound from './pages/NotFound'
import Profile from './pages/Profile'

function App() {
  const [state, dispatch] = useReducer(reducer, initialState)
  return (
    <EMSContext.Provider value={{ state, dispatch }}>
      <BrowserRouter>
        <Header />
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/login" element={<Auth />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/account" element={<Profile />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
        <Footer />
      </BrowserRouter>
    </EMSContext.Provider>
  )
}

export default App
