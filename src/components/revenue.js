import React from "react";
import { FaCaretDown, FaCaretUp } from 'react-icons/fa';

const revenue = () => {
    return (
        <div className="col-sm-4 px-3 my-1">
            <div className="px-3 py-2 bg-white rounded-3">
                <div>
                    <p className="p-0 m-0 fw-bold">Revenue</p>
                </div>
                <div className="clearfix">
                    <div className="float-start me-1">
                        <span className="fs-4 fw-bold">4.2m</span>
                        <br />
                        <span className="text-muted">Kenya Shillings</span>
                        <br />
                        <span className="text-success">
                            <FaCaretUp />
                            + 2,4
                        </span>
                    </div>
                    <div className="float-start">

                    </div>
                </div>
            </div>
        </div>


    );
};

export default revenue;
