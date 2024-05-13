import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Food from './Food';

const Foods = () => {
    const Foods =useLoaderData();
    return (
        <div>
            <p>Foods: {Foods.length}</p>
          <div className='grid grid-cols-1 md:grid-cols-2  lg:grid-cols-2 gap-3'>
          {
                Foods.map(food => <Food
                key={food._id}
                food={food}
                ></Food>)
            }
          </div>
        </div>
    );
};

export default Foods;