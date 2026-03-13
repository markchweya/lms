import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import CourseSidebarLayout from '../components/CourseSidebarLayout'

function CollapseItem({title}:{title:string}){
  const [open,setOpen] = useState(false)

  const header:React.CSSProperties={
    display:'flex',
    alignItems:'center',
    cursor:'pointer',
    fontWeight:500,
    color:'#2C4AA5',
    marginTop:'10px'
  }

  const body:React.CSSProperties={
    padding:'8px 0 12px 20px',
    color:'#777',
    fontStyle:'italic'
  }

  return (
    <div>
      <div style={header} onClick={()=>setOpen(!open)}>
        <span style={{marginRight:8}}>{open ? '▼' : '▶'}</span>
        {title} (0)
      </div>

      {open && (
        <div style={body}>
          Nothing Due {title}
        </div>
      )}

      <hr style={{margin:'10px 0',border:'none',borderTop:'1px solid #eee'}}/>
    </div>
  )
}

export default function CourseHomePage(){

  const { code } = useParams()

  const page:React.CSSProperties={
    width:'100%',
    background:'#F5F6FA',
    padding:'30px',
    minHeight:'100vh',
    boxSizing:'border-box'
  }

  const container:React.CSSProperties={
    display:'grid',
    gridTemplateColumns:'2fr 1fr',
    gap:'25px'
  }

  const column:React.CSSProperties={
    display:'flex',
    flexDirection:'column',
    gap:'20px'
  }

  const card:React.CSSProperties={
    background:'#ffffff',
    borderRadius:'10px',
    boxShadow:'0 6px 18px rgba(0,0,0,0.08)',
    overflow:'hidden'
  }

  const cardHeader:React.CSSProperties={
    padding:'14px 18px',
    fontWeight:600,
    borderBottom:'1px solid #eee',
    background:'#fafafa'
  }

  const cardBody:React.CSSProperties={
    padding:'18px',
    fontSize:'14px',
    lineHeight:'1.6'
  }

  return (

    <CourseSidebarLayout active="home">

      <div style={page}>

      <h1 style={{marginBottom:'25px'}}>{code}</h1>

      <div style={container}>

        <div style={column}>

          <div style={card}>
            <div style={cardHeader}>My Announcements</div>
            <div style={cardBody}>
              <div style={{color:'#2C4AA5',marginBottom:'10px',fontWeight:500}}>Respondus LockDown Browser</div>
              <div style={{fontStyle:'italic',color:'#777'}}>
                No Course or Organization Announcements have been posted in the last 7 days.
              </div>
            </div>
          </div>

          <div style={card}>
            <div style={cardHeader}>My Tasks</div>
            <div style={cardBody}>
              <div style={{fontWeight:500}}>My Tasks:</div>
              <div style={{marginTop:'10px',color:'#777'}}>No tasks due.</div>
            </div>
          </div>

          <div style={card}>
            <div style={cardHeader}>What's New</div>
            <div style={cardBody}>
              Courses/Organizations (1)
            </div>
          </div>

        </div>

        <div style={column}>

          <div style={card}>
            <div style={cardHeader}>To Do</div>
            <div style={cardBody}>

              <div style={{marginBottom:'10px',fontWeight:500}}>What's Past Due</div>
              <div style={{color:'#2C4AA5'}}>All Items (0)</div>

              <hr style={{margin:'18px 0',border:'none',borderTop:'1px solid #eee'}} />

              <div style={{marginBottom:'10px',fontWeight:500}}>What's Due</div>

              <CollapseItem title="Today" />
              <CollapseItem title="Tomorrow" />
              <CollapseItem title="This Week" />
              <CollapseItem title="Future" />

            </div>
          </div>

        </div>

      </div>

      </div>

    </CourseSidebarLayout>

  )
}
