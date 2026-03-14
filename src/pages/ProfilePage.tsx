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
    background:'#ffffff',
    borderRadius:'16px',
    padding:'28px',
    boxShadow:'0 12px 30px rgba(0,0,0,0.08)',
    backdropFilter:'blur(6px)'
  }

  const row:React.CSSProperties={
    display:'flex',
    justifyContent:'space-between',
    alignItems:'center',
    padding:'16px 0',
    gap:'20px'
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
            <h3 style={{marginTop:0,marginBottom:'22px',fontSize:'20px',color:'#1F3C88',fontWeight:700}}>Basic Information</h3>

            <div style={row}>
              <div>Full Name</div>
              <input defaultValue="Test Name" style={{padding:'10px 12px',background:'#f7f8fc',border:'none',borderRadius:'8px',outline:'none',fontSize:'14px',minWidth:'180px'}} />
            </div>

            <div style={row}>
              <div>Email Address</div>
              <div>testname@usiu.ac.ke</div>
            </div>

            <div style={row}>
              <div>Student ID</div>
              <div>000000</div>
            </div>

            <div style={row}>
              <div>Gender</div>
              <select style={{padding:'10px 12px',background:'#f7f8fc',border:'none',borderRadius:'8px',outline:'none',fontSize:'14px',minWidth:'180px',appearance:'none'}}>
                <option>Male</option>
                <option>Female</option>
                <option>Prefer not to say</option>
              </select>
            </div>

            <div style={{...row,borderBottom:'none'}}>
              <div>Password</div>
              <button style={{padding:'10px 16px',borderRadius:'8px',border:'none',background:'#1F3C88',color:'#fff',fontWeight:600,boxShadow:'0 6px 14px rgba(31,60,136,0.25)',cursor:'pointer'}}>Change password</button>
            </div>

          </div>

          <div style={card}>
            <h3 style={{marginTop:0,marginBottom:'22px',fontSize:'20px',color:'#1F3C88',fontWeight:700}}>System Settings</h3>

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
