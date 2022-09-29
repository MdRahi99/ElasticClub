import React, { useEffect, useState } from 'react';
import { addToDb, getStoredCart } from '../../utilities/fakedb';
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

    useEffect(() => {
        const storedItem = getStoredCart();
        const savedItem = [];
        for(const id in storedItem){
            const addedItem = tasks.find(task => task.id === id);
            if(addedItem){
                const timeQuantity = storedItem[id];
                addedItem.time_quantity = timeQuantity;
                savedItem.push(addedItem);
            }
        }
        setInfo(savedItem);
    }, [tasks])

    const handleAddToItem = (selectedItem) => {
        let newItem = []
        const existItems = info.find(task => task.id === selectedItem.id);
        if(!existItems){
            selectedItem.time_quantity = 1;
            newItem = [...info, selectedItem];
        }

        else{
            const restItems = info.filter(task => task.id !== selectedItem.id);
            existItems.time_quantity = existItems.time_quantity + 1;
            newItem = [...restItems, existItems];
        }
        setInfo(newItem);
        addToDb(selectedItem.id);
    }

    return (
        <div className='bg-cyan-700 py-12'>
            <h2 className='text-1xl lg:text-3xl md:text-3xl font-bold mx-8 text-slate-200'>Select Today's Tasks</h2>
            <div className='home-container grid grid-cols-2 lg:grid-cols-5 gap-4 mx-8 my-10'>
                <div className='tasks-container col-span-4 grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-4'>
                    {
                        tasks.map(task => <Task 
                            key={task.id}
                            task={task}
                            handleAddToItem={handleAddToItem}
                        ></Task>)
                    }
                </div>
                <div className='info-container bg-cyan-800 rounded-md p-6 col-span-4 lg:col-span-1 grid grid-cols-1'>
                    <Info info={info}></Info>
                </div>
            </div>
            <div className='blog-container m-8 bg-cyan-800 p-4 rounded-md text-gray-200'>
                <h1 className='text-3xl text-center font-bold py-8'>Blogs</h1>
                <div className='grid grid-cols-1 lg:grid-cols-1 md:grid-cols-2 gap-4'>
                <div className='bg-cyan-700 p-4 rounded-md'>
                <h1 className='text-2xl mb-3'>How does React Works?</h1>
                <p>React goes through its virtual DOM ,creates a list of those changes that need to be made to the actual DOM and then does it all in one single process. In fancy words, React does batch updates. So putting all pieces together, Reconciliation = Render + Diffing occurs in between + Commit.</p>
                </div>
        
                <div className='bg-cyan-700 p-4 rounded-md'>
                <h1 className='text-2xl mb-3'>What are the difference between props and state in React?</h1>
                <p>Props are used to pass data from one component to another. The state is a local data storage that is local to the component only and cannot be passed to other components.</p>
                <p>Props can be used with state and functional components. State can be used only with the state components/class component</p>
                <p>Props are read-only. State is both read and write.</p>
                </div>

                <div className='bg-cyan-700 p-4 rounded-md'>
                <h1 className='text-2xl mb-3'>What are the usage of useEffect except api data fething?</h1>
                <p>Some common use cases of useEffect are:
                <br />
                1.Add an event listener for a button
                  <br />
                2. Data fetching from API when component mounts
                 <br />
                3. Perform an action when state or props change
                 <br />
                4. Clean up event listeners when the component unmounts</p>
                </div>
            </div>
            </div>
        </div>
    );
};

export default Tasks;