import React, { useContext, useEffect, useState } from 'react';
import { AoutContext } from '../../provaider/AoutProvider';
import Myorderrow from './Myorderrow';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Myorder = () => {
    const { user } = useContext(AoutContext);
    const [orders, setorders] = useState([]);

    const url = `http://localhost:5000/orders?email=${user?.email}`;

    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => setorders(data))

    }, [user]);

    const handeledelete = id => {
        const proceed = confirm('ar you seour of delete');
        if (proceed) {
            fetch(`http://localhost:5000/orders/${id}`, {
                method: "DELETE"
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    if (data.deletedCount > 0) {
                        toast.success('Deleted sussecfull')
                        const remaining = orders.filter(order => order._id !== id)
                        setorders(remaining)
                    }
                })

        }
    }

    const handeleconfrim = id => {
        fetch(`http://localhost:5000/orders/${id}`,{
            method:"PATCH",
            headers:{
                'content-type': 'application/json'
            },
            body: JSON.stringify({status: 'confrim'})
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.modifiedCount){
                    // updet
                    const remaining = orders.filter(order => order._id !== id)
                    const update =orders.find(order => order._id === id)
                    update.status= 'confrim'
                    const neworders=[update,...remaining];
                    setorders(neworders)

                }
            })
        }
        return (
            <div>
                <p>order :{orders.length}</p>
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
                                <th>donator_image</th>
                                <th>castmarname</th>
                                <th>email</th>
                                <th>date</th>
                                <th>
                                    food_image</th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                orders.map(order => <Myorderrow
                                    key={order._id}
                                    order={order}
                                    handeledelete={handeledelete}
                                    handeleconfrim={handeleconfrim}
                                ></Myorderrow>)
                            }



                        </tbody>


                    </table>
                </div>
                <ToastContainer />
            </div>
        );
    };

    export default Myorder;