import React from 'react'
import "../../css/Home.css"
import Search from './Search'
import Filter from './Filter'

const Header = () => {
  return (
    <>
    <nav className='header row sticky-top'>
      <img src='/assets/logo.png' alt='logo' className='logo'/>

      <div className='search_filter'>
        <Search/>
        <Filter/>
        </div> 

      <span className='material-symbols-outlined web_logo'>
      account_circle
      </span>
      <div className='dropdown'>
        <span className='material-symbols-outlined web_logo dropdown-toggle' role='button' id="dropdownMenuLink"
        data-bs-toggle="dropdown"
        aria-expanded="false">
            <img src='/assets/avatar.png' className='user-img rounded-circle w-25 h-25' alt='icon'/>
        </span>
        <ul className='dropdown-menu' aria-labelledby='dropdownMenuLink'>
            <li>
                <a className='dropdown-item' href='/profile'> My Account</a>
            </li>
            <li>
                <button className='dropdown-item'>Logout</button>
            </li>
        </ul>
      </div>
    </nav>
    </>
  )
}

export default Header
