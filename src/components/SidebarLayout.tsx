import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

export default function SidebarLayout({ children, active }: any){
  const [open, setOpen] = useState(false)
  const navigate = useNavigate()

  const sidebar: React.CSSProperties = {
    position:'fixed',
    left:0,
    top:0,
    height:'100vh',
    width:'250px',
    background:'#1F3C88',
    color:'#fff',
    padding:'20px',
    display:'flex',
    flexDirection:'column',
    transform: open ? 'translateX(0)' : 'translateX(-100%)',
    transition:'transform 0.25s ease',
    zIndex:1000
  }

  const overlay: React.CSSProperties = {
    position:'fixed',
    inset:0,
    backdropFilter:'blur(4px)',
    background:'rgba(0,0,0,0.2)',
    zIndex:900
  }

  const content: React.CSSProperties = {
    minHeight:'100vh',
    height:'100vh',
    overflowY:'auto',
    background:'#F5F6FA',
    padding:'20px'
  }

  const item: React.CSSProperties = { padding:'10px 0', cursor:'pointer' }

  const activeItem: React.CSSProperties = {
    ...item,
    borderLeft:'4px solid #F2B705',
    paddingLeft:'10px',
    fontWeight:600
  }

  return (
    <>

      <div
        onClick={()=>setOpen(!open)}
        style={{
          position:'fixed',
          top:'15px',
          left: open ? '265px' : '15px',
          fontSize:'18px',
          cursor:'pointer',
          zIndex:1100,
          background:'#2b2b2b',
          color:'#fff',
          padding:'6px 10px',
          borderRadius:'8px',
          transition:'left 0.25s ease'
        }}
        title={open ? 'Close sidebar' : 'Open sidebar'}
      >
        {open ? '❮' : '☰'}
      </div>

      {open && <div style={overlay} onClick={()=>setOpen(false)} />}

      <div style={sidebar}>
        <h2 style={{marginTop:0}}>USIU Africa</h2>

        <div style={{marginTop:'30px'}}>
          <div style={active==='activity'?activeItem:item}>Activity</div>
          <div style={active==='courses'?activeItem:item} onClick={()=>navigate('/dashboard/student')}>Courses</div>
          <div style={active==='calendar'?activeItem:item} onClick={()=>navigate('/calendar')}>Calendar</div>
          <div style={active==='messages'?activeItem:item} onClick={()=>navigate('/messages')}>Messages</div>
          <div style={item}>Grades</div>
          <div style={item}>Tools</div>
        </div>

        <div style={{marginTop:'auto'}}>Sign Out</div>
      </div>

      <div style={{...content, filter: open ? 'blur(3px)' : 'none', transition:'filter 0.2s'}}>
        {children}
      </div>

    </>
  )
}