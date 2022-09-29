import React, { useEffect, useState } from 'react';
import './Activities.css'
import Activity from '../Activity/Activity';
import Cart from '../Cart/Cart';

const Activities = () => {

    const [activities, setActivities] = useState([]);
    const [cart, setCart] = useState([]);
    useEffect(() => {
        fetch('activities.json')
            .then(res => res.json())
            .then(data => {
                setActivities(data);
            })
    }, [])

    const handleAddToList = (activity) => {
        console.log(activity);

        let newCart = [...cart, activity];
        setCart(newCart)

    }
    return (
        <div className='container'>
            <p className='fs-4 fw-bold'>Select Today's Activities</p>
            <div className='activities-container'>

                <div className="activity-container">
                    {
                        activities.map(activity => <Activity
                            key={activity.id}
                            activity={activity}
                            handleAddToList={handleAddToList}
                        ></Activity>)
                    }
                </div>
                <div className="cart-container">
                    <Cart cart={cart}></Cart>
                </div>
            </div>
        </div>

    );
};

export default Activities;