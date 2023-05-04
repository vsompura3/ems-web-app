import { useReducer } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Footer from './components/layout/Footer'
import Header from './components/layout/Header'
import { EMSContext, initialState } from './context/EMSContext'
import { reducer } from './context/reducer'
import About from './pages/About'
import Assignment from './pages/Assignment'
import Attendance from './pages/Attendance'
import Auth from './pages/Auth'
import Course from './pages/Course'
import Dashboard from './pages/Dashboard'
import Home from './pages/Home'
import Marks from './pages/Marks'
import NotFound from './pages/NotFound'
import Placement from './pages/Placement'
import Profile from './pages/Profile'

function App() {
  const [state, dispatch] = useReducer(reducer, initialState)
  return (
    <EMSContext.Provider value={{ state, dispatch }}>
      <BrowserRouter>
        <Header />
        <main className="flex flex-1 flex-col">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/login" element={<Auth />} />
            <Route path="/dashboard" element={<Dashboard />}>
              <Route path="/dashboard/courses" element={<Course />} />
              <Route path="/dashboard/assignment" element={<Assignment />} />
              <Route path="/dashboard/attendance" element={<Attendance />} />
              <Route path="/dashboard/marks" element={<Marks />} />
              <Route path="/dashboard/placement" element={<Placement />} />
            </Route>
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
