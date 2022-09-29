import React, { useEffect, useState } from 'react';
import InfoDetails from '../InfoDetails/InfoDetails';
import './Info.css';

const Info = ({info}) => {
    const [breakBtn, setBreakBtn] = useState('');

    useEffect(() => {
        localStorage.setItem('break-items', JSON.stringify(breakBtn))
            setBreakBtn(breakBtn);
    }, [breakBtn])

    return (
        <div className='info-container'>
            <div className='text-gray-200'>
                <h1 className='font-bold text-2xl'>Md Forhad Hossain Rahi</h1>
                <p>Dhaka,Bangladesh</p>
            </div>

            <div className='flex gap-3 justify-between bg-slate-200 p-2 mt-3 rounded'>
                        <div>
                            <h3>64</h3>
                            <p>Weight</p>
                        </div>
                        <div>
                            <h3>5.9</h3>
                            <p>Height</p>
                        </div>
                        <div>
                            <h3>22yrs</h3>
                            <p>Age</p>
                        </div>
            </div>

            <div className='mt-12 text-gray-200'>
                <h1 className='text-2xl font-semibold mb-3'>Take a Break</h1>
                <div className='grid grid-cols-5 gap-2 bg-cyan-700 py-4 px-3 rounded-md text-gray-100 text-center'>
                    <input className='bg-cyan-800 rounded-lg hover:bg-cyan-600' type="button" name='breakBtn' value='5m' onClick={e => setBreakBtn(e.target.value)}/>
                    <input className='bg-cyan-800 rounded-lg hover:bg-cyan-600' type="button" name='breakBtn' value='10m' onClick={e => setBreakBtn(e.target.value)}/>
                    <input className='bg-cyan-800 rounded-lg hover:bg-cyan-600' type="button" name='breakBtn' value='15m' onClick={e => setBreakBtn(e.target.value)}/>
                    <input className='bg-cyan-800 rounded-lg hover:bg-cyan-600' type="button" name='breakBtn' value='20m' onClick={e => setBreakBtn(e.target.value)}/>
                    <input className='bg-cyan-800 rounded-lg hover:bg-cyan-600' type="button" name='breakBtn' value='30m' onClick={e => setBreakBtn(e.target.value)}/>
                    
                </div>
            </div>

            <div className='mt-12 text-gray-200'>
                <InfoDetails breakBtn={breakBtn} info={info}></InfoDetails>
            </div>
        </div>
    );
};

export default Info;