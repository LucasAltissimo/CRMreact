import React from 'react';
import { Link } from 'react-router-dom';

const Navigation = () => {
    return (
        <nav>
            <Link to="/"><button>Home</button></Link>
            <Link to="/service-orders"><button>Service Orders</button></Link>
            <Link to="/quotes"><button>Quotes</button></Link>
            <Link to="/inventory"><button>Inventory</button></Link>
        </nav>
    );
};

export default Navigation;
