import React from 'react'
import { useParams } from 'react-router-dom'
import CourseSidebarLayout from '../components/CourseSidebarLayout'

function ContactCard({name,email,role}:{name:string,email:string,role:string}){

  const card:React.CSSProperties={
    background:'#ffffff',
    borderRadius:'10px',
    padding:'20px',
    boxShadow:'0 6px 18px rgba(0,0,0,0.08)',
    display:'flex',
    flexDirection:'column',
    gap:'6px'
  }

  const nameStyle:React.CSSProperties={
    fontWeight:700,
    fontSize:'18px'
  }

  const roleStyle:React.CSSProperties={
    color:'#666',
    fontSize:'14px'
  }

  const emailStyle:React.CSSProperties={
    color:'#2563eb',
    fontSize:'14px'
  }

  return (
    <div style={card}>
      <div style={nameStyle}>{name}</div>
      <div style={roleStyle}>{role}</div>
      <div style={emailStyle}>{email}</div>
    </div>
  )
}

export default function ContactsPage(){

  const { code } = useParams()

  const page:React.CSSProperties={
    padding:'40px',
    background:'#F5F6FA',
    minHeight:'100vh'
  }

  const header:React.CSSProperties={
    fontSize:'30px',
    fontWeight:800,
    marginBottom:'25px'
  }

  const grid:React.CSSProperties={
    display:'grid',
    gridTemplateColumns:'repeat(auto-fit, minmax(250px,1fr))',
    gap:'20px',
    maxWidth:'900px'
  }

  return (

    <CourseSidebarLayout active="contacts">

      <div style={page}>

        <div style={header}>Professor Contacts</div>

        <div style={grid}>

          <ContactCard
            name="Dr. John Mursi"
            role="Course Lecturer"
            email="jmursi@university.edu"
          />

          <ContactCard
            name="Jane Smith"
            role="Teaching Assistant"
            email="jsmith@university.edu"
          />

        </div>

      </div>

    </CourseSidebarLayout>

  )
}
