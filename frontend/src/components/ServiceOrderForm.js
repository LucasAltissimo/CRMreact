import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const ServiceOrderForm = () => {
    const [formData, setFormData] = useState({
        client_name: '',
        client_phone: '',
        client_address: '',
        client_cep: '',
        device_brand: '',
        device_model: '',
        device_serial_number: '',
        device_patrimony_number: '',
        accessories: '',
        defect: '',
        observation: '',
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
            // First, create the client
            const clientResponse = await axios.post('/api/service/clients/', {
                name: formData.client_name,
                phone: formData.client_phone,
                address: formData.client_address,
                cep: formData.client_cep,
            });
            const clientId = clientResponse.data.id;

            // Second, create the device
            const deviceResponse = await axios.post('/api/service/devices/', {
                brand: formData.device_brand,
                model: formData.device_model,
                serial_number: formData.device_serial_number,
                patrimony_number: formData.device_patrimony_number,
            });
            const deviceId = deviceResponse.data.id;

            // Finally, create the service order
            await axios.post('/api/service/service-orders/', {
                client: clientId,
                device: deviceId,
                accessories: formData.accessories,
                defect: formData.defect,
                observation: formData.observation,
            });

            // Redirect to the service orders list
            navigate('/service-orders');
        } catch (error) {
            console.error('There was an error creating the service order!', error);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <h2>Register New Service Order</h2>

            <h3>Client Details</h3>
            <input type="text" name="client_name" placeholder="Name" onChange={handleChange} required />
            <input type="text" name="client_phone" placeholder="Phone" onChange={handleChange} required />
            <input type="text" name="client_address" placeholder="Address" onChange={handleChange} required />
            <input type="text" name="client_cep" placeholder="CEP" onChange={handleChange} required />

            <h3>Device Details</h3>
            <input type="text" name="device_brand" placeholder="Brand" onChange={handleChange} required />
            <input type="text" name="device_model" placeholder="Model" onChange={handleChange} required />
            <input type="text" name="device_serial_number" placeholder="Serial Number" onChange={handleChange} required />
            <input type="text" name="device_patrimony_number" placeholder="Patrimony Number (Optional)" onChange={handleChange} />

            <h3>Service Details</h3>
            <textarea name="accessories" placeholder="Accessories" onChange={handleChange}></textarea>
            <textarea name="defect" placeholder="Defect" onChange={handleChange} required></textarea>
            <textarea name="observation" placeholder="Observation" onChange={handleChange}></textarea>

            <button type="submit">Register</button>
        </form>
    );
};

export default ServiceOrderForm;
