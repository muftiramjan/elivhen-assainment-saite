import { Link } from "react-router-dom";


const SarvisesCard = ({ card }) => {

  const { food_name, 
    food_image, price,  _id } = card;
  return (
    <div className="card w-96 bg-base-100 shadow-xl">
      <figure className="px-10 pt-10">
        <img src={food_image} alt="Shoes" className="rounded-xl h-70" />
      </figure>
      <div className="card-body items-center ">
        <h2 className="card-title">{food_name}</h2>
        <p className="text-red-300">price: {price}</p>
        <div className="card-actions">
          <Link to={`/checout/${_id}`}>
            <button className="btn btn-secondary">Book Now</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SarvisesCard;