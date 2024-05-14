import React, { useEffect, useState } from 'react';
import Food from './Food';

const Foods = () => {
    const [Foods, setFoods] = useState([]);

    useEffect(()=>{
        fetch('https://car-doctor-server-nine-gilt.vercel.app/orderss')
        .then(res => res.json())
        .then(data => setFoods(data))
    }, [])

    const [searchTerm, setSearchTerm] = useState('');

    const filteredFoods = Foods.filter(food => {
        return food.food_name.toLowerCase().includes(searchTerm.toLowerCase());
    });

    // console.log(Foods);

    const seleteHandle = (e) =>{
        console.log(e.target.value);
        let sortedFood = [...Foods]
        if(e.target.value === 'ascending'){
            sortedFood.sort((a, b) => new Date(a.date) - new Date(b.date))
        }else if(e.target.value === 'dscending'){
            sortedFood.sort((a, b) => new Date(b.date) - new Date(a.date))
        }
        setFoods(sortedFood);
    }

    return (
        <>
            <div className='flex items-center justify-around bg-slate-400 w-100%'>
                <input
                    type="text"
                    placeholder="Search by food name..."
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="border border-gray-300 rounded p-2 mb-4"
                />

                <div>
                    <select onChange={seleteHandle} className='border' name="select" id="">
                        <option> sort by:</option>
                        <option value="ascending">Low to hight </option>
                        <option value="dscending"> hight to low</option>
                    </select>
                </div>
            </div>

            <div>
                <p>Foods: {Foods.length}</p>
                <div className='grid grid-cols-1 md:grid-cols-2  lg:grid-cols-2 gap-3'>
                    {
                        filteredFoods.map(food => <Food
                            key={food._id}
                            food={food}
                        ></Food>)
                    }
                </div>
            </div>
        </>
    );
};

export default Foods;
