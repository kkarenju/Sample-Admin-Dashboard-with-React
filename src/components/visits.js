import React from 'react'
import { FaEllipsisV } from "react-icons/fa";

const visits = () => {
  return (
    
      <div className="d-flex flex-column flex-shrink-0">
        <a href="/" className="d-flex align-items-center mb-3 mb-md-0 me-md-auto link-dark text-decoration-none">
          <span className="small">VISITS</span>
        </a>
        <ul className="nav nav-pills flex-sm-column mb-auto mt-2">
          <li className="nav-item border rounded-3 my-1 w-100">
            <a href="./" className="nav-link clearfix active" aria-current="page">
              <span className='float-start me-2'>7 </span>
              <span>Home</span>
              <span className="float-end ms-1"><FaEllipsisV /></span>
            </a>
          </li>
          <li className="nav-item border link rounded-3 my-1 w-100">
            <a href="./" className="nav-link link-dark">
              <span className='float-start text-primary me-2'>12</span>
              <span>Mukuru Kwa Reuben</span>
              <span className="float-end ms-1"><FaEllipsisV /></span>
            </a>
          </li>
          <li  className="nav-item border link rounded-3 my-1 w-100">
            <a href="./" className="nav-link link-dark">
              <span className='float-start text-primary me-2'>26</span>
              <span>Mukuru Kwa Njenga</span>
              <span className="float-end ms-1"><FaEllipsisV /></span>
            </a>
          </li>
          <li  className="nav-item border link rounded-3 my-1 w-100">
            <a href="./" className="nav-link link-dark">
              <span className='float-start text-primary me-2'>38</span>
              <span>Baba Dogo</span>
              <span className="float-end ms-1"><FaEllipsisV /></span>
            </a>
          </li>
          <li  className="nav-item border link rounded-3 my-1 w-100">
            <a href="./" className="nav-link link-dark">
              <span className='float-start text-primary me-2'>41</span>
              <span>Kosovo</span>
              <span className="float-end ms-1"><FaEllipsisV /></span>
            </a>
          </li>
          <li  className="nav-item border link rounded-3 my-1 w-100">
            <a href="./" className="nav-link link-dark">
              <span className='float-start text-primary me-2'>24</span>
              <span>Mukuru Kayaba</span>
              <span className="float-end ms-1"><FaEllipsisV /></span>
            </a>
          </li>
        </ul>

      </div>

  );
}

export default visits