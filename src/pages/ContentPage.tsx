import React from 'react'
import { useParams } from 'react-router-dom'
import CourseSidebarLayout from '../components/CourseSidebarLayout'

function WeekItem({title,description,link}:{title:string,description:string,link:string}){

  const container:React.CSSProperties={
    display:'flex',
    gap:'20px',
    padding:'24px',
    border:'1px solid #e6e6e6',
    borderRadius:'10px',
    background:'#ffffff',
    alignItems:'flex-start',
    boxShadow:'0 6px 18px rgba(0,0,0,0.06)',
    transition:'all 0.25s ease',
    cursor:'pointer'
  }

  const icon:React.CSSProperties={
    fontSize:'30px',
    marginTop:'4px'
  }

  const titleStyle:React.CSSProperties={
    fontWeight:700,
    fontSize:'20px',
    color:'#1f2937',
    letterSpacing:'0.3px'
  }

  const desc:React.CSSProperties={
    marginTop:'6px',
    fontSize:'15px',
    color:'#4b5563',
    fontWeight:500
  }

  const linkStyle:React.CSSProperties={
    marginTop:'10px',
    color:'#2563eb',
    fontSize:'14px',
    fontWeight:600,
    textDecoration:'none'
  }

  return (
    <div style={container}>
      <div style={icon}>📄</div>

      <div>
        <div style={titleStyle}>{title}</div>
        <div style={desc}>{description}</div>
        <div>
          <a href={link} target="_blank" style={linkStyle}>{link}</a>
        </div>
      </div>

    </div>
  )
}

export default function ContentPage(){

  const { code } = useParams()

  const page:React.CSSProperties={
    padding:'40px',
    background:'#F5F6FA',
    minHeight:'100vh'
  }

  const header:React.CSSProperties={
    fontSize:'34px',
    fontWeight:800,
    color:'#111827'
  }

  const list:React.CSSProperties={
    display:'flex',
    flexDirection:'column',
    gap:'22px',
    marginTop:'30px',
    maxWidth:'900px',
    marginLeft:'auto',
    marginRight:'auto'
  }

  return (

    <CourseSidebarLayout active="content">

      <div style={page}>

        <div style={header}>{code} Content</div>

        <div style={list}>

          <WeekItem
            title="Week 1"
            description="Introduction to Machine Learning"
            link="https://jmursi.github.io/3020wk1/"
          />

          <WeekItem
            title="Week 2"
            description="Types of Machine Learning"
            link="https://jmursi.github.io/3020wk2/"
          />

          <WeekItem
            title="Week 3"
            description="Machine Learning 2"
            link="https://jmursi.github.io/3030wk3/"
          />

        </div>

      </div>

    </CourseSidebarLayout>

  )
}