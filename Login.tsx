import React, { useState, useEffect } from 'react';

const Login: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isMobile, setIsMobile] = useState(false);

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

  const containerStyle: React.CSSProperties = {
    display: 'flex',
    flexDirection: isMobile ? 'column' : 'row',
    height: '100vh',
    width: '100%',
    overflow: 'hidden'
  };

  const leftStyle: React.CSSProperties = {
    flex: isMobile ? '0 0 35%' : 1,
    background: '#2c448f',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '40px',
    color: 'white'
  };

  const rightStyle: React.CSSProperties = {
    flex: 1,
    background: '#f5f6fa',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '40px'
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
          <h2 style={{ marginBottom: '30px' }}>Sign in</h2>

          <form onSubmit={handleLogin} style={{ display: 'flex', flexDirection: 'column' }}>
            <input
              type="email"
              placeholder="Email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              style={{ padding: '14px', marginBottom: '16px', borderRadius: '8px', border: 'none', background: '#e9ecf2' }}
              required
            />

            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              style={{ padding: '14px', marginBottom: '16px', borderRadius: '8px', border: 'none', background: '#e9ecf2' }}
              required
            />

            <button
              type="submit"
              style={{ padding: '14px', borderRadius: '8px', border: 'none', background: '#2c448f', color: 'white', fontWeight: 'bold', cursor: 'pointer' }}
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
