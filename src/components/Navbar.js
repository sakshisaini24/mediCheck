import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

export default function Navbar() {
  const navigate = useNavigate();
  const handleLogout = () => {
    localStorage.removeItem("authToken");
    navigate("/login")
  }
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-info">
        <div className="container-fluid">
          <Link className="navbar-brand fs1 fst-italic" to="/">Medi Check 💊</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav me-auto mb-2">
              {(localStorage.getItem("authToken")) ?
                <li className="nav-item">
                  <div className="nav-link active" aria-current="page" to="/">Hello! </div>
                </li> : ""
              }
            </ul>
            {!(localStorage.getItem("authToken")) ?
              <div className='d-flex'>

                <Link className="btn bg-white text-info mx-1" to="/login">Login</Link>
                <Link className="btn bg-white text-info mx-1" to="/createuser">Sign Up</Link>
              </div>
              :
              <div className='btn bg-white text-info mx-2' onClick={handleLogout}>
                LogOut </div>}
          </div>
        </div>
      </nav>

    </div>
  )
}
