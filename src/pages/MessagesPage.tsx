import React, { useState } from 'react'
import SidebarLayout from '../components/SidebarLayout'

const courses = [
  { id:'APT3040D', title:'APT3040D Group', last:'Assignment discussion' },
  { id:'DSA3020VA', title:'DSA3020VA Group', last:'Anyone solved question 2?' },
  { id:'DSA3030A', title:'DSA3030A Group', last:'Study group tonight' }
]

const mockMessages:any = {
  APT3040D:[{from:'them',text:'Hello class'},{from:'me',text:'Hi everyone'}],
  DSA3020VA:[{from:'them',text:'Has anyone solved question 2?'},{from:'me',text:'Working on it'}],
  DSA3030A:[{from:'them',text:'Reminder: project next week'},{from:'me',text:'Thanks for reminder'}]
}

export default function MessagesPage(){

 const [active,setActive]=useState<any>(courses[1])
 const [text,setText]=useState('')

 const isMobile = window.innerWidth < 768
 const messages = active ? mockMessages[active.id] : []

 return(
  <SidebarLayout active="messages">

   <div style={{display:'flex',height:'100%',flexDirection:'column',background:'linear-gradient(135deg,#1F3C88,#2C4AA5)'}}>

    {/* HEADER */}
    <div style={{padding:'24px 20px 40px 20px',color:'#fff'}}>
      <div style={{fontSize:'22px',fontWeight:600,marginBottom:'12px'}}>Messages</div>
      <div style={{
        width:'100%',
        background:'#ffffff',
        borderRadius:'40px',
        padding:'4px',
        boxShadow:'0 6px 16px rgba(0,0,0,0.15)'
      }}>
        <input
          placeholder="Search message"
          style={{
            width:'100%',
            padding:'12px 18px',
            borderRadius:'40px',
            border:'none',
            outline:'none',
            fontSize:'14px',
            background:'transparent'
          }}
        />
      </div>
    </div>

    {/* MAIN CONTAINER */}
    <div style={{
      flex:1,
      background:'#fff',
      borderTopLeftRadius:'35px',
      borderTopRightRadius:'35px',
      display:'flex',
      overflow:'hidden',
      boxShadow:'0 -6px 20px rgba(0,0,0,0.08)'
    }}>

      {/* LEFT LIST */}
      {(!isMobile || !active) && (
      <div style={{width:isMobile?'100%':'360px',borderRight:'1px solid #eee',background:'#fafafa'}}>

        {courses.map((c,i)=>(
          <div key={i}
            style={{
              display:'flex',
              alignItems:'center',
              padding:'18px',
              borderBottom:'1px solid #f0f0f0',
              cursor:'pointer',
              transition:'background 0.2s'
            }}
            onClick={()=>setActive(c)}
          >
            <div style={{
              width:'46px',
              height:'46px',
              borderRadius:'50%',
              background:'#1F3C88',
              marginRight:'14px',
              flexShrink:0
            }}/>

            <div>
              <div style={{fontWeight:600,fontSize:'15px'}}>{c.title}</div>
              <div style={{fontSize:'12px',color:'#777',marginTop:'3px'}}>{c.last}</div>
            </div>
          </div>
        ))}

      </div>
      )}

      {/* CHAT */}
      {active && (
      <div style={{flex:1,display:'flex',flexDirection:'column',background:'#F5F6FA'}}>

        <div style={{
          padding:'18px 20px',
          borderBottom:'1px solid #e5e5e5',
          background:'#fff',
          fontWeight:600,
          display:'flex',
          alignItems:'center',
          borderTopRightRadius:'35px'
        }}>
          {isMobile && (
            <button
              onClick={()=>setActive(null)}
              style={{marginRight:'12px',background:'none',border:'none',fontSize:'18px',cursor:'pointer'}}
            >←</button>
          )}
          {active.title}
        </div>

        <div style={{
          flex:1,
          padding:'28px',
          display:'flex',
          flexDirection:'column',
          gap:'14px',
          overflowY:'auto'
        }}>
          {messages.map((m:any,i:number)=> (
            <div
              key={i}
              style={m.from==='me'
                ?{
                  alignSelf:'flex-end',
                  background:'#2C4AA5',
                  color:'#fff',
                  padding:'12px 18px',
                  borderRadius:'20px',
                  maxWidth:'260px',
                  boxShadow:'0 3px 8px rgba(0,0,0,0.12)'
                }
                :{
                  alignSelf:'flex-start',
                  background:'#E6EAF5',
                  padding:'12px 18px',
                  borderRadius:'20px',
                  maxWidth:'260px'
                }
              }
            >
              {m.text}
            </div>
          ))}
        </div>

        <div style={{
          display:'flex',
          padding:'18px',
          background:'#fff',
          borderTop:'1px solid #e5e5e5',
          marginBottom:'20px'
        }}>
          <input
            value={text}
            onChange={e=>setText(e.target.value)}
            placeholder="Type your message here..."
            style={{
              flex:1,
              padding:'12px 18px',
              borderRadius:'25px',
              border:'1px solid #ddd',
              outline:'none',
              fontSize:'14px'
            }}
          />

          <button
            style={{
              marginLeft:'10px',
              background:'#2C4AA5',
              color:'#fff',
              border:'none',
              padding:'12px 20px',
              borderRadius:'25px',
              cursor:'pointer',
              fontWeight:600,
              boxShadow:'0 4px 10px rgba(0,0,0,0.15)'
            }}
          >Send</button>
        </div>

      </div>
      )}

    </div>

   </div>

  </SidebarLayout>
 )
}
