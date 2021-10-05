import React from "react";

const Details = ({ children, skillsList }) => {
    return (
        <div className="about__details">
            <h2>Read About My Life Struggle Story!</h2>
            <p>
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem totam rem aperiam,
                eaque ipsa quae ab illo inventore veritatis et is the quasi architecto beatae vitae
                dicta sunt explicabo.
            </p>
            <ul>
                {skillsList.map(el => {
                    const { id, title } = el;
                    return <li key={id}>{title}</li>;
                })}
            </ul>
            {children}
        </div>
    );
};

export default Details;
