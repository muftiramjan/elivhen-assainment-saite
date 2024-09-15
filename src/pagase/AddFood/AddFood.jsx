import React, { useContext } from 'react';
import { useLoaderData } from 'react-router-dom';
import { AoutContext } from '../../provaider/AoutProvider';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const AddFood = () => {
    const servis = useLoaderData();
    const { donator_name, food_image, food_name, food_quantity, additional_notes, pickup_location,} = servis;
    const { user } = useContext(AoutContext);
    const handelorder = e => {
        e.preventDefault();
        const form = e.target;
        const donator_name = user?.displayName;
        const email = user?.email;
        const donator_image = user?.photoURL;
        const food_image = form.food_image.value;
        const food_name = form.food_name.value;
        const food_quantity = form.food_quantity.value;
        const expired_datetime = form.date.value;
        const additional_notes = form.additional_notes.value;
        const pickup_location = form.pickup_location.value;

        const order = {
            donator_name, donator_image,
            email, food_quantity, expired_datetime, additional_notes, pickup_location, food_image,
            food_name
        }

        fetch('http://localhost:5000/order', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(order)
        })
            .then(res => res.json())
            .then(data => {
                {
                    console.log(data);
                    if (data.insertedId) {
                        toast.success('database storege  successfully')
                    }
                }
            })

    }
    return (
        <div>
            <p>{donator_name}</p>
            <div className="card-body">
                <form onSubmit={handelorder}>
                    <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Donator_Name</span>
                            </label>
                            <input type="text" name='donator_name' defaultValue={user?.displayName} className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Food_Image</span>
                            </label>
                            <input name='food_image' placeholder='Food_Image' defaultValue={food_image} className="input input-bordered" />

                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Food_Name</span>
                            </label>
                            <input type="food_name" name='food_name' placeholder='Food_Name' defaultValue={food_name} className="input input-bordered" />

                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" name='email' placeholder='Email' defaultValue={user?.email} className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Donator_Image</span>
                            </label>
                            <input name='donator_image' placeholder='Donator_Image' defaultValue={user?.photoURL} className="input input-bordered" />

                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Food_Quantity</span>
                            </label>
                            <input type="food_quantity" name='food_quantity' placeholder='Food_Quantity' defaultValue={food_quantity} className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Date</span>
                            </label>
                            <input type="date" name='date' className="input input-bordered" />

                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Additional_Notes</span>
                            </label>
                            <input type="additional_notes" name='additional_notes' placeholder='Additional_Notes' defaultValue={additional_notes} className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Pickup_Location</span>
                            </label>
                            <input type="pickup_location" name='pickup_location' placeholder='Pickup_Location' defaultValue={pickup_location} className="input input-bordered" />
                        </div>
                    </div>
                    <div className="form-control mt-6">
                        <input className="btn btn-outline border-b-8 border-t-8 border-[1px] border-green-600" type="submit" value="submit" />
                    </div>
                </form>
                <ToastContainer />
            </div>
        </div>



    );
};

export default AddFood;