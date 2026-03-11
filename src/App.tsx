import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'
import React, { useEffect, useState } from 'react'
import Login from '../Login'
import StudentDashboard from './pages/StudentDashboard'
import CalendarPage from './pages/CalendarPage'
import LoadingScreen from './components/LoadingScreen'

function LecturerDashboard(){
  return <h1>Lecturer Dashboard</h1>
}

function AdminDashboard(){
  return <h1>Admin Dashboard</h1>
}

function AppRoutes(){
  const location = useLocation()
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    setLoading(true)
    const timer = setTimeout(() => setLoading(false), 600)
    return () => clearTimeout(timer)
  }, [location])

  if (loading) return <LoadingScreen />

  return (
    <Routes>
      <Route path="/" element={<Login/>} />
      <Route path="/dashboard/student" element={<StudentDashboard/>} />
      <Route path="/dashboard/lecturer" element={<LecturerDashboard/>} />
      <Route path="/dashboard/admin" element={<AdminDashboard/>} />
      <Route path="/calendar" element={<CalendarPage/>} />
    </Routes>
  )
}

export default function App(){
  return (
    <BrowserRouter>
      <AppRoutes />
    </BrowserRouter>
  )
}
