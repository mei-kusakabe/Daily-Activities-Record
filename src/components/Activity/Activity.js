import React from 'react';
import './Activity.css';

const Activity = ({ activity, handleAddToList }) => {
    // console.log(props.activity)
    // const { activity, handleAddToList } = props
    const { name, img, description, duration } = activity
    // console.log(props)
    return (
        <div className='activity'>
            <img src={img} alt=""></img>
            <div className='activity-info'>
                <p className='activity-name fw-bold'>{name}</p>
                <p className='text-muted fs-6'><small>{description}</small></p>
                <p><small><b>Time Required:</b> {duration} sec</small></p>
            </div>
            <button onClick={() => handleAddToList(activity)} className='btn-cart'>
                <p className='btn-text fw-bold'>Add to List</p>
            </button>
        </div>
    );
};

export default Activity;