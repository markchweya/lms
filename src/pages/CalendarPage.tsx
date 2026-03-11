import React from 'react'
import { useNavigate } from 'react-router-dom'

const layout: React.CSSProperties = {
  display: 'flex',
  minHeight: '100vh',
  width: '100%'
}

const sidebar: React.CSSProperties = {
  width: '250px',
  minWidth: '220px',
  background: '#1F3C88',
  color: '#fff',
  padding: '20px',
  display: 'flex',
  flexDirection: 'column'
}

const sidebarItem: React.CSSProperties = {
  padding: '10px 0',
  cursor: 'pointer'
}

const activeItem: React.CSSProperties = {
  ...sidebarItem,
  borderLeft: '4px solid #F2B705',
  paddingLeft: '10px',
  fontWeight: 600
}

const content: React.CSSProperties = {
  flex: 1,
  width: '100%',
  background: '#F5F6FA',
  padding: '16px',
  overflowX: 'auto'
}

const headerRow: React.CSSProperties = {
  display: 'grid',
  gridTemplateColumns: 'repeat(7, minmax(120px,1fr))',
  marginTop: '20px',
  fontWeight: 600,
  textAlign: 'center'
}

const grid: React.CSSProperties = {
  display: 'grid',
  gridTemplateColumns: 'repeat(7, minmax(90px,1fr))',
  width: '100%',
  border: '1px solid #ddd'
}

const cell: React.CSSProperties = {
  minHeight: '90px',
  border: '1px solid #eee',
  padding: '6px',
  fontSize: '13px',
  position: 'relative',
  background: '#fff'
}

const CalendarPage: React.FC = () => {
  const navigate = useNavigate()

  const today = new Date()
  const currentDay = today.getDate()

  const days = ['Sun','Mon','Tue','Wed','Thu','Fri','Sat']

  const dates = Array.from({length: 31}, (_,i)=>i+1)

  return (
    <div style={layout}>

      <div style={sidebar}>
        <h2 style={{marginBottom:'30px'}}>USIU Africa</h2>

        <div style={sidebarItem}>Activity</div>
        <div style={sidebarItem} onClick={()=>navigate('/dashboard/student')}>Courses</div>
        <div style={sidebarItem}>Organizations</div>
        <div style={activeItem}>Calendar</div>
        <div style={sidebarItem}>Messages</div>
        <div style={sidebarItem}>Grades</div>
        <div style={sidebarItem}>Tools</div>

        <div style={{marginTop:'auto'}}>Sign Out</div>
      </div>

      <div style={content}>

        <div style={{display:'flex',justifyContent:'space-between',alignItems:'center',flexWrap:'wrap',gap:'10px'}}>
          <h1 style={{margin:0}}>Calendar</h1>
        </div>

        <div style={{textAlign:'center',fontSize:'26px',marginTop:'10px'}}>
          Mar 2026
        </div>

        <div style={headerRow}>
          {days.map(d=> <div key={d}>{d}</div>)}
        </div>

        <div style={grid}>

          {dates.map(d=> (
            <div key={d} style={cell}>
              <div
                style={{
                  fontWeight:600,
                  width:'30px',
                  height:'30px',
                  borderRadius:'50%',
                  display:'flex',
                  alignItems:'center',
                  justifyContent:'center',
                  background:d===currentDay ? '#2C4AA5' : 'transparent',
                  color:d===currentDay ? '#fff' : '#000',
                  fontSize:'14px'
                }}
              >
                {d}
              </div>
            </div>
          ))}

        </div>

      </div>

    </div>
  )
}

export default CalendarPage
