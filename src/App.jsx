import { useState } from 'react'
import './styles/layout.css'
import './styles/main.css'
import './App.css'
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Home from './pages/Home'
import Dashboard from './pages/user/Dashboard'
import Layout from './components/Layout/Layout'
import Tasks from './pages/user/Tasks'
import NotFound from './pages/NotFound'
import Login from './pages/auth/Login'
import Signup from './pages/auth/Signup'

function App() {

  return (
    <Router>
      <Routes>
        <Route path='/' exact element={<Home/>} />

        <Route path='/login' element={<Login/>} />
        <Route path='/signup' element={<Signup/>} />

        <Route element={<Layout />}>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/tasks" element={<Tasks />} />
        </Route>

        <Route path="/*" element={<NotFound />} />
      </Routes>

    </Router>
  )
}

export default App
