import React from 'react';
import Marquee from "react-fast-marquee";
import MeetSingelData from './MeetSingelData';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

const fetchMraqueeData = async () => {
    const { data } = await axios.get('https://car-doctor-server-nine-gilt.vercel.app/mraquee');
    return data;
};

const MeetOurTeam = () => {
    const { data: meraquue = [], error, isLoading } = useQuery({
        queryKey: ['mraquee'],
        queryFn: fetchMraqueeData
    });

    if (isLoading) return <div>Loading...</div>;
    if (error) return <div>An error occurred: {error.message}</div>;

    return (
        <div>
            <div className='mx-auto w-2/3 mt-10'>
                <h1 className='font-bold text-4xl text-black text-center'>Meet Our Team</h1>
                <p className='text-1xl text-center'> Meet the team crafting culinary magic daily. From chefs to customer service pros, our dedicated crew ensures every experience is deliciously memorable. Get to know the faces behind the flavors.</p>
            </div>
            <Marquee pauseOnClick={true} pauseOnHover={true} speed={50}> 
                <div className='grid grid-cols-5 gap-x-6'>
                    {
                        meraquue.map(item => <MeetSingelData key={item._id} item={item} />)
                    }
                </div>
            </Marquee>
        </div>
    );
};

export default MeetOurTeam;
