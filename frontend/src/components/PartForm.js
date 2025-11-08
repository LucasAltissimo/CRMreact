import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const PartForm = () => {
    const [formData, setFormData] = useState({
        name: '',
        code: '',
        description: '',
        quantity: 0,
        location: '',
        value: 0,
    });
    const navigate = useNavigate();

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.post('/api/inventory/parts/', formData);
            navigate('/inventory');
        } catch (error) {
            console.error('There was an error creating the part!', error);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <h2>Register New Part</h2>
            <input type="text" name="name" placeholder="Name" onChange={handleChange} required />
            <input type="text" name="code" placeholder="Code" onChange={handleChange} required />
            <textarea name="description" placeholder="Description" onChange={handleChange}></textarea>
            <input type="number" name="quantity" placeholder="Quantity" onChange={handleChange} required />
            <input type="text" name="location" placeholder="Location" onChange={handleChange} required />
            <input type="number" name="value" placeholder="Value" step="0.01" onChange={handleChange} required />
            <button type="submit">Register</button>
        </form>
    );
};

export default PartForm;
