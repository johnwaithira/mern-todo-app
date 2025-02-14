
import { useNavigate, useParams } from 'react-router-dom'
import Header from '../components/Header';
import TaskComponent from '../components/TaskComponent.jsx';
// this was the error
import React, { useState } from 'react';

const Update = () => {

    const { id } = useParams();

    const [isLoading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [formData, setFormData] = useState({});

    const navigate = useNavigate();

    const handleChange = (event) => {
        setFormData({
            ...formData,
            [event.target.id]: event.target.value,
            id : id
        })
    }

    const getTaskById = async () => {
        const res = await fetch(`/api/tasks/${id}`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(formData),
        });
    }

    const handleSubmit = async (event) => {
        event.preventDefault();
        setLoading(true);
        try {
            const res = await fetch(`/api/tasks/update/${id}`, {
                method: "PATCH",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(formData),
            });
            const data = await res.json();
            if(data.success === false){
                setError(data.message);
                setLoading(false);
                return;
            }
            navigate("/")
            setLoading(false)
        } catch (error) {
            setError(error.message);
            setLoading(false)
        }
        setLoading(false);
    }

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
                loading="Updating ...."
                loaded="Update task"
                formData={formData}
            />
        </div>
    )
}

export default Update