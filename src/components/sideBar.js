import React from 'react'
import { FaRegFolder, FaWaveSquare, FaRegCommentAlt, FaSlidersH } from "react-icons/fa";

const sideBar = () => {
  return (
    //left side bar displaying icon links
    <ul class="navbar-nav w-100">
      <li class="nav-item text-center">
        <a href="./" className=" text-muted nav-link link-dark">
          <FaRegFolder className='side-bar-icon' />
        </a>
      </li>
      <li class="nav-item my-1 text-center">
        <a href="./" className="nav-link">
          <FaWaveSquare className='active side-bar-icon' />
        </a>
      </li>
      <li class="nav-item my-1 text-center">
        <a href="./" className="text-muted nav-link link-dark">
          <FaRegCommentAlt className='side-bar-icon' />
        </a>
      </li>
      <li class="nav-item my-1 text-center">
        <a href="./" className="text-muted nav-link link-dark">
          <FaSlidersH className='side-bar-icon' />
        </a>
      </li>
    </ul>

  );
}

export default sideBar