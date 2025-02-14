import { IonIcon } from '@ionic/react';
import React, { useEffect, useState } from 'react';
import { chevronDownOutline, chevronUpOutline, trashOutline, pencilOutline } from 'ionicons/icons';
import TaskComponent from '../components/TaskComponent.jsx';
import { Link } from 'react-router-dom';
import Header from '../components/Header';

const Home = () => {

    const [isLoading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [tasks, setTasks] = useState([]);

    // Make a form data state management
    const [formData, setFormData] = useState({});
    const handleChange = (event) => {
        setFormData({
            ...formData,
            [event.target.id]: event.target.value
        })
        console.log(formData);
    }
    const getListItems = async () => {
        try {
            const res = await fetch('/api/tasks/list', {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                },
            });
            const data = await res.json();
            setTasks(data.tasks);

        } catch (error) {
            log(error.message);
        }
    };

    useEffect(() => {
        getListItems()
    }, [tasks])


    const handleSubmit = async (event) => {
        setLoading(true);
        event.preventDefault();
        try {
            const res = await fetch('/api/tasks/create', {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(formData),
            },
            );
            const data = await res.json();
            if (data.success === false) {
                setError(data.message);
                setLoading(false);
                return;
            }
            // cLEAR USER INPUTS
            event.target.reset();
            setFormData({})
            setError(null);
        } catch (error) {
            setLoading(false);
            setError(error.message);
        }
        setLoading(false);
    }

    const deleteTask = async (id) => {
        try {
            const res = await fetch(`/api/tasks/delete/${id}`, {
                method: "DELETE",
                headers: {
                    "Content-Type": "application/json",
                },
            });
        } catch (error) {
            setError(error.message);
        }
    };

    return (
        <div>
            <Header
                title='Todo List'
                description='A simple todo list app'
            />

            {error && <div className='bg-red-500 text-white p-3 w-auto my-3 rounded-lg'>{error}</div>}
            <TaskComponent
                handleSubmit={handleSubmit}
                handleChange={handleChange}
                isLoading={isLoading}
                loading="Loading ...."
                loaded="Add task"
                formData={formData}
            />

            {
                tasks.map((task, index) => {
                    return (
                        <div key={index} className='flex max-w-lg flex-wrap justify-between items-center shadow  py-2 rounded-lg px-3 '>
                            <p>{index + 1}. {task.taskname}</p>
                            <div>
                                <IonIcon onClick={() => deleteTask(task._id)} className='text-3xl px-2 cursor-pointer text-[#FF6347]' icon={trashOutline} />
                                <Link to={`/update/${task._id}`}>
                                    <IonIcon className='text-2xl text-blue-500 px-2 cursor-pointer' icon={pencilOutline} />
                                </Link>
                            </div>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default Home