import React from "react";
import { FaAlignRight } from 'react-icons/fa';

const period = () => {
    return (
        <div className="row my-3 rounded-3 bg-white">
            <div className="col-12 px-3 py-2 bg-white rounded-3">
                <div>
                    <p className="p-0 m-0 text-muted fw-bold">Monitoring Period</p>
                </div>

                <div className="my-2 clearfix">
                    <div className="float-start me-3 my-1">
                        <ul class="nav border period rounded-3">
                            <li class="nav-item">
                                <a class="nav-link text-muted" href="#">Day</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link text-muted" href="#">Week</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link active" href="#">Month</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link text-muted" href="#">Year</a>
                            </li>
                        </ul>
                    </div>

                    <div className="float-start  my-1">
                        <ul class="nav border period rounded-3 fs-6">
                            <li class="nav-item">
                                <a class="nav-link text-primary">
                                    <FaAlignRight /> <span>10 Dec 2019 - 10 Jan 2020</span>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>


    );
};

export default period;
