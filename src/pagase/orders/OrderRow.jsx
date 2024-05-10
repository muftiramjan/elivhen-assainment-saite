import React from 'react';

const OrderRow = ({ order, handeleDelete, handeleconfrim }) => {
    const { _id, date, service, price, img, status } = order;


    return (
        <tr>
            <th>
                <button onClick={() => handeleDelete(_id)} className="btn btn-circle btn-outline btn-sm">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
                </button>
            </th>
            <td>

                <div className="avatar">
                    <div className="mask mask-squircle w-24 h-24">
                        {img && <img src={img} alt="Avatar Tailwind CSS Component" />}
                    </div>
                </div>


            </td>
            <td>
                {service}

            </td>
            <td>{date}</td>
            <td>{price}</td>
            <th>
                {status === ('confirm') ? <span className=' font-bold text-primary'>confirmed</span> :
                    <button onClick={() => handeleconfrim(_id)} className="btn btn-ghost btn-xs">please confirm</button>}
            </th>
        </tr>
    );
};

export default OrderRow;