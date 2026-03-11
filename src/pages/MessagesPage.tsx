import React, { useState } from 'react'
import SidebarLayout from '../components/SidebarLayout'

const conversations = [
  {course:'APT3040D', name:'APT3040D Group', last:'Assignment discussion', time:'2:30pm'},
  {course:'DSA3020VA', name:'DSA3020VA Group', last:'Anyone solved question 2?', time:'Yesterday'},
  {course:'DSA3030A', name:'DSA3030A Group', last:'Study group tonight', time:'Mon'}
]

const messagesMock:any = {
  'APT3040D Group':[ {from:'them', text:'Hello APT3040D class'}, {from:'me', text:'Hi everyone'} ],
  'DSA3020VA Group':[ {from:'them', text:'Anyone solved question 2?'}, {from:'me', text:'Working on it'} ],
  'DSA3030A Group':[ {from:'them', text:'Study group tonight'}, {from:'me', text:'I will join'} ]
}

const container:React.CSSProperties={display:'flex',height:'100%',gap:'0'}

const listStyle:React.CSSProperties={
  width:'320px',
  borderRight:'1px solid #e2e2e2',
  background:'#fff',
  overflowY:'auto'
}

const chatStyle:React.CSSProperties={flex:1,display:'flex',flexDirection:'column',background:'#F5F6FA'}

const header:React.CSSProperties={padding:'15px',borderBottom:'1px solid #ddd',background:'#fff',fontWeight:600}

const messageArea:React.CSSProperties={flex:1,padding:'20px',overflowY:'auto',display:'flex',flexDirection:'column',gap:'10px'}

const inputRow:React.CSSProperties={padding:'10px',borderTop:'1px solid #ddd',background:'#fff',display:'flex',gap:'10px'}

const bubbleMe:React.CSSProperties={alignSelf:'flex-end',background:'#2C4AA5',color:'#fff',padding:'10px 14px',borderRadius:'14px'}

const bubbleThem:React.CSSProperties={alignSelf:'flex-start',background:'#E6EAF5',padding:'10px 14px',borderRadius:'14px'}

export default function MessagesPage(){
  const [active,setActive]=useState(conversations[0])
  const [text,setText]=useState('')

  const msgs=messagesMock[active.name] || []

  return (
    <SidebarLayout active="messages">

      <div style={container}>

        <div style={listStyle}>
          {conversations.map((c,i)=> (
            <div key={i} onClick={()=>setActive(c)} style={{padding:'15px',borderBottom:'1px solid #eee',cursor:'pointer'}}>
              <div style={{fontWeight:600}}>{c.name}</div>
              <div style={{fontSize:'12px',color:'#666'}}>{c.course}</div>
              <div style={{fontSize:'12px',color:'#999'}}>{c.last}</div>
            </div>
          ))}
        </div>

        <div style={chatStyle}>

          <div style={header}>{active.name}</div>

          <div style={messageArea}>
            {msgs.map((m:any,i:number)=> (
              <div key={i} style={m.from==='me'?bubbleMe:bubbleThem}>{m.text}</div>
            ))}
          </div>

          <div style={inputRow}>
            <input value={text} onChange={e=>setText(e.target.value)} placeholder="Type message..." style={{flex:1,padding:'10px'}}/>
            <button style={{background:'#2C4AA5',color:'#fff',border:'none',padding:'10px 16px',borderRadius:'6px'}}>Send</button>
          </div>

        </div>

      </div>

    </SidebarLayout>
  )
}
