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
                <p className='activity-name'>{name}</p>
                <p><small>About: {description}</small></p>
                <p><small>Time Required: {duration}</small></p>
            </div>
            <button onClick={() => handleAddToList(activity)} className='btn-cart'>
                <p className='btn-text'>Add to List</p>
            </button>
        </div>
    );
};

export default Activity;