import React from 'react';
import { Link } from 'react-router-dom';


const Myorderrow = ({ order, handeledelete, }) => {
    const { castmarname,email, donator_image,food_image, date, _id,} = order;
    return (
        <tr>
            <th>
                <button onClick={() => handeledelete(_id)} className="btn btn-circle btn-sm">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
                </button>
            </th>
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

                <Link to="/update">update</Link>

            </th>

        </tr>

    );
};

export default Myorderrow;