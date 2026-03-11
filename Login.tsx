import React, { useState } from 'react';

const Login: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    window.location.href = '/dashboard/student';
  };

  return (
    <div style={styles.page}>
      <div style={styles.container}>
        <div style={styles.left}>
          <h1 style={styles.logo}>USIU LMS</h1>
          <p style={styles.tag}>Learning Management System</p>
        </div>

        <div style={styles.right}>
          <h2 style={styles.title}>Sign in</h2>

          <form onSubmit={handleLogin} style={styles.form}>
            <input
              type="email"
              placeholder="Email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              style={styles.input}
              required
            />

            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              style={styles.input}
              required
            />

            <button type="submit" style={styles.button}>Login</button>
          </form>
        </div>
      </div>
    </div>
  );
};

const styles: { [key: string]: React.CSSProperties } = {
  page: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
    padding: '20px',
    background: 'linear-gradient(135deg,#0f172a,#1e3a8a)'
  },
  container: {
    display: 'flex',
    flexDirection: 'row',
    width: '100%',
    maxWidth: '900px',
    background: '#ffffff',
    borderRadius: '16px',
    overflow: 'hidden',
    boxShadow: '0 20px 40px rgba(0,0,0,0.2)',
    flexWrap: 'wrap'
  },
  left: {
    flex: '1 1 300px',
    background: '#1e3a8a',
    color: '#fff',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '40px'
  },
  right: {
    flex: '1 1 320px',
    padding: '40px'
  },
  logo: {
    fontSize: '32px',
    marginBottom: '10px',
    textAlign: 'center'
  },
  tag: {
    opacity: 0.85,
    textAlign: 'center'
  },
  title: {
    marginBottom: '30px'
  },
  form: {
    display: 'flex',
    flexDirection: 'column'
  },
  input: {
    padding: '14px',
    marginBottom: '16px',
    borderRadius: '8px',
    border: 'none',
    background: '#f1f5f9',
    fontSize: '14px'
  },
  button: {
    padding: '14px',
    borderRadius: '8px',
    border: 'none',
    background: '#1e3a8a',
    color: '#fff',
    fontWeight: 'bold',
    cursor: 'pointer'
  }
};

export default Login;