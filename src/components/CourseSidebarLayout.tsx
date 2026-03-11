import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'

export default function CourseSidebarLayout({ children, active }: any){
  const navigate = useNavigate()
  const { code } = useParams()

  const layout:React.CSSProperties={
    display:'flex'
  }

  const sidebar:React.CSSProperties={
    width:'230px',
    background:'#2f2f2f',
    color:'#fff',
    minHeight:'100vh',
    padding:'20px 0'
  }

  const title:React.CSSProperties={
    padding:'0 20px',
    fontWeight:600,
    marginBottom:'20px'
  }

  const item:React.CSSProperties={
    padding:'10px 20px',
    cursor:'pointer'
  }

  const activeItem:React.CSSProperties={
    ...item,
    background:'#3a3a3a',
    fontWeight:600
  }

  const content:React.CSSProperties={
    flex:1,
    background:'#F5F6FA'
  }

  return (

    <div style={layout}>

      <div style={sidebar}>

        <div style={title}>{code}</div>

        <div style={active==='home'?activeItem:item} onClick={()=>navigate('/course/'+code)}>
          Home Page
        </div>

        <div style={active==='content'?activeItem:item}>
          Content
        </div>

        <div style={active==='discussions'?activeItem:item}>
          Discussions
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

    </div>
  )
}
