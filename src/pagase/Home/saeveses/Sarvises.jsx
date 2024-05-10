import { useEffect, useState } from "react";
import SarvisesCard from "./SarvisesCard";


const Sarvises = () => {
    const [cards, setCard] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/carServes')
            .then(res => res.json())
            .then(data => setCard(data))

    }, [cards])
    return (
        <div className="text-center p-5 mt-10">
            <h3 className="text-1xl font-bold text-[#ff3411]">Service</h3>
            <h1 className="text-5xl font-bold">Our Service Area</h1>
            <p>the majority have suffered alteration in some form, by injected humour,<br /> or randomised words which dont look even slightly believable. </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                
                {
                    cards.map(card => <SarvisesCard
                        key={card._id}
                        card={card}

                    ></SarvisesCard>)
                }
            </div>
        </div>
    );
};

export default Sarvises;