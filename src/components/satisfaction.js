import React from "react";
import { FaCaretDown, FaCaretUp } from 'react-icons/fa';

const satisfaction = () => {
    return (
        <div className="col-sm-4 px-3 my-1">
            <div className="px-3 py-2 bg-white rounded-3">
                <div>
                    <p className="p-0 m-0 fw-bold">Patient Satisfaction</p>
                </div>
                <div className="clearfix">
                    <div className="float-start me-1">
                        <span className="fs-4 fw-bold">7.8</span>
                        <br />
                        <span className="text-muted">NPS</span>
                        <br />
                        <span className="text-danger">
                            <FaCaretDown /> 
                            - 0,1 
                        </span>
                    </div>
                    <div className="float-start">

                    </div>
                </div>
            </div>
        </div>


    );
};

export default satisfaction;
