import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'
import React, { useEffect, useState } from 'react'
import Login from '../Login'
import StudentDashboard from './pages/StudentDashboard'
import CalendarPage from './pages/CalendarPage'
import MessagesPage from './pages/MessagesPage'
import CourseHomePage from './pages/CourseHomePage'
import ContactsPage from './pages/ContactsPage'
import ContentPage from './pages/ContentPage'
import LoadingScreen from './components/LoadingScreen'

function LecturerDashboard(){
  return <h1>Lecturer Dashboard</h1>
}

function AdminDashboard(){
  return <h1>Admin Dashboard</h1>
}

function AppRoutes(){
  const pageStyle: React.CSSProperties = {
    animation: 'pageSlide 0.35s ease',
    willChange: 'transform, opacity'
  }

  const styleTag = (
    <style>{`
      @keyframes pageSlide {
        0% { opacity:0; transform: translateX(40px); }
        100% { opacity:1; transform: translateX(0); }
      }
      @keyframes pageSlideOut {
        0% { opacity:1; transform: translateX(0); }
        100% { opacity:0; transform: translateX(-40px); }
      }
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
          <Route path="/course/:code" element={<CourseHomePage/>} />
          <Route path="/course/:code/content" element={<ContentPage/>} />
          <Route path="/course/:code/contacts" element={<ContactsPage/>} />
          import CourseHomePage from './pages/CourseHomePage'

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
