import React from "react";
import { FaEllipsisV } from "react-icons/fa";

const issues = () => {
    return (
        <div className="row mb-3 rounded-3 bg-white">
            <div className="col-12 px-3 py-2 bg-white rounded-3">
                <div>
                    <p className="p-0 m-0 fw-bold text-muted">Key Issues</p>
                </div>

                <ul className="navbar nav period">
                    <li className="nav-item border link rounded-3 p-0">
                        <a href="#" className="nav-link clearfix px-2 py-0" aria-current="page">
                            <div className='float-start'>
                                <span className="fw-bold text-dark">Wrong Prescription</span> 
                                <br/>
                                <span className="text-muted">Kosovo</span> 
                            </div>
                            <div className="float-end ms-4"><FaEllipsisV className="text-muted"/></div>
                        </a>
                    </li>

                    <li className="nav-item border link rounded-3 my-1">
                        <a href="#" className="nav-link clearfix  px-2 py-0 active" aria-current="page">
                            <div className='float-start'>
                                <span className="fw-bold  text-dark">Opened Late</span> 
                                <br/>
                                <span className="text-muted">Kiambu</span> 
                            </div>
                            <div className="float-end ms-1"><FaEllipsisV className="text-muted"/></div>
                        </a>
                    </li>
                    
                    <li className="nav-item border link rounded-3 my-1">
                        <a href="#" className="nav-link clearfix  px-2 py-0" aria-current="page">
                            <div className='float-start'>
                                <span className="fw-bold  text-dark">Bad Receipts</span> 
                                <br/>
                                <span className="text-muted">New York</span> 
                            </div>
                            <div className="float-end ms-1"><FaEllipsisV className="text-muted"/></div>
                        </a>
                    </li>

                    <li className="nav-item border link rounded-3 my-1">
                        <a href="#" className="nav-link clearfix px-2 py-0" aria-current="page">
                            <div className='float-start'>
                                <span className="fw-bold text-dark">Late Check In</span> 
                                <br/>
                                <span className="text-muted">Mathare</span> 
                            </div>
                            <div className="float-end ms-1"><FaEllipsisV className="text-muted"/></div>
                        </a>
                    </li>

                    <li className="nav-item border link rounded-3 my-1">
                        <a href="#" className="nav-link clearfix px-2 py-0" aria-current="page">
                            <div className='float-start'>
                                <span className="fw-bold text-dark">Delay in Lab</span> 
                                <br/>
                                <span className="text-muted">Kiambu</span> 
                            </div>
                            <div className="float-end ms-1"><FaEllipsisV className="text-muted"/></div>
                        </a>
                    </li>

                    <li className="nav-item border link rounded-3 my-1">
                        <a href="#" className="nav-link clearfix px-2 py-0" aria-current="page">
                            <div className='float-start'>
                                <span className="fw-bold  text-dark">Careless waste disposal</span> 
                                <br/>
                                <span className="text-muted">Kiambu</span> 
                            </div>
                            <div className="float-end ms-1"><FaEllipsisV className="text-muted"/></div>
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default issues;
