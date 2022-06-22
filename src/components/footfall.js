import React from "react";
import { FaCaretDown, FaCaretUp } from 'react-icons/fa';

const footfall = () => {
    return (
        <div className="col-sm-4 px-3 my-1">
            <div className="px-3 py-2 bg-white rounded-3">
                <div>
                    <p className="p-0 m-0 fw-bold">Foot Fall</p>
                </div>
                <div className="clearfix">
                    <div className="float-start me-1">
                        <span className="fs-4 fw-bold">13k</span>
                        <br />
                        <span className="text-muted">patients</span>
                        <br />
                        <span className="text-success">
                            <FaCaretUp />
                            + 0,2
                        </span>
                    </div>
                    <div className="float-start">

                    </div>
                </div>
            </div>
        </div>


    );
};

export default footfall;
