import React, { useContext } from 'react';
import { AoutContext } from '../../provaider/AoutProvider';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Helmet } from 'react-helmet-async';
import MyOrderManage from './MyOrderManage';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

const fetchOrders = async () => {
    const { data } = await axios.get('http://localhost:5000/order');
    return data;
};

const ManageFood = () => {
    const { user } = useContext(AoutContext);

    const { data: orders = [], isLoading, error } = useQuery({
        queryKey: ['orders'],
        queryFn: fetchOrders,
    });

    if (isLoading) {
        return <div>Loading...</div>;
    }

    if (error) {
        toast.error('An error occurred while fetching the orders.');
        return <div>An error occurred: {error.message}</div>;
    }

    return (
        <div>
            <p>Order: {orders.length}</p>
            <div>
                <Helmet>
                    <title>My Food Request</title>
                </Helmet>
            </div>
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Donator Image</th>
                            <th>Customer Name</th>
                            <th>Email</th>
                            <th>Date</th>
                            <th>Food Image</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {orders.map((order, index) => (
                            <MyOrderManage
                                key={order._id}
                                order={order}
                                index={index}
                            />
                        ))}
                    </tbody>
                </table>
            </div>
            <ToastContainer />
        </div>
    );
};

export default ManageFood;
