
import React from 'react'
import Layout from '../components/Layout/Layout'
import {  Link } from 'react-router-dom'
import "../styles/HomeStyle.css";
import '../Images/banner.jpg'

const Home = () => {
  return (
    <Layout>
        <div className="home" style={{ backgroundImage: 'url (${  Banner.jpg })' }}>
          <div className="hedercontainer">
            <h1>Knowledge is power</h1>
            <p>Learning is a treasure that will follow <br /> its woner everywhere.</p>
            <Link to="/About">
            <button>Learn</button>
            </Link>
            
          </div>
          <div className='subhome'>
              <p> Build accessible React app with speed</p>
            </div>
        </div>
    </Layout>
  )
}

export default Home