import React from 'react';

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
];

const layoutStyle: React.CSSProperties = {
  display: 'flex',
  height: '100vh',
  width: '100%'
};

const sidebarStyle: React.CSSProperties = {
  width: '250px',
  background: '#1F3C88',
  color: '#FFFFFF',
  display: 'flex',
  flexDirection: 'column',
  padding: '20px'
};

const sidebarItem: React.CSSProperties = {
  padding: '10px 0',
  cursor: 'pointer'
};

const activeItem: React.CSSProperties = {
  ...sidebarItem,
  fontWeight: 600,
  borderLeft: '4px solid #F2B705',
  paddingLeft: '10px'
};

const contentStyle: React.CSSProperties = {
  flex: 1,
  background: '#F5F6FA',
  padding: '30px',
  overflowY: 'auto'
};

const headerRow: React.CSSProperties = {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  marginBottom: '25px'
};

const gridStyle: React.CSSProperties = {
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fill,minmax(300px,1fr))',
  gap: '20px'
};

const cardStyle: React.CSSProperties = {
  background: '#FFFFFF',
  borderRadius: '10px',
  overflow: 'hidden',
  boxShadow: '0 6px 18px rgba(0,0,0,0.08)',
  cursor: 'pointer',
  display: 'flex',
  flexDirection: 'column'
};

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
};

const StudentDashboard: React.FC = () => {
  return (
    <div style={layoutStyle}>
      <div style={sidebarStyle}>
        <h2 style={{marginBottom:'30px'}}>USIU Africa</h2>

        <div style={sidebarItem}>Activity</div>
        <div style={activeItem}>Courses</div>
        <div style={sidebarItem}>Organizations</div>
        <div style={sidebarItem} onClick={()=>window.location.href='/calendar'}>Calendar</div>
        <div style={sidebarItem}>Messages</div>
        <div style={sidebarItem}>Grades</div>
        <div style={sidebarItem}>Tools</div>

        <div style={{marginTop:'auto'}}>Sign Out</div>
      </div>

      <div style={contentStyle}>

        <div style={headerRow}>
          <h1>Courses</h1>
          <div>Course Catalog</div>
        </div>

        <div style={{marginBottom:'20px'}}>Search your courses</div>

        <div style={gridStyle}>
          {courses.map((course, i) => (
            <div key={i} style={cardStyle}>

              {course.image ? (
                <img
                  src={course.image}
                  style={imageStyle}
                />
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
    </div>
  );
};

export default StudentDashboard;
