import React from 'react'
import './Home.css'

const Home = () => {
  return (
    <div>
      <h1>advisabot</h1>
      <div className="search-container">
        <input type="text" placeholder="get advisabot advice..." />
        <button type="submit"></button>
      </div>
    </div>
  )
}

export default Home
