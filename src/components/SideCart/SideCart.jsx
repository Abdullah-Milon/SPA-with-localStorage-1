import React, { useEffect, useState } from 'react';
import { toast } from 'react-toastify';

const SideCart = ({watchTime}) => {

    return (
        <div className='side-cart'>
            <h1>My Cart</h1>
            <div className="mt-5 text-center">
                <p>total watchTime</p>
                <input type="text"  disabled />
            </div>
            <h5 className="mt-5">Add break time</h5>
            <button  className="w-25 btn-circle m-1 btn btn-info">10</button>
            <button  className="w-25 btn-circle m-1 btn btn-warning">20</button>
            <button  className="w-25 btn-circle m-1 btn btn-danger">30</button>
            <input type="text"  disabled />
            <button  className="mt-5 btn btn-info w-100">Complete</button>
        </div>
    );
};

export default SideCart;

