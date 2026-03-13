import React from 'react'
import SidebarLayout from '../components/SidebarLayout'

export default function ProfilePage(){

  const container:React.CSSProperties={
    padding:'20px',
    background:'#F5F6FA',
    minHeight:'100vh'
  }

  const header:React.CSSProperties={
    textAlign:'center',
    marginBottom:'40px'
  }

  const avatar:React.CSSProperties={
    width:'120px',
    height:'120px',
    borderRadius:'50%',
    background:'#2b2b2b',
    margin:'0 auto 15px auto'
  }

  const name:React.CSSProperties={
    fontSize:'clamp(24px,4vw,32px)',
    fontWeight:600
  }

  const email:React.CSSProperties={
    color:'#555',
    marginTop:'6px'
  }

  const grid:React.CSSProperties={
    display:'grid',
    gridTemplateColumns:'repeat(auto-fit, minmax(280px, 1fr))',
    gap:'20px',
    maxWidth:'900px',
    margin:'0 auto'
  }

  const card:React.CSSProperties={
    background:'#fff',
    borderRadius:'10px',
    padding:'20px',
    boxShadow:'0 6px 18px rgba(0,0,0,0.08)'
  }

  const row:React.CSSProperties={
    display:'flex',
    justifyContent:'space-between',
    padding:'12px 0',
    borderBottom:'1px solid #eee'
  }

  return (

    <SidebarLayout>

      <div style={container}>

        <div style={header}>
          <div style={avatar}></div>
          <div style={name}>Test Name</div>
          <div style={email}>testname@usiu.ac.ke</div>
        </div>

        <div style={grid}>

          <div style={card}>
            <h3>Basic Information</h3>

            <div style={row}>
              <div>Full Name</div>
              <div>Test Name</div>
            </div>

            <div style={row}>
              <div>Email Address</div>
              <div>testname@usiu.ac.ke</div>
            </div>

            <div style={row}>
              <div>Student ID</div>
              <div>000000</div>
            </div>

            <div style={{...row,borderBottom:'none'}}>
              <div>Password</div>
              <div>Change password</div>
            </div>

          </div>

          <div style={card}>
            <h3>System Settings</h3>

            <div style={row}>
              <div>Language</div>
              <div>English</div>
            </div>

            <div style={row}>
              <div>Privacy Settings</div>
              <div>Instructors only</div>
            </div>

            <div style={{...row,borderBottom:'none'}}>
              <div>Notifications</div>
              <div>Email notifications</div>
            </div>

          </div>

        </div>

      </div>

    </SidebarLayout>

  )
}
