import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Quote = () => {
    const [quotes, setQuotes] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        axios.get('/api/quote/quotes/')
            .then(response => {
                setQuotes(response.data);
                setLoading(false);
            })
            .catch(error => {
                console.error("There was an error fetching the quotes!", error);
                setLoading(false);
            });
    }, []);

    if (loading) {
        return <p>Loading...</p>;
    }

    return (
        <div>
            <h1>Quotes</h1>
            <ul>
                {quotes.map(quote => (
                    <li key={quote.id}>
                        <p><strong>Quote for OS #{quote.service_order}</strong></p>
                        <p>Total Cost: {quote.total_cost}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Quote;
