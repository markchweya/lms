import React from 'react'
import { useNavigate } from 'react-router-dom'

const layout: React.CSSProperties = {
  display: 'flex',
  height: '100vh',
  width: '100%'
}

const sidebar: React.CSSProperties = {
  width: '250px',
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
  background: '#F5F6FA',
  padding: '30px',
  overflowY: 'auto'
}

const grid: React.CSSProperties = {
  display: 'grid',
  gridTemplateColumns: 'repeat(7, 1fr)',
  border: '1px solid #ddd'
}

const cell: React.CSSProperties = {
  minHeight: '120px',
  border: '1px solid #eee',
  padding: '10px',
  fontSize: '14px'
}

const headerRow: React.CSSProperties = {
  display: 'grid',
  gridTemplateColumns: 'repeat(7,1fr)',
  marginTop: '30px',
  fontWeight: 600,
  textAlign: 'center'
}

const CalendarPage: React.FC = () => {
  const navigate = useNavigate()

  const days = ['Sun','Mon','Tue','Wed','Thu','Fri','Sat']

  const dates = Array.from({length: 31}, (_,i)=>i+1)

  const blanks = new Array(0).fill(null)

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

        <div style={{display:'flex',justifyContent:'space-between',alignItems:'center'}}>
          <h1>Calendar</h1>
          <div style={{display:'flex',gap:'10px'}}>
            <button>Day</button>
            <button style={{background:'#2C4AA5',color:'#fff'}}>Month</button>
          </div>
        </div>

        <div style={{textAlign:'center',fontSize:'28px',marginTop:'10px'}}>
          Mar 2026
        </div>

        <div style={headerRow}>
          {days.map(d=> <div key={d}>{d}</div>)}
        </div>

        <div style={grid}>

          {blanks.map((_,i)=>(
            <div key={'b'+i} style={cell}></div>
          ))}

          {dates.map(d=> (
            <div key={d} style={cell}>
              <div style={{fontWeight:600}}>{d}</div>
            </div>
          ))}

        </div>

      </div>

    </div>
  )
}

export default CalendarPage
