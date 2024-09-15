import React from 'react';
import { MdEmail } from "react-icons/md";
import { FaTwitter } from "react-icons/fa6";
import { FaFacebookF } from "react-icons/fa";
import { FaGithub } from "react-icons/fa6";

const MeetSingelData = ({item}) => {
    const {name,img,title,email}=item;
    return (
        <div className="card bg-base-100 w-96 shadow-xl border-[2px] border-green-600 mt-10">
  <figure className="px-10 pt-10">
    <img 
      src={img}
      alt=""
      className=" h-40 rounded-full w-40" />
  </figure>
  <div className="card-body items-center text-center">
    <h2 className="card-title">{name}</h2>
    <p>{title}</p>
    <p>{email}</p>
    <hr />
    <div className="card-actions space-x-5">
    <MdEmail />
    <FaTwitter />
    <FaFacebookF />
    <FaGithub />
    </div>
  </div>
</div>
    );
};

export default MeetSingelData;