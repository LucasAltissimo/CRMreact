import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Part = () => {
    const [parts, setParts] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        axios.get('/api/inventory/parts/')
            .then(response => {
                setParts(response.data);
                setLoading(false);
            })
            .catch(error => {
                console.error("There was an error fetching the parts!", error);
                setLoading(false);
            });
    }, []);

    if (loading) {
        return <p>Loading...</p>;
    }

    return (
        <div>
            <h1>Inventory Parts</h1>
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Code</th>
                        <th>Quantity</th>
                        <th>Location</th>
                        <th>Value</th>
                    </tr>
                </thead>
                <tbody>
                    {parts.map(part => (
                        <tr key={part.id}>
                            <td>{part.name}</td>
                            <td>{part.code}</td>
                            <td>{part.quantity}</td>
                            <td>{part.location}</td>
                            <td>{part.value}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default Part;
