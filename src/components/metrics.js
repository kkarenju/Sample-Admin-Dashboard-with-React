import React from "react";
import Footfall from "./footfall";
import Satisfaction from "./satisfaction";
import Revenue from "./revenue";

const metrics = () => {
    return (
        <div className="row gx-5 my-3">
            <Footfall/>
            <Satisfaction/>
            <Revenue/>
        </div>


    );
};

export default metrics;
