import { useEffect, useState } from "react";
import SarvisesCard from "./SarvisesCard";
import { motion, useScroll } from "framer-motion"


const Sarvises = () => {
    const { scrollYProgress } = useScroll();
    const [cards, setCard] = useState([]);
    useEffect(() => {
        fetch('https://car-doctor-server-nine-gilt.vercel.app/carServes')
            .then(res => res.json())
            .then(data => setCard(data))

    }, [cards])
    return (
        <>
            <motion.div
                style={{
                    scaleX: scrollYProgress,
                    position: 'inherit',
                    top: 0,
                    left: 0,
                    right: 0,
                    height: 0,
                    background: 'gray',
                    transformOrigin: '%0'
                }}
                className="text-center p-1 mt-10 rounded-full">
            </motion.div>
            <div className="text-center p-5 mt-10">
                <h1 className="text-5xl font-bold">Food A Reflection of Culture</h1>
                <p>Food is not just sustenance; it's a profound force that inspires humanity.
                    It embodies culture, connecting us to a rich tapestry of experiences, literature,
                    <br />traditions, and societal norms. From its diverse forms to its flavors, health
                    benefits, transmission, and its relationship with the environment, food seamlessly
                    <br /> integrates into every aspect of our lives, serving as an essential component of our existence. </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">

                {
                    cards.map(card => <SarvisesCard
                        key={card._id}
                        card={card}

                    ></SarvisesCard>)
                }
            </div>

        </>
    );
};

export default Sarvises;