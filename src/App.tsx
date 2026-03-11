import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'
import React, { useEffect, useState } from 'react'
import Login from '../Login'
import StudentDashboard from './pages/StudentDashboard'
import CalendarPage from './pages/CalendarPage'
import MessagesPage from './pages/MessagesPage'
import LoadingScreen from './components/LoadingScreen'

function LecturerDashboard(){
  return <h1>Lecturer Dashboard</h1>
}

function AdminDashboard(){
  return <h1>Admin Dashboard</h1>
}

function AppRoutes(){
  const pageStyle: React.CSSProperties = {
    animation: 'pageFade 0.45s cubic-bezier(.22,1,.36,1)',
    willChange: 'opacity, transform'
  }

  const styleTag = (
    <style>{`
      @keyframes pageFade { 0% { opacity:0; transform: translateY(16px) scale(.98);} 60% { opacity:1; transform: translateY(0) scale(1.01);} 100% { opacity:1; transform: translateY(0) scale(1);} }
      @keyframes popIn { from {opacity:0; transform:scale(.95);} to {opacity:1; transform:scale(1);} }
      @keyframes slideUp { from {opacity:0; transform:translateY(20px);} to {opacity:1; transform:translateY(0);} }
    `}</style>
  )

  const location = useLocation()
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    setLoading(true)
    const timer = setTimeout(() => setLoading(false), 600)
    return () => clearTimeout(timer)
  }, [location])

  if (loading) return <LoadingScreen />

  return (
    <>
      {styleTag}
      <div style={pageStyle}>
        <Routes>
          <Route path="/" element={<Login/>} />
          <Route path="/dashboard/student" element={<StudentDashboard/>} />
          <Route path="/dashboard/lecturer" element={<LecturerDashboard/>} />
          <Route path="/dashboard/admin" element={<AdminDashboard/>} />
          <Route path="/calendar" element={<CalendarPage/>} />
          <Route path="/messages" element={<MessagesPage/>} />
        </Routes>
      </div>
    </>
  )
}

export default function App(){
  return (
    <BrowserRouter>
      <AppRoutes />
    </BrowserRouter>
  )
}
