import React from 'react';
import { Routes, Route } from 'react-router-dom';
import SiteLayout from './components/SiteLayout';
import HomePage from './pages/HomePage';
import OrderPage from './pages/OrderPage';

export default function App() {
    return (
        <Routes>
            <Route path="/" element={<SiteLayout />}>
                <Route index element={<HomePage />} />
                <Route path="order" element={<OrderPage />} />
            </Route>
        </Routes>
    );
}
