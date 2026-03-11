import React from 'react'
import SidebarLayout from '../components/SidebarLayout'

const content: React.CSSProperties = {
  flex: 1,
  width: '100%',
  background: '#F5F6FA',
  padding: '16px',
  boxSizing: 'border-box'
}

const headerRow: React.CSSProperties = {
  display: 'grid',
  gridTemplateColumns: 'repeat(7, 1fr)',
  marginTop: '20px',
  fontWeight: 600,
  textAlign: 'center'
}

const grid: React.CSSProperties = {
  display: 'grid',
  gridTemplateColumns: 'repeat(7, 1fr)',
  width: '100%',
  border: '1px solid #ddd'
}

const cell: React.CSSProperties = {
  minHeight: '60px',
  border: '1px solid #eee',
  padding: '4px',
  fontSize: '12px',
  position: 'relative',
  background: '#fff'
}

const CalendarPage: React.FC = () => {
  const today = new Date()
  const currentDay = today.getDate()

  const days = ['Sun','Mon','Tue','Wed','Thu','Fri','Sat']
  const dates = Array.from({length: 31}, (_,i)=>i+1)

  return (
    <SidebarLayout active="calendar">

      <div style={content}>

        <h1 style={{margin:0}}>Calendar</h1>

        <div style={{textAlign:'center',fontSize:'22px',marginTop:'10px'}}>
          Mar 2026
        </div>

        <div style={{overflowX:'auto'}}>

          <div style={headerRow}>
            {days.map(d=> <div key={d}>{d}</div>)}
          </div>

          <div style={grid}>
            {dates.map(d=> (
              <div key={d} style={cell}>
                <div
                  style={{
                    fontWeight:600,
                    width:'26px',
                    height:'26px',
                    borderRadius:'50%',
                    display:'flex',
                    alignItems:'center',
                    justifyContent:'center',
                    background:d===currentDay ? '#2C4AA5' : 'transparent',
                    color:d===currentDay ? '#fff' : '#000'
                  }}
                >
                  {d}
                </div>
              </div>
            ))}
          </div>

        </div>

      </div>

    </SidebarLayout>
  )
}

export default CalendarPage
