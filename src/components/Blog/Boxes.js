import React from "react";
import SingleBox from "./SingleBox";

const Boxes = ({ list }) => {
    return (
        <div className="blog__boxes">
            {list.map(item => {
                return <SingleBox key={item.id} {...item} />;
            })}
        </div>
    );
};

export default Boxes;
