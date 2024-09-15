import React, { useContext } from 'react';
import { useLoaderData } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { AoutContext } from '../../provaider/AoutProvider';

const Update = () => {
    const service = useLoaderData();
    const { user } = useContext(AoutContext)
    const { donator_name, food_image, food_quantity, additional_notes, pickup_location } = service;

    const handleConfirm = e => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const email = user?.email;
        const donator_image = form.donator_image.value;
        const foodImg = form.food_image.value;
        const foodQty = form.food_quantity.value;
        const date = form.date.value;
        const notes = form.additional_notes.value;
        const location = form.pickup_location.value;

        const order = {
            name,
            email,
            donator_image,
            food_image: foodImg,
            food_quantity: foodQty,
            date,
            additional_notes: notes,
            pickup_location: location,
        };

        fetch(`http://localhost:5000/updateFood/${service._id}`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(order),
        })
        .then(res => res.json())
        .then(data => {
            if (data.modifiedCount) {
                toast.success('Updated successfully!');
            } else {
                toast.error('Please change something to update');
            }
        })
        .catch(err => {
            console.error(err);
            toast.error('An error occurred while updating the order.');
        });
    };

    return (
        <div>
            <p>{donator_name}</p>
            <div className="card-body">
                <form onSubmit={handleConfirm}>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Customer Name</span>
                            </label>
                            <input type="text" name="name" placeholder="User Name" defaultValue={user?.displayName || ''} className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Food Image</span>
                            </label>
                            <input type="text" name="food_image" placeholder="Food Image URL" defaultValue={food_image || ''} className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" name="email" defaultValue={user?.email || ''} className="input input-bordered" readOnly />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Donator Image</span>
                            </label>
                            <input type="text" name="donator_image" placeholder="Donator Image URL" defaultValue={user?.photoURL || ''} className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Food Quantity</span>
                            </label>
                            <input type="text" name="food_quantity" placeholder="Food Quantity" defaultValue={food_quantity || ''} className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Date</span>
                            </label>
                            <input type="date" name="date" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Additional Notes</span>
                            </label>
                            <input type="text" name="additional_notes" placeholder="Additional Notes" defaultValue={additional_notes || ''} className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Pickup Location</span>
                            </label>
                            <input type="text" name="pickup_location" placeholder="Pickup Location" defaultValue={pickup_location || ''} className="input input-bordered" />
                        </div>
                    </div>
                    <div className="form-control mt-6">
                        <input className="btn btn-outline border-b-8 border-t-8 border-[1px] border-green-600" type="submit" value="Submit" />
                    </div>
                </form>
            </div>
            <ToastContainer />
        </div>
    );
};

export default Update;
