import React, { useState } from 'react';
import toast from 'react-hot-toast';
import axios from 'axios';

const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000/api/developers';

const DeveloperForm = ({ onAddDeveloper }) => {
    const [formData, setFormData] = useState({
        name: '',
        role: 'Frontend',
        techStack: '',
        experience: ''
    });

    const handleChange = (e) => {
        setFormData({...formData, [e.target.name]: e.target.value});
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if(!formData.name || !formData.techStack || formData.experience === '') {
            toast.error('Please fill in all fields');
            return;
        } 
        try {
            // ensure experience is a number and send payload matching backend expectation
            const payload = { ...formData, experience: Number(formData.experience) };
            await axios.post(API_URL, payload);
            toast.success('Developer added successfully');
            if (typeof onAddDeveloper === 'function') onAddDeveloper();
            setFormData({
                name: '',
                role: 'Frontend',
                techStack: '',
                experience: ''
            });
        } catch(error) {
            console.error('Error adding developer: ', error);
            const errorMessage = error.response?.data?.message || 'Failed to add developer';
            toast.error(errorMessage);
        }
    };
  return (
    <div className='p-6 bg-white shadow-lg rounded-lg'>
        <h2 className='text-2xl font-semibold mb-4'> Add Developer </h2>
        <form onSubmit={handleSubmit} className='space-y-4'>
            <div>
                <label className='block mb-1 font-medium'>Name</label>
                <input
                    type='text'
                    name='name'
                    value={formData.name}
                    onChange={handleChange}
                    className='w-full px-3 py-2 border rounded-md'
                />
            </div>
            <div>
                <label className='block mb-1 font-medium'>Role</label>
                <select
                    name='role'
                    value={formData.role}
                    onChange={handleChange}
                    className='w-full px-3 py-2 border rounded-md'
                >
                    <option value='Frontend'>Frontend</option>
                    <option value='Backend'>Backend</option>
                    <option value='Fullstack'>Fullstack</option>
                </select>
            </div>
            <div>
                <label className='block mb-1 font-medium'>Tech Stack</label>
                <input
                    type='text'
                    name='techStack'
                    value={formData.techStack}
                    onChange={handleChange}
                    className='w-full px-3 py-2 border rounded-md'
                />
            </div>
            <div>
                <label className='block mb-1 font-medium'>Experience (years)</label>
                <input
                    type='number'
                    name='experience'
                    value={formData.experience}
                    onChange={handleChange}
                    className='w-full px-3 py-2 border rounded-md'
                />
            </div>
            <button type='submit' className='w-full py-2 bg-indigo-600 text-white font-semibold rounded-md hover:bg-indigo-700 transition'>Add Developer</button>
        </form>
      
    </div>
  );
};

export default DeveloperForm;
