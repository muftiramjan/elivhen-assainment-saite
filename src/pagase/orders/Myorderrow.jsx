import React, { useState } from 'react';
const Myorderrow = ({ order, index}) => {
    const { castmarname, email, donator_image, food_image, date, _id, } = order;
    return (
        <tr>
            <td>{index +1}</td>
            <td>
                <div className="flex items-center gap-3">
                    <div className="avatar">
                        <div className="mask mask-squircle w-12 h-12">
                            <img src={donator_image} alt="Avatar Tailwind CSS Component" />
                        </div>
                    </div>

                </div>
            </td>
            <td>
                {castmarname}

            </td>
            <td>{email}</td>
            <td>{
                date}</td>
            <td><img className='w-11' src={food_image} alt="" /></td>
            <th>
                <div className=''>
                    <button className='text-red-600'>Confirm</button>
                </div>
            </th>
        </tr>

    );
};

export default Myorderrow;

