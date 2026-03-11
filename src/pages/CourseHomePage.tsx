import React from 'react'
import SidebarLayout from '../components/SidebarLayout'

export default function CourseHomePage(){

  const container:React.CSSProperties={
    display:'flex',
    gap:'20px'
  }

  const column:React.CSSProperties={
    flex:1,
    display:'flex',
    flexDirection:'column',
    gap:'20px'
  }

  const card:React.CSSProperties={
    background:'#fff',
    border:'1px solid #ddd',
    borderRadius:'6px'
  }

  const cardHeader:React.CSSProperties={
    padding:'12px 16px',
    borderBottom:'1px solid #ddd',
    fontWeight:600,
    background:'#f7f7f7'
  }

  const cardBody:React.CSSProperties={
    padding:'16px',
    fontSize:'14px'
  }

  return (

    <SidebarLayout active="courses">

      <h1 style={{marginBottom:'20px'}}>DSA3020VA</h1>

      <div style={container}>

        <div style={column}>

          <div style={card}>
            <div style={cardHeader}>My Announcements</div>
            <div style={cardBody}>
              <div style={{color:'#2C4AA5',marginBottom:'10px'}}>Respondus LockDown Browser</div>
              <div style={{fontStyle:'italic',color:'#777'}}>
                No Course or Organization Announcements have been posted in the last 7 days.
              </div>
            </div>
          </div>

          <div style={card}>
            <div style={cardHeader}>My Tasks</div>
            <div style={cardBody}>
              <div>My Tasks:</div>
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
              <div style={{marginBottom:'10px'}}>What's Past Due</div>
              <div style={{color:'#2C4AA5'}}>All Items (0)</div>

              <hr style={{margin:'15px 0'}} />

              <div style={{marginBottom:'10px'}}>What's Due</div>

              <div style={{marginTop:'10px'}}>Today (0)</div>
              <div>Tomorrow (0)</div>
              <div>This Week (0)</div>
              <div>Future (0)</div>

            </div>
          </div>

        </div>

      </div>

    </SidebarLayout>

  )
}
