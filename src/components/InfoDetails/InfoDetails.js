import React from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const InfoDetails = ({breakBtn, info}) => {

    const notify = () => toast.info("Task Completed", {position: 'top-center', theme: 'colored'});

    let totalTime = 0;
    let timeQuantity = 0;
    
    for(const time of info){
        timeQuantity = timeQuantity + time.time_quantity;
        totalTime = totalTime + time.time * time.time_quantity;
    }

    return (
        <div>
            <h1 className='text-2xl font-semibold mb-2'>Task Details:</h1>

            <div className='bg-cyan-700 py-4 px-2 my-8 rounded-md text-gray-100'>
                <h1 className='font-semibold'>Tasks Time <span className='ml-20'>{totalTime} min</span></h1>  
            </div>

            <div className='bg-cyan-700 py-4 px-2 rounded-md text-gray-100'>
                <h1 className='font-semibold'>Break Time <span className='ml-20'>{breakBtn}</span></h1>
            </div>

            <button onClick={notify} className='bg-cyan-900 hover:bg-cyan-600 py-3 px-12 rounded-md text-gray-100 my-12'>Tasks Completed</button>
            <ToastContainer></ToastContainer>
        </div>
    );
};

export default InfoDetails;