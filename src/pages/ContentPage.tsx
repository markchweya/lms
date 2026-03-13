import React from 'react'
import { useParams } from 'react-router-dom'
import CourseSidebarLayout from '../components/CourseSidebarLayout'

function WeekItem({title,description,link}:{title:string,description:string,link:string}){

  const container:React.CSSProperties={
    display:'flex',
    gap:'18px',
    padding:'20px',
    border:'1px solid #dcdcdc',
    borderRadius:'6px',
    background:'#fff',
    alignItems:'flex-start'
  }

  const icon:React.CSSProperties={
    fontSize:'28px'
  }

  const titleStyle:React.CSSProperties={
    fontWeight:700,
    fontSize:'18px'
  }

  const desc:React.CSSProperties={
    marginTop:'6px'
  }

  const linkStyle:React.CSSProperties={
    marginTop:'8px',
    color:'#2C4AA5',
    textDecoration:'underline'
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
    padding:'30px',
    background:'#F5F6FA',
    minHeight:'100vh'
  }

  const list:React.CSSProperties={
    display:'flex',
    flexDirection:'column',
    gap:'18px',
    marginTop:'25px'
  }

  return (

    <CourseSidebarLayout active="content">

      <div style={page}>

        <h1>{code} Content</h1>

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