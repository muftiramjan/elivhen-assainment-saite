import React, { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { AoutContext } from "../../provaider/AoutProvider";

const RequestFood = () => {
  const {
    additional_notes,
    donator_image,
    donator_name,
    expired_datetime,
    food_image,
    food_name,
    food_quantity,
    pickup_location,
  } = useLoaderData(); // Destructure the loaded food data

  console.log(
    donator_name,
    expired_datetime,
  );

  const { user } = useContext(AoutContext); // Get user context

  const handleOrder = async (e) => {
    e.preventDefault();
    const form = e.target;

    // Gather form data
    const order = {
      customer_name: user?.displayName || "", // user name from context
      email: user?.email || "", // user email from context
      donator_image,
      food_image: form.food_image.value,
      food_name: form.food_name.value,
      food_quantity: form.food_quantity.value,
      date: form.date.value,
      additional_notes: form.additional_notes.value,
      pickup_location: form.pickup_location.value,
    };

    try {
      // Post order data to the backend
      const response = await fetch("https://car-doctor-server-nine-gilt.vercel.app/request", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(order),
      });

      const data = await response.json();

      // Show success message if the data is stored
      if (data.insertedId) {
        toast.success("Order successfully stored in the database!");
      }
    } catch (error) {
      // Handle any errors in the fetch request
      toast.error("There was an error processing your request.");
      console.error("Error:", error);
    }
  };

  return (
    <div>
      <h2>Request Food from {donator_name}</h2>
      <div className="card-body">
        <form onSubmit={handleOrder}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Donator Name</span>
              </label>
              <input
                type="text"
                name="donator_name"
                defaultValue={donator_name}
                className="input input-bordered"
                readOnly
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Food Image</span>
              </label>
              <input
                name="food_image"
                defaultValue={food_image}
                className="input input-bordered"
                readOnly
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Food Name</span>
              </label>
              <input
                type="text"
                name="food_name"
                defaultValue={food_name}
                className="input input-bordered"
                readOnly
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                name="email"
                defaultValue={user?.email}
                className="input input-bordered"
                readOnly
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Donator Image</span>
              </label>
              <input
                name="donator_image"
                defaultValue={donator_image}
                className="input input-bordered"
                readOnly
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Food Quantity</span>
              </label>
              <input
                type="text"
                name="food_quantity"
                defaultValue={food_quantity}
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Date</span>
              </label>
              <input
                type="date"
                name="date"
                defaultValue={expired_datetime?.split("T")[0]} // Ensure proper date format
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Additional Notes</span>
              </label>
              <input
                type="text"
                name="additional_notes"
                defaultValue={additional_notes}
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Pickup Location</span>
              </label>
              <input
                type="text"
                name="pickup_location"
                defaultValue={pickup_location}
                className="input input-bordered"
              />
            </div>
          </div>
          <div className="form-control mt-6">
            <input
              className="btn btn-outline border-b-8 border-t-8 border-[1px] border-green-600"
              type="submit"
              value="Submit"
            />
          </div>
        </form>
        <ToastContainer />
      </div>
    </div>
  );
};

export default RequestFood;
