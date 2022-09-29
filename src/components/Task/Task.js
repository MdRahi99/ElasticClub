import React from 'react';
import './Task.css';

const Task = ({task, handleAddToItem}) => {
    const {img, activity_name, desc, time, age_limit} = task;
    return (
        <div className='bg-cyan-800 py-6 font-medium px-6 rounded-md text-slate-300 relative'>
            <div className='task-container text-slate-300'>
                <img className='h-40 w-full mb-4 rounded-md' src={img} alt="" />
                <p className='text-2xl font-bold mb-2'>{activity_name}</p>
                <p className='mb-2'><span className='font-extrabold'>Description:</span> {desc}</p> 
                <p className='mb-2'><span className='font-extrabold'>Time Required:</span> {time} min</p>
                <p className='mb-2'><span className='font-extrabold'>Age Limit:</span> {age_limit}</p>
            </div>
            <button className='font-bold bg-cyan-900 hover:bg-cyan-600 text-slate-300 py-3 px-28 mx-auto w-full rounded-md absolute bottom-0 left-0' onClick={() => handleAddToItem(task)}>Select</button>
        </div>
    );
};

export default Task;