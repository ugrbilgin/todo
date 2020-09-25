import React from 'react';

const Buttons = ()=>{
    return (

        <div className="button-container d-flex justify-content-">
            <button className="btn btn-danger">Active</button>
            <button className="btn btn-secondary">Completed</button>
            <button className="btn btn-outline-success">All</button>
        </div>



    );
};

export default Buttons;