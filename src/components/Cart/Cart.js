import React from 'react';
import pp from '../../images/jaf-bg.png'
import './Cart.css';


const Cart = ({ cart }) => {
    let total = 0;
    for (const activity of cart) {
        total = total + activity.duration;
    }

    return (
        <div className='cart'>
            <div className='personal-info'>
                <img src={pp} alt="" />
                <div>
                    <h4 className='ms-5'> Jafrin Iqbal CHowdhury</h4>
                    <p className='ms-5 fs-6'><small>Chattogram,Bangladesh</small></p>
                </div>
            </div>
            <div className='personal-info-details'>
                <div className='border border-5 rounded mt-4 d-flex align-items-center px-5'>
                    <h4 className='ms-5 fs-6 fw-bold'>Undergrad. Student</h4>
                    <p className='ms-5 fs-6 fw-bold'>Teaching Assistant</p>
                    <p className='ms-5 fs-6 fw-bold'>Programmimg Contest Secretary</p>

                </div>
            </div>
            <h4 className='mt-5 fw-bold'>Add a break</h4>
            <div className='border border-5 rounded mt-4 mx-4 d-flex align-items-center px-5 py-3'>
                <button type="button" className="btn btn-secondary rounded-5 mx-2">10s</button>
                <button type="button" className="btn btn-secondary rounded-5 mx-2">20s</button>
                <button type="button" className="btn btn-secondary rounded-5 mx-2">30s</button>
                <button type="button" className="btn btn-secondary rounded-5 mx-2">40s</button>
                <button type="button" className="btn btn-secondary rounded-5 mx-2">50s</button>
            </div>
            <h4 className='mt-5 fw-bold'>Activity Details: </h4>
            <div className='activity-details border border-5 rounded mt-4 mx-3 d-flex align-items-center px-5 py-2'>
                <p className='pe-4 fs-5'>Activity Time: </p>
                <p className='pe-4 fw-bold fs-6'> {total} sec</p>
            </div>
            <div className='break-details border border-5 rounded mt-4 mx-3 d-flex align-items-center px-5 py-2'>
                <p className='pe-4 fs-5'>Break Time: </p>
                <p className='pe-4 fw-bold fs-6'> { } sec</p>
            </div>

            <button className='mt-5 me-5 text-center d-flex justify-content-center mx-5 px-5 btn btn-info'>
                <p className='fw-bold text-center'>Activity Completed</p>
            </button>
            <p>Selected Items: {cart.length}</p>
            {/* <h5>Grand Total: {grandTotal.toFixed(2)}</h5> */}
        </div>
    );
};

export default Cart;