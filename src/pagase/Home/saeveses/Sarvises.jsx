
import React, { useState } from "react";
import SarvisesCard from "./SarvisesCard";
import { motion, useScroll } from "framer-motion";
import { useQuery } from "@tanstack/react-query";
import axios from 'axios';

const fetchCarServes = async () => {
    const { data } = await axios.get('http://localhost:5000/orderss');
    return data;
};

const Sarvises = () => {
    const { scrollYProgress } = useScroll();


    const [currentPage, setCurrentPage] = useState(1);
    const cardsPerPage = 12;

    const { data: cards = [], error, isLoading } = useQuery({
        queryKey: ['carServes'],
        queryFn: fetchCarServes
    });

    if (isLoading) return <div>Loading...</div>;
    if (error) return <div>An error occurred: {error.message}</div>;

   
    const indexOfLastCard = currentPage * cardsPerPage;
    const indexOfFirstCard = indexOfLastCard - cardsPerPage;
    const currentCards = cards.slice(indexOfFirstCard, indexOfLastCard);

    const totalPages = Math.ceil(cards.length / cardsPerPage);

    const paginate = (pageNumber) => setCurrentPage(pageNumber);

    return (
        <>
            <motion.div
                style={{
                    scaleX: scrollYProgress,
                    position: 'fixed',
                    top: 0,
                    left: 0,
                    right: 0,
                    height: 4,
                    background: 'gray',
                    transformOrigin: '0%'
                }}
                className="rounded-full">
            </motion.div>

            <div className="text-center p-5 mt-10 bg-gradient-to-r from-blue-500 to-purple-500 text-white">
                <motion.h1
                    className="text-5xl font-bold"
                    initial={{ opacity: 0, y: -50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                >
                    Food: A Reflection of Culture
                </motion.h1>
                <motion.p
                    className="mt-4 text-lg"
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 0.5 }}
                >
                    Food is not just sustenance; it's a profound force that inspires humanity.
                    It embodies culture, connecting us to a rich tapestry of experiences, literature,
                    <br /> traditions, and societal norms. From its diverse forms to its flavors, health
                    benefits, transmission, and its relationship with the environment, food seamlessly
                    <br /> integrates into every aspect of our lives, serving as an essential component of our existence.
                </motion.p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 p-5 max-w-7xl mx-auto">
                {
                    currentCards.map(card => (
                        <SarvisesCard
                            key={card._id}
                            card={card}
                        />
                    ))
                }
            </div>
            <div className="flex justify-center mt-5">
                {Array.from({ length: totalPages }, (_, index) => (
                    <button
                        key={index}
                        onClick={() => paginate(index + 1)}
                        className={`mx-1 px-3 py-1 border rounded ${currentPage === index + 1 ? 'bg-blue-500 text-white' : 'bg-white text-blue-500'}`}
                    >
                        {index + 1}
                    </button>
                ))}
            </div>
        </>
    );
};

export default Sarvises;


