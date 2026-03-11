import React, { useState, useEffect } from 'react';

const Login: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isMobile, setIsMobile] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768);
    check();
    window.addEventListener('resize', check);
    return () => window.removeEventListener('resize', check);
  }, []);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    window.location.href = '/dashboard/student';
  };

  const toggleDark = () => setDarkMode(!darkMode);

  const containerStyle: React.CSSProperties = {
    display: 'flex',
    flexDirection: isMobile ? 'column' : 'row',
    height: '100vh',
    width: '100%',
    overflow: 'hidden',
    background: darkMode ? '#0f172a' : '#ffffff'
  };

  const leftStyle: React.CSSProperties = {
    flex: isMobile ? '0 0 35%' : 1,
    background: darkMode ? '#1F3C88' : '#2C4AA5',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '40px',
    color: 'white'
  };

  const rightStyle: React.CSSProperties = {
    flex: 1,
    background: darkMode ? '#111827' : '#FFFFFF',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '40px',
    color: darkMode ? '#FFFFFF' : '#000000'
  };

  return (
    <div style={containerStyle}>
      <div style={leftStyle}>
        <div style={{ textAlign: 'center' }}>
          <h1 style={{ fontSize: isMobile ? '32px' : '56px', marginBottom: '10px' }}>USIU LMS</h1>
          <p style={{ opacity: 0.9 }}>Learning Management System</p>
        </div>
      </div>

      <div style={rightStyle}>
        <div style={{ width: '100%', maxWidth: '380px' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '30px' }}>
            <h2>Sign in</h2>
            <button onClick={toggleDark} style={{ border:'none', background:'transparent', cursor:'pointer', display:'flex', alignItems:'center', justifyContent:'center' }}>
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                {darkMode ? (
                  <path d="M12 4.5V2M12 22v-2.5M4.5 12H2M22 12h-2.5M5.64 5.64L4.22 4.22M19.78 19.78l-1.42-1.42M5.64 18.36L4.22 19.78M19.78 4.22l-1.42 1.42M12 18a6 6 0 100-12 6 6 0 000 12z" stroke={darkMode ? '#ffffff' : '#f2b705'} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                ) : (
                  <path d="M21 12.79A9 9 0 1111.21 3c0 .34.02.67.05 1A7 7 0 0020 13a7.16 7.16 0 001-.21z" fill="currentColor"/>
                )}
              </svg>
            </button>
          </div>

          <form onSubmit={handleLogin} style={{ display: 'flex', flexDirection: 'column' }}>
            <input
              type="email"
              placeholder="Email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              style={{ padding: '14px', marginBottom: '16px', borderRadius: '8px', border: 'none', background: darkMode ? '#1f2937' : '#e9ecf2', color: darkMode ? '#fff' : '#000' }}
              required
            />

            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              style={{ padding: '14px', marginBottom: '16px', borderRadius: '8px', border: 'none', background: darkMode ? '#1f2937' : '#e9ecf2', color: darkMode ? '#fff' : '#000' }}
              required
            />

            <button
              type="submit"
              style={{ padding: '14px', borderRadius: '8px', border: 'none', background: '#2C4AA5', color: 'white', fontWeight: 'bold', cursor: 'pointer' }}
            >
              Login
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;