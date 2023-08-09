//import React from 'react'
import './header.css'
import { NavLink} from "react-router-dom";


const Header = () => {
  return (
    <>
      <header className="container1">
       
          <h1>Creator Verse</h1>
          <br></br>
        <p className="p">
        <NavLink to="/createCreator" role="button">Create Creator</NavLink>
        <NavLink to="/" role="button">All Creators</NavLink>
        </p>
      </header>
      </>
  )
}

export default Header