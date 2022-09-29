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
        <div className='bg-teal-800 py-12'>
            <h2 className='text-1xl lg:text-3xl md:text-3xl font-bold mx-8 text-gray-200'>Select Today's Tasks</h2>
            <div className='home-container grid grid-cols-2 lg:grid-cols-5 gap-4 mx-8 my-10'>
                <div className='tasks-container col-span-4 grid grid-cols-1 lg:grid-cols-3 gap-4'>
                    {
                        tasks.map(task => <Task 
                            key={task.id}
                            task={task}
                            handleAddToItem={handleAddToItem}
                        ></Task>)
                    }
                </div>
                <div className='info-container bg-teal-700 rounded-md p-6 col-span-4 lg:col-span-1 grid grid-cols-1'>
                    <Info info={info}></Info>
                </div>
            </div>
        </div>
    );
};

export default Tasks;