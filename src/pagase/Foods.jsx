import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import SarvisesCard from './Home/saeveses/SarvisesCard';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

const fetchCarServes = async () => {
    const { data } = await axios.get('http://localhost:5000/orderss');
    return data;
};

const Foods = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [isThreeColumnLayout, setIsThreeColumnLayout] = useState(true);

    const { data: foods = [], error, isLoading } = useQuery({
        queryKey: ['carServes'],
        queryFn: fetchCarServes
    });

    if (isLoading) return <div>Loading...</div>;
    if (error) return <div>An error occurred: {error.message}</div>;

    const filteredFoods = foods.filter(food =>
        food.food_name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    const handleSelectChange = (e) => {
        const sortedFood = [...foods];
        if (e.target.value === 'ascending') {
            sortedFood.sort((a, b) => new Date(a.expired_datetime) - new Date(b.expired_datetime));
        } else if (e.target.value === 'descending') {
            sortedFood.sort((a, b) => new Date(b.expired_datetime) - new Date(a.expired_datetime));
        }
        setFoods(sortedFood);
    };

    const toggleLayout = () => {
        setIsThreeColumnLayout(prevLayout => !prevLayout);
    };

    return (
        <>
            <Helmet>
                <title>Available Foods</title>
            </Helmet>
            <div className='flex items-center justify-around bg-slate-400 w-full p-4 mt-20'>
                <input
                    type="text"
                    placeholder="Search by food name..."
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="border border-gray-300 rounded p-2"
                />

                <div className='flex items-center'>
                    <p className='btn btn-outline border-b-8 border-t-8 border-[1px] border-green-600font-bold text-1xl mr-2'>Sort</p>
                    <select onChange={handleSelectChange} className='border p-2 rounded'>
                        <option value="">Sort by:</option>
                        <option value="ascending">Low to High</option>
                        <option value="descending">High to Low</option>
                    </select>
                </div>

                <button
                    onClick={toggleLayout}
                    className="btn btn-outline border-b-8 border-t-8 border-[1px] border-green-600"
                >
                    Change Layout
                </button>
            </div>

            <div className="p-4">
                <p>Foods: {filteredFoods.length}</p>
                <div className={`grid gap-3 ${isThreeColumnLayout ? 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3' : 'grid-cols-1 md:grid-cols-2'}`}>
                    {filteredFoods.map(food => (
                        <SarvisesCard
                            key={food._id}
                            card={food}
                        />
                    ))}
                </div>
            </div>
        </>
    );
};

export default Foods;
