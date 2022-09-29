import React from 'react'

const Header = () => {
  return (
    <header className="d-flex justify-content-center py-3 fixed-top">
        <ul className="nav">
            <li className="nav-item btn btn-primary"><a href="/products" style={{color:'white', marginright:'15px'}} className="nav-link">Home</a></li>
            <li className="nav-item btn btn-primary"><a href="/products/create" style={{color:'white'}} className="nav-link">Create <b>+</b></a></li>
        </ul>
    </header>
  )
}

export default Header