import React, { useState } from 'react';

const Login: React.FC = () => {
  const [role, setRole] = useState('student');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();

    if (role === 'student') {
      window.location.href = '/dashboard/student';
    } else if (role === 'lecturer') {
      window.location.href = '/dashboard/lecturer';
    } else if (role === 'admin') {
      window.location.href = '/dashboard/admin';
    }
  };

  return (
    <div style={styles.page}>
      <div style={styles.card}>
        <h1 style={styles.brand}>USIU LMS</h1>
        <h2>Login</h2>

        <form onSubmit={handleLogin}>
          <label>Login As</label>
          <select value={role} onChange={(e) => setRole(e.target.value)} style={styles.input}>
            <option value="student">Student</option>
            <option value="lecturer">Lecturer</option>
            <option value="admin">Admin</option>
          </select>

          <label>Email</label>
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            style={styles.input}
            required
          />

          <label>Password</label>
          <input
            type="password"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            style={styles.input}
            required
          />

          <button type="submit" style={styles.button}>Login</button>
        </form>
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
    background: '#f4f6f9',
  },
  card: {
    background: '#ffffff',
    padding: '30px',
    borderRadius: '10px',
    width: '350px',
    boxShadow: '0 4px 10px rgba(0,0,0,0.1)',
  },
  brand: {
    textAlign: 'center',
    color: '#002f6c',
  },
  input: {
    width: '100%',
    padding: '10px',
    marginTop: '5px',
    marginBottom: '10px',
    borderRadius: '5px',
    border: '1px solid #ccc',
  },
  button: {
    width: '100%',
    padding: '10px',
    background: '#002f6c',
    color: '#fff',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    fontWeight: 'bold',
  },
};

export default Login;
