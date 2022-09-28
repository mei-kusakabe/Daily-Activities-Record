import React, { useEffect, useState } from 'react';
import './Activities.css'
import Activity from '../Activity/Activity';

const Activities = () => {

    const [activities, setActivities] = useState([]);
    useEffect(() => {
        fetch('activities.json')
            .then(res => res.json())
            .then(data => {
                setActivities(data);
            })
    }, [])
    return (
        <div>
            <p>Select Today's Activities</p>

            <div className='activities-container'>
                <div className="activitiy-container">
                    {
                        activities.map(activity => <Activity key={activity.id}></Activity>)
                    }
                </div>
                <div className="cart-container">
                    <h2>This is for cart</h2>
                </div>
            </div>
        </div >
    );
};

export default Activities;