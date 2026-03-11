import React from 'react';
import { useNavigate } from 'react-router-dom';

const layout: React.CSSProperties = {
  display: 'flex',
  height: '100vh',
  width: '100%'
};

const sidebar: React.CSSProperties = {
  width: '250px',
  background: '#1F3C88',
  color: '#fff',
  padding: '20px',
  display: 'flex',
  flexDirection: 'column'
};

const sidebarItem: React.CSSProperties = {
  padding: '10px 0',
  cursor: 'pointer'
};

const activeItem: React.CSSProperties = {
  ...sidebarItem,
  borderLeft: '4px solid #F2B705',
  paddingLeft: '10px',
  fontWeight: 600
};

const content: React.CSSProperties = {
  flex: 1,
  background: '#F5F6FA',
  padding: '30px'
};

const headerRow: React.CSSProperties = {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center'
};

const weekRow: React.CSSProperties = {
  display: 'flex',
  justifyContent: 'space-between',
  marginTop: '40px',
  alignItems: 'center'
};

const day: React.CSSProperties = {
  width: '48px',
  height: '48px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  borderRadius: '50%',
  cursor: 'pointer'
};

const activeDay: React.CSSProperties = {
  ...day,
  background: '#2C4AA5',
  color: '#fff',
  fontWeight: 600
};

const CalendarPage: React.FC = () => {
  const navigate = useNavigate();
  const days = [8,9,10,11,12,13,14];

  return (
    <div style={layout}>

      <div style={sidebar}>
        <h2 style={{marginBottom:'30px'}}>USIU Africa</h2>

        <div style={sidebarItem}>Activity</div>
        <div style={sidebarItem} onClick={() => navigate('/dashboard/student')}>Courses</div>
        <div style={sidebarItem}>Organizations</div>
        <div style={activeItem}>Calendar</div>
        <div style={sidebarItem}>Messages</div>
        <div style={sidebarItem}>Grades</div>
        <div style={sidebarItem}>Tools</div>

        <div style={{marginTop:'auto'}}>Sign Out</div>
      </div>

      <div style={content}>

        <div style={headerRow}>
          <h1>Calendar</h1>
          <div style={{display:'flex',gap:'20px'}}>
            <div>+</div>
            <div>⚙</div>
          </div>
        </div>

        <div style={{marginTop:'30px',textAlign:'center',fontSize:'28px'}}>
          Mar 2026
        </div>

        <div style={weekRow}>
          {days.map(d => (
            <div key={d} style={d===11 ? activeDay : day}>{d}</div>
          ))}
        </div>

        <div style={{marginTop:'40px'}}>
          <h3>March 11, 2026</h3>

          <div style={{marginTop:'20px',borderTop:'1px solid #ddd'}}>
            <div style={{padding:'12px 0'}}>9 AM</div>
            <div style={{padding:'12px 0'}}>10 AM</div>
            <div style={{padding:'12px 0'}}>11 AM</div>
            <div style={{padding:'12px 0'}}>12 PM</div>
          </div>

        </div>

      </div>

    </div>
  );
};

export default CalendarPage;
