import React, { useContext, useEffect, useState } from 'react';
import { AoutContext } from '../../provaider/AoutProvider';
import OrderRow from './OrderRow';
import axios from 'axios';


const Orders = () => {
    const { user } = useContext(AoutContext);
    console.log(user);
    const [orders, setorder] = useState([]);



    useEffect(() => {
        // if (user) {
            axios.get(`http://localhost:5000/orders?email=${user?.email}`,{withCredentials:true})
            .then(res => {
                setorder(res.data)
            })
            // fetch(`http://localhost:5000/orders?email=${user?.email}`,{withCredentials: true})
            //     .then(res => res.json())
            //     .then(data => {
            //         setorder(data);
            //     })
        // }
    }, [user])

    const handeleDelete = id => {
        const proside = confirm('are your seure you one to delete');
        if (proside) {
            fetch(`http://localhost:5000/orders/${id}`,
                {
                    method: "DELETE"
                }
            )
                .then(res => res.json())
                .then(data => {
                    console.log(data)
                    if (data.deletedCount > 0) {
                        alert('delete succsedfully');
                        const remaining = orders.filter(order => (order._id !== id))
                        setorder(remaining)
                    }

                })
        }
    }

    const handeleconfrim = id => {
        const proside = confirm('are your seure you one to update');
        if(proside){
            fetch(`http://localhost:5000/orders/${id}`,
         {
            method: 'PATCH',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({ status: 'confirm' })
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.modifiedcount > 0) {
                    // updet state
                    const remaining = orders.filter(order => (order._id !== id))
                    const updates =orders.find(order => order._id ===id)
                    updates.status = 'confrim'
                    const newOrders = [updates, ...remaining];
                    setorder(newOrders)
                }

            })
        }
    }
    return (
        <div>
            <p className='text-4 font-bold text-center text-lime-600'>your order list : {orders.length}</p>
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>
                                <label>
                                    <input type="checkbox" className="checkbox" />
                                </label>
                            </th>
                            <th>img </th>
                            <th>servece</th>
                            <th>date</th>
                            <th>price</th>
                            <th>statas</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            orders.map(order => <OrderRow
                                key={order._id}
                                order={order}
                                handeleDelete={handeleDelete}
                                handeleconfrim={handeleconfrim}
                            ></OrderRow>)
                        }

                    </tbody>


                </table>
            </div>
        </div>
    );
};

export default Orders;