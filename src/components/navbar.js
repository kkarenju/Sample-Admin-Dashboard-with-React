import React from "react";
import profile from "../images/ppic.jpg";
import { FaPlus, FaAlignLeft, FaPowerOff, FaCog } from "react-icons/fa";

const navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-white py-0">
      <div class="container-fluid">
        <a className="navbar-brand btn text-dark border-dark" href="./">
          Add Assignment <FaPlus className="ms-2" />
        </a>
        <button className="navbar-toggler text-dark" type="button" data-bs-toggle="collapse" data-bs-target="#main_nav" aria-controls="main_nav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon text-dark"> <FaAlignLeft /></span>
        </button>
        <div className="collapse justify-content-end navbar-collapse" id="main_nav">
          <ul className="navbar-nav">
            <li className="nav-item mt-3">
              <a class="nav-link pro" href="#">
                <div className="progress mb-1" style={{ height: 5 }}>
                  <div className="progress-bar" role="progressbar" style={{ width: '50%' }} aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"></div>
                </div>
                <span className="text-muted">24k / 24k patients seen</span>
              </a>
            </li>
            <li className="nav-item dropdown" id="myDropdown">
              <a className="nav-link clearfix dropdown-toggle" href="#" data-bs-toggle="dropdown">
                <div className="float-end profile-pic">
                  <img src={profile} className="rounded-circle profile-picture" alt="Sandra Mamai" />
                </div>
                <div className="float-end text-start mt-2">
                  <span className="text-dark">
                    <b>Sandra Mamai</b>
                  </span>
                  <br />
                  <span className="text-muted">
                    mmamai@accessafya.com
                  </span>
                </div>
              </a>
              <ul class="dropdown-menu dropdown-menu-end">
                <li><a className="dropdown-item" href="#">
                  <FaCog className="me-2"/>
                  Settings
                </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    < FaPowerOff className="me-2"/>
                    Logout
                  </a>
                </li>
              </ul>
            </li>
          </ul>
        </div>

      </div>

    </nav>
  );
};

export default navbar;
