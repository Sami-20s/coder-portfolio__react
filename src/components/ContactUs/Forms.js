import React from "react";

const Forms = () => {
    return (
        <div className="contact__form">
            <h2>Drop a Line</h2>
            <form>
                <div className="form__top">
                    <input type="text" id="name" placeholder="Name" />
                    <input type="email" id="email" placeholder="Email" />
                    <input type="number" id="number" placeholder="Phone#" />
                    <select id="select">
                        <option selected>Budget</option>
                        <option>Cash</option>
                        <option>Bank</option>
                    </select>
                </div>
                <textarea id="textBox" cols="30" rows="10" placeholder="Message"></textarea>
                <button className="btn">Submit</button>
            </form>
        </div>
    );
};

export default Forms;
