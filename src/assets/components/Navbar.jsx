import React from 'react'
// import logo from '../../assesets/people.png'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import logo from '../../assets/people.png'
import { faClock } from '@fortawesome/free-solid-svg-icons'
const Navbar = ({queue}) => {
  return (
    <div>
       
      {/* navbar */}
      <nav className='navbar'>
        <div className='nav-contianer'>
          <img src={logo} alt="logo" />
          <div className='logo-info'>
            <h1>Queue <span className='text1'>Management</span> <span className='text2'>System</span></h1>
            <p>Manage Your Customers efficiently</p>
          </div>
        </div>
          <div className='countmanager'>
            <FontAwesomeIcon className='icon' icon={faClock} style={{ color: "rgb(116, 192, 252)" }}/>
            <div className='countinfo'>
              <p>Total Wating</p>
              <h3>{queue.length}</h3>
            </div>
          </div> 
      </nav>

        


    </div>
 
  )
}

export default Navbar