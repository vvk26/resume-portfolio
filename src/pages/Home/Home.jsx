import React from 'react'
import './Home.css'
import avatar from '../../assets/images/avatar-2.jpg'
import BorderButton from '../common/borderButton'


function Home() {
  return (
    <>
    <div className="container-home">
    <div className="profile-card">

      <header>
        
          <img src={avatar} />
        
          <h1>Vivekanand Kadam</h1>

          <h2>Full-stack developer</h2>

      </header>


      <div className="profile-bio">

          <p>Java Full Stack Developer passionate about building impactful web applications.</p>

      </div>

    
          

    <div className="grid min-h-[200px] place-content-center bg-slate-900 p-4">
      <BorderButton>Hover me</BorderButton>
    </div>
      </div>
      </div>
    </>
  )
}

export default Home