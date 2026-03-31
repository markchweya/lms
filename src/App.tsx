import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import Login from './Login';
import AdminDashboard from './admin/AdminDashboard';
import StudentDashboard from './pages/StudentDashboard';
import CalendarPage from './pages/CalendarPage';
import MessagesPage from './pages/MessagesPage';
import ProfilePage from './pages/ProfilePage';
import CourseHomePage from './pages/CourseHomePage';
import ContentPage from './pages/ContentPage';
import ContactsPage from './pages/ContactsPage';

function getDefaultRoute() {
  const role = window.localStorage.getItem('role');

  if (role === 'admin') {
    return '/dashboard/admin';
  }

  if (role === 'student') {
    return '/dashboard/student';
  }

  return '/login';
}

function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to={getDefaultRoute()} replace />} />
      <Route path="/login" element={<Login />} />
      <Route path="/login.html" element={<Login />} />
      <Route path="/dashboard/student" element={<StudentDashboard />} />
      <Route path="/dashboard/admin" element={<AdminDashboard />} />
      <Route path="/calendar" element={<CalendarPage />} />
      <Route path="/messages" element={<MessagesPage />} />
      <Route path="/profile" element={<ProfilePage />} />
      <Route path="/course/:code" element={<CourseHomePage />} />
      <Route path="/course/:code/content" element={<ContentPage />} />
      <Route path="/course/:code/contacts" element={<ContactsPage />} />
      <Route path="*" element={<Navigate to={getDefaultRoute()} replace />} />
    </Routes>
  );
}

export default App;
