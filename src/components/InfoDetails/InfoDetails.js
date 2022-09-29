import React from 'react';

const InfoDetails = ({breakBtn, info}) => {

    
    let totalTime = 0;
    
    for(const time of info){
        totalTime = totalTime + time.time;
    }

    return (
        <div>
            <h1 className='text-2xl font-semibold mb-2'>Task Details:</h1>

            <div className='bg-teal-600 py-4 px-2 my-8 rounded-md text-gray-100'>
                <h1 className='font-semibold'>Tasks Time <span className='ml-20'>{totalTime} min</span></h1>  
            </div>

            <div className='bg-teal-600 py-4 px-2 rounded-md text-gray-100'>
                <h1 className='font-semibold'>Break Time <span className='ml-24'>{breakBtn}</span></h1>
            </div>

            <button className='bg-teal-600 hover:bg-teal-500 py-3 px-12 rounded-md text-gray-100 my-12'>Tasks Completed</button>
        </div>
    );
};

export default InfoDetails;