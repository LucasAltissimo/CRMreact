import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const ServiceOrder = () => {
    const [serviceOrders, setServiceOrders] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        axios.get('/api/service/service-orders/')
            .then(response => {
                setServiceOrders(response.data);
                setLoading(false);
            })
            .catch(error => {
                console.error("There was an error fetching the service orders!", error);
                setLoading(false);
            });
    }, []);

    if (loading) {
        return <p>Loading...</p>;
    }

    return (
        <div>
            <h1>Service Orders</h1>
            <Link to="/service-orders/new">
                <button>Register New Service Order</button>
            </Link>
            <ul>
                {serviceOrders.map(order => (
                    <li key={order.id}>
                        <p><strong>OS #{order.id}</strong></p>
                        <p>Client: {order.client}</p>
                        <p>Device: {order.device}</p>
                        <p>Defect: {order.defect}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default ServiceOrder;
