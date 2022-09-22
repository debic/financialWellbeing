import React from 'react'
import { useNavigate,Link } from "react-router-dom";
import img from '../Img/img.png'
import logo from '../Img/logo.png'

export default function Navbar() {

    
  return (
	<div className="vertical-nav bg-dark" id="sidebar">

<div>
		<img src={logo} alt="cfh" className="logo"/>
		</div>
		<div >
  		<ul className="nav flex-column bg-dark mb-0 navbar">
			  
    		<li className="nav-item">
			<Link to="/">Dashboard</Link>
    		</li>
    		<li className="nav-item">
			<Link to="/FormPage">Form</Link>

    		</li>
  
  		</ul>
		  </div>

	<img src={img} alt="Dog" className=""/>


	</div>
  )
}
