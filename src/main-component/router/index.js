import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Homepage from '../HomePage/HomePage';

const AllRoute = () => {
    return (
        <div className="App">
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Homepage />} />
                </Routes>
            </BrowserRouter>
        </div>
    );
};

export default AllRoute;
