import React from "react";

const SingleImage = ({ id, img }) => {
    return (
        <div className="images__wrapper__imgs__img">
            <img src={img} alt={`image-${id}`} />
        </div>
    );
};

export default SingleImage;
