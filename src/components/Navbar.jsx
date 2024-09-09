import React from 'react'

const Navbar = () => {
  return (
    <div className="navbar bg-base-100 p-5 absolute new-amsterdam-regular">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16" />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu text-lg menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
            <li><a>Projects</a></li>
            <li><a>About</a></li>
            <li><a>Github</a></li>
          </ul>
        </div>
        <a className="btn btn-ghost text-2xl">Tariq Lashley</a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu text-lg menu-horizontal px-1">
          <li><a>Projects</a></li>
          <li><a>About</a></li>
          <li><a>Github</a></li>
        </ul>
      </div>
      <div className="navbar-end">
        <a className="btn text-lg">Contact</a>
      </div>
    </div>
  )
}

export default Navbar