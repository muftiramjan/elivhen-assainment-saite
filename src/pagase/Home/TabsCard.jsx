import React from 'react';


const TabsCard = ({tob}) => {
  const {
    jobTitle,category}=tob;
 
    return (
<div className="card w-96 bg-base-100 shadow-xl">
  <div className="card-body">
    <h2 className="card-title">{category}</h2>
    <p>{jobTitle}</p>
    <div className="card-actions justify-end">
      <button className="btn btn-primary">Buy Now</button>
    </div>
  </div>
</div>

    );
};

export default TabsCard;