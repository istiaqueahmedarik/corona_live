import React from 'react'
import { Navbar } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import "./App.css";

function Nav() {
    return (
        <div>
            <nav className="nav">
      <Link style={{ color: "white", textDecoration: "none" }} to="/">
        <div style={{ fontSize: "30px" }}>COVID LIVE</div>
      </Link>
      <ul className="nav-links">
        <Link
          style={{
            color: "white",
            textDecoration: "none",
            marginTop: "10px",
            marginRight: "20px",
          }}
          to="/symptom"
        >
          <li>Symptom</li>
        </Link>
        <Link
          style={{
            color: "white",
            textDecoration: "none",
            marginTop: "10px",
            marginRight: "20px",
          }}
          to="/graph"
        >
          <li>Graph</li>
        </Link>
        
      </ul>
    </nav>



        </div>
    )
}

export default Nav
