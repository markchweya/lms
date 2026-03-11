import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Login from '../Login'

import StudentDashboard from './pages/StudentDashboard'
import CalendarPage from './pages/CalendarPage'

// placeholder dashboards removed

function LecturerDashboard(){
  return <h1>Lecturer Dashboard</h1>
}

function AdminDashboard(){
  return <h1>Admin Dashboard</h1>
}

export default function App(){
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login/>} />
        <Route path="/dashboard/student" element={<StudentDashboard/>} />
        <Route path="/dashboard/lecturer" element={<LecturerDashboard/>} />
        <Route path="/dashboard/admin" element={<AdminDashboard/>} />
        <Route path="/calendar" element={<CalendarPage/>} />
      </Routes>
    </BrowserRouter>
  )
}
