import React from "react";
import { Link } from "react-router-dom";
import { RiDeleteBin6Line } from "react-icons/ri";
import { FaRegPenToSquare } from "react-icons/fa6";
import { toast } from "react-toastify";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import axios from "axios";
import { Helmet } from "react-helmet-async";

const deleteOrder = async (id) => {
  const { data } = await axios.delete(`http://localhost:5000/orders/${id}`);
  return data;
};

const MyOrderManage = ({ order, index }) => {
  const { castmarname, email, donator_image, food_image, date, _id } = order;
  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: deleteOrder,
    onSuccess: () => {
      toast.success("Deleted successfully");
      queryClient.invalidateQueries("orders");
    },
  });

  const handleDelete = (id) => {
    const proceed = window.confirm("Are you sure you want to delete?");
    if (proceed) {
      mutation.mutate(id);
    }
  };

  if (mutation.isLoading) return <div>Loading...</div>;
  if (mutation.isError)
    return <div>An error occurred: {mutation.error.message}</div>;

  return (
    <tr>
      <Helmet>
        <title>Manage My Foods</title>
      </Helmet>
      <td>{index + 1}</td>
      <td>
        <div className="flex items-center gap-3">
          <div className="avatar">
            <div className="mask mask-squircle w-12 h-12">
              <img src={donator_image} alt="Avatar Tailwind CSS Component" />
            </div>
          </div>
        </div>
      </td>
      <td>{castmarname}</td>
      <td>{email}</td>
      <td>{date}</td>
      <td>
        <img className="w-11" src={food_image} alt="" />
      </td>
      <th>
        <Link to={`/update/${_id}`}>
          <div className="flex justify-center items-center btn btn-outline border-b-8 border-t-8 border-[1px] border-green-600">
            <FaRegPenToSquare className="text-1xl mr-1" />
            <button className="">Update</button>
          </div>
        </Link>
      </th>
      <th>
        <div className="flex justify-center items-center btn btn-outline border-b-8 border-t-8 border-[1px] border-green-600">
          <RiDeleteBin6Line className="text-1xl mr-1" />
          <button onClick={() => handleDelete(_id)} className="">
            Delete
          </button>
        </div>
      </th>
    </tr>
  );
};

export default MyOrderManage;
