import { Link } from "react-router-dom";


const SarvisesCard = ({ card }) => {

  const { food_name,food_image,pickup_location ,_id,expired_datetime,additional_notes,email,
    donator_name} = card;
  return (
    <div className="card w-96 bg-base-100 shadow-xl">
      <figure className="px-10 pt-10">
        <img src={food_image} alt="Shoes" className="rounded-xl h-70" />
      </figure>
      <div className="card-body items-center ">
        <h2 className="card-title">{food_name}</h2>
        <p className="text-blue-500"><span className="font-bold text-black">pickup_location:</span> {pickup_location}</p>
        <p className="text-blue-500"><span className="font-bold text-black">expired_datetime:</span> {expired_datetime}</p>
        <p className="text-blue-500"><span className="font-bold text-black">additional_notes:</span> {additional_notes}</p>
        <p className="text-blue-500"><span className="font-bold text-black">donator_name:</span>{donator_name}</p>
      
        <div className="flex justify-between space-x-2">
        <div className="card-actions">
          <Link to={`/checout/${_id}`}>
            <button className="btn btn-outline">Book Now</button>
          </Link>
          
        </div>
        <div className="card-actions">
          <Link to='/Foods'>
            <button className="btn btn-outline">Show All</button>
          </Link>
          
        </div>
        <div className="card-actions">
          <Link to={`/checoutt/${_id}`}>
            <button className="btn btn-outline">view Ditails</button>
          </Link>
          
        </div>
        </div>
      </div>
    </div>
  );
};

export default SarvisesCard;