
import { useContext } from 'react';
import { useLoaderData } from 'react-router-dom';

import { AoutContext } from '../../provaider/AoutProvider';


const Checout = () => {
    const { user } = useContext(AoutContext);
    const service = useLoaderData();
    const { title, img, price, _id } = service;
    const handelcarsarves = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const date = form.date.value;
        const email = user?.email;
        const price = form.price.value;

        const order = {
            castomarName:
                name,
            date,
            email,
            price,
            img,
            service: title,
            service_id:_id
        }

        fetch('http://localhost:5000/order', {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify(order)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.insertedId) {
                    alert('order confarmeteded')
                }
            })
    }
    
    return (
        <div>
            <p className='text-3xl font-bold text-black text-center'>{title}</p>
            <form onSubmit={handelcarsarves} >
                <div className='grid  grid-cols-1 md:grid-cols-2 gap-3'>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">name</span>
                        </label>
                        <input type="name" name='name' defaultValue={user?.displayName} className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">date</span>
                        </label>
                        <input type="date" name='date' className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="email" defaultValue={user?.email} className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">deo price</span>
                        </label>
                        <input type="text" name='price' defaultValue={price} className="input input-bordered" required />
                    </div>
                </div>
                <div className="form-control mt-6">
                    <input className="btn btn-primary" type="submit" value="order confram" />
                </div>
            </form>
        </div>

    );
};

export default Checout;