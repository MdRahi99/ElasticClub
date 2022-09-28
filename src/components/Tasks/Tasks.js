import React, { useEffect, useState } from 'react';
import Info from '../Info/Info';
import Task from '../Task/Task';
import './Tasks.css';

const Tasks = () => {
    const [tasks, setTasks] = useState([]);
    const [info, setInfo] = useState([]);

    useEffect(() => {
        fetch('tasks.json')
        .then(res => res.json())
        .then(data => setTasks(data))
    }, [])

    return (
        <div className='bg-teal-800 py-12'>
            <h2 className='text-3xl font-bold mx-8 text-gray-200'>Select Today's Tasks</h2>
            <div className='home-container grid grid-cols-5 gap-4 mx-8 my-10'>
                <div className='tasks-container col-span-4 grid grid-cols-3 gap-4'>
                    {
                        tasks.map(task => <Task 
                            key={task.id}
                            task={task}
                        ></Task>)
                    }
                </div>
                <div className='info-container bg-teal-700 rounded-md p-6'>
                    <Info info={info}></Info>
                </div>
            </div>
        </div>
    );
};

export default Tasks;