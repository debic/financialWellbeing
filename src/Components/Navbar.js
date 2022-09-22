import React from 'react'
import { useNavigate,Link } from "react-router-dom";
import img from '../Img/img.png'

export default function Navbar() {

    
  return (
	<div className="vertical-nav bg-dark" id="sidebar">


  		<p className="text-white font-weight-bold text-uppercase px-3 small pb-4 mb-0">Logo</p>

  		<ul className="nav flex-column bg-dark mb-0 navbar">
			  
    		<li className="nav-item">
			<Link to="/">Dashboard</Link>
    		</li>
    		<li className="nav-item">
			<Link to="/FormPage">Form</Link>

    		</li>
  
  		</ul>

	<img src={img} alt="Dog" className=""/>


	</div>
  )
}
