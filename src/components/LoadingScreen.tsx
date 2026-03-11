import React from 'react';

const container: React.CSSProperties = {
  height: '100vh',
  width: '100%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  background: '#F5F6FA'
};

const spinner: React.CSSProperties = {
  width: '60px',
  height: '60px',
  border: '6px solid #E0E3F0',
  borderTop: '6px solid #2C4AA5',
  borderRadius: '50%',
  animation: 'spin 1s linear infinite'
};

const style = `
@keyframes spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}
`;

const LoadingScreen: React.FC = () => {
  return (
    <div style={container}>
      <style>{style}</style>
      <div style={spinner}></div>
    </div>
  );
};

export default LoadingScreen;
