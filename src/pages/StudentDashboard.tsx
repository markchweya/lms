import React from 'react'
import SidebarLayout from '../components/SidebarLayout'

const courses = [
  {
    code: 'APT3040D',
    title: 'APT3040D_SS2026',
    instructor: 'Masinde Cornelius',
    image: ''
  },
  {
    code: 'DSA3020VA',
    title: 'DSA3020VA_SS2026',
    instructor: 'Japheth Japheth Mursi',
    image: 'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee'
  },
  {
    code: 'DSA3030A',
    title: 'DSA3030A_SS2026',
    instructor: 'Japheth Japheth Mursi',
    image: ''
  }
]

const contentStyle: React.CSSProperties = {
  flex: 1,
  width: '100%',
  background: '#F5F6FA',
  padding: '30px',
  boxSizing: 'border-box'
}

const headerRow: React.CSSProperties = {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  marginBottom: '25px'
}

const gridStyle: React.CSSProperties = {
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fill,minmax(300px,1fr))',
  gap: '20px'
}

const cardStyle: React.CSSProperties = {
  background: '#FFFFFF',
  borderRadius: '10px',
  overflow: 'hidden',
  boxShadow: '0 6px 18px rgba(0,0,0,0.08)',
  cursor: 'pointer',
  display: 'flex',
  flexDirection: 'column'
}

const imageStyle: React.CSSProperties = {
  width:'100%',
  height:'160px',
  objectFit:'cover',
  background:'#2C4AA5',
  display:'flex',
  alignItems:'center',
  justifyContent:'center',
  color:'#fff',
  fontWeight:600
}

import { useNavigate } from 'react-router-dom'

const StudentDashboard: React.FC = () => {
  const navigate = useNavigate()
  return (
    <SidebarLayout active="courses">

      <div style={contentStyle}>

        <div style={headerRow}>
          <h1>Courses</h1>
          <div style={{display:'flex',alignItems:'center',gap:'10px',fontWeight:500}}>
            <span style={{width:'34px',height:'34px',borderRadius:'50%',background:'#2C4AA5',display:'inline-flex',alignItems:'center',justifyContent:'center',color:'#fff',fontSize:'14px'}}>TN</span>
            Test Name
          </div>
        </div>

        <div style={{marginBottom:'20px'}}>Search your courses</div>

        <div style={gridStyle}>
          {courses.map((course, i) => (
            <div key={i} style={cardStyle} onClick={()=>navigate('/course/'+course.code)}>

              {course.image ? (
                <img src={course.image} style={imageStyle} />
              ) : (
                <div style={imageStyle}>USIU LMS</div>
              )}

              <div style={{padding:'15px'}}>
                <div style={{fontSize:'14px',color:'#666'}}>
                  {course.title}
                </div>

                <div style={{fontWeight:600,marginTop:'6px'}}>
                  {course.code}
                </div>

                <div style={{marginTop:'10px',fontSize:'13px'}}>
                  {course.instructor}
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>

    </SidebarLayout>
  )
}

export default StudentDashboard
