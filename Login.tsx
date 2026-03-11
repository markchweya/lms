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
      <div style={styles.left}>
        <h1 style={styles.logo}>USIU LMS</h1>
        <p style={styles.tag}>Learning Management System</p>
      </div>

      <div style={styles.right}>
        <div style={styles.formBox}>
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
    height: '100vh',
    width: '100%',
    overflow: 'hidden',
    margin: 0,
    padding: 0
  },

  left: {
    flex: 1,
    background: '#2c448f',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    color: 'white'
  },

  right: {
    flex: 1,
    background: '#f5f6fa',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  },

  formBox: {
    width: '100%',
    maxWidth: '380px'
  },

  logo: {
    fontSize: '48px',
    marginBottom: '10px'
  },

  tag: {
    opacity: 0.85
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
    background: '#e9ecf2'
  },

  button: {
    padding: '14px',
    borderRadius: '8px',
    border: 'none',
    background: '#2c448f',
    color: 'white',
    fontWeight: 'bold',
    cursor: 'pointer'
  }
};

export default Login;