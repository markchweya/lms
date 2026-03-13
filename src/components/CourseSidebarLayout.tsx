import React, { useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

export default function CourseSidebarLayout({ children, active }: any){
  const navigate = useNavigate()
  const { code } = useParams()
  const [open,setOpen] = useState(true)

  const layout:React.CSSProperties={
    display:'flex'
  }

  const sidebar:React.CSSProperties={
    position:'fixed',
    left:0,
    top:0,
    height:'100vh',
    overflowY:'auto',
    width:'230px',
    background:'#F2B705',
    color:'#1a1a1a',
    minHeight:'100vh',
    padding:'20px 0',
    transform: open ? 'translateX(0) scale(1)' : 'translateX(-100%) scale(0.98)',
    boxShadow:'2px 0 15px rgba(0,0,0,0.25)',
    transition:'transform 0.35s cubic-bezier(.25,.8,.25,1)',
    zIndex:1000
  }

  const overlay:React.CSSProperties={
    position:'fixed',
    inset:0,
    backdropFilter:'blur(4px)',
    background:'rgba(0,0,0,0.2)',
    zIndex:900
  }

  const toggle:React.CSSProperties={
    position:'fixed',
    top:'15px',
    left: open ? '245px' : '15px',
    cursor:'pointer',
    background:'#2b2b2b',
    color:'#fff',
    padding:'6px 10px',
    borderRadius:'8px',
    zIndex:1100,
    transition:'left 0.25s ease'
  }

  const title:React.CSSProperties={
    padding:'0 20px',
    fontWeight:700,
    marginBottom:'20px'
  }

  const item:React.CSSProperties={
    padding:'12px 20px',
    cursor:'pointer'
  }

  const activeItem:React.CSSProperties={
    ...item,
    background:'#e0a800',
    fontWeight:700
  }

  const content:React.CSSProperties={
    flex:1,
    background:'#F5F6FA'
  }

  return (

    <>

      <div style={toggle} onClick={()=>setOpen(!open)}>
        {open ? '❮' : '☰'}
      </div>

      {open && <div style={overlay} onClick={()=>setOpen(false)} />}

      <div style={sidebar}>

        <div style={title}>{code}</div>

        <div style={{...item,display:'flex',alignItems:'center',gap:'10px'}} onClick={()=>navigate('/dashboard/student')}>
          <span style={{fontSize:'24px'}}>⌂</span>
        </div>

        <div style={active==='home'?activeItem:item} onClick={()=>navigate(`/course/${code}`)}>
          Home Page
        </div>

        <div style={active==='content'?activeItem:item} onClick={()=>navigate(`/course/${code}/content`)}>
          Content
        </div>


        <div style={active==='grades'?activeItem:item}>
          My Grades
        </div>

        <div style={active==='groups'?activeItem:item}>
          Groups
        </div>

        <div style={active==='tools'?activeItem:item}>
          Tools
        </div>

        <div style={active==='help'?activeItem:item}>
          Help
        </div>

      </div>

      <div style={content}>
        {children}
      </div>

    </>

  )
}
