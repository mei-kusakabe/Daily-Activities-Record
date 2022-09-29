import React, { useEffect, useState } from 'react';
import pp from '../../images/jaf-bg.png'
import './Cart.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Cart = ({ cart }) => {
    const [breaktime, setBreaktime] = useState([]);
    let total = 0;
    for (const activity of cart) {
        total = total + activity.duration;
    }

    const handlebreakTimeToList = (breaktime) => {
        console.log(breaktime);
        setBreaktime(breaktime)
    }

    useEffect(() => {
        localStorage.setItem('breaktime', JSON.stringify(breaktime));
    }, [breaktime]);

    // const notify = () => {

    //     // Calling toast method by passing string
    //     toast('Hello Geeks')
    // }

    const showToastMessage = () => {
        toast.success('Activity All done !', {
            position: toast.POSITION.TOP_RIGHT
        });
    };

    return (
        <div className='cart container'>
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

            <div className='break-button'>
                <h4 className='mt-5 fw-bold'>Add a break</h4>
                <div className='border border-5 rounded mt-4 mx-4 d-flex align-items-center px-5 py-3'>
                    <button onClick={() => handlebreakTimeToList(10)} type="button" className="btn btn-secondary rounded-5 mx-2">10s</button>
                    <button onClick={() => handlebreakTimeToList(20)} type="button" className="btn btn-secondary rounded-5 mx-2">20s</button>
                    <button onClick={() => handlebreakTimeToList(30)} type="button" className="btn btn-secondary rounded-5 mx-2">30s</button>
                    <button onClick={() => handlebreakTimeToList(40)} type="button" className="btn btn-secondary rounded-5 mx-2">40s</button>
                    <button onClick={() => handlebreakTimeToList(50)} type="button" className="btn btn-secondary rounded-5 mx-2">50s</button>
                </div>
            </div>

            <div className='activity-details'>
                <h4 className='mt-5 fw-bold'>Activity Details: </h4>
                <div className='activity-details border border-5 rounded mt-4 mx-3 d-flex align-items-center px-5 py-2'>
                    <p className='pe-4 fs-5'>Activity Time: </p>
                    <p className='pe-4 fw-bold fs-6'> {total} sec</p>
                </div>
                <div className='break-details border border-5 rounded mt-4 mx-3 d-flex align-items-center px-5 py-2'>
                    <p className='pe-4 fs-5'>Break Time: </p>
                    <p className='pe-4 fw-bold fs-6'> {breaktime} sec</p>
                </div>

                <button onClick={showToastMessage} className='mt-5 me-5 text-center d-flex justify-content-center mx-5 px-5 btn btn-info'>
                    Activity Completed
                </button> <ToastContainer />
            </div>


            {/* <p>Selected Items: {cart.length}</p> */}
            {/* <h5>Grand Total: {grandTotal.toFixed(2)}</h5> */}
        </div>
    );
};

export default Cart;
