import React from 'react';
import img from"../../../assets/images/banner/1 (2).jpg"
import img2 from"../../../assets/images/banner/2 (2).jpg"
import img3 from"../../../assets/images/banner/3 (2).jpg"
const CustomerSays = () => {
    return (
       <div className='mt-16'>
         <div className='mx-auto w-2/3 mt-10'>
            <p className='font-bold text-4xl text-black text-center'>What Customer Says</p>
            <p className='text-1xl text-center'>Discover genuine feedback from our patrons in What Our Customers Say. Hear their experiences firsthand from savory bites to delightful ambiance. Join us in celebrating the joy of food through the voices of our valued guests.</p>
        </div>
        <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-x-2 mt-16'>

       <div className=' p-5 border-[2px] border-green-600'>
            <div className='flex'>
            <img src={img} alt="" className='w-16 rounded-full' />
           <div className='mr-6 ml-6'>
           <p>Leroy Jenkins</p>
           <p>2 days ago</p>
         
           <div className="rating">
                <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                <input
                    type="radio"
                    name="rating-2"
                    className="mask mask-star-2 bg-orange-400"
                    defaultChecked />
                <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                </div>
           </div>
        </div>
        <hr />
        Vivamus sit amet turpis leo. Praesent varius eleifend elit, eu dictum lectus consequat vitae. Etiam ut dolor id justo fringilla finibus.

Donec eget ultricies diam, eu molestie arcu. Etiam nec lacus eu mauris cursus venenatis. Maecenas gravida urna vitae accumsan feugiat. Vestibulum commodo, ante sit urna purus rutrum sem.
        <div>
    
        </div>

       </div>
       <div className=' p-5 border-[2px] border-green-600 '>
            <div className='flex'>
            <img src={img2} alt="" className='w-16 rounded-full' />
           <div className='mr-6 ml-6'>
           <p>Leroy Jenkins</p>
           <p>1 days ago</p>
           <hr />
           </div>
           <div className="rating">
                <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                <input
                    type="radio"
                    name="rating-2"
                    className="mask mask-star-2 bg-orange-400"
                    defaultChecked />
                <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                </div>
        </div>

        <hr />
        Vivamus sit amet turpis leo. Praesent varius eleifend elit, eu dictum lectus consequat vitae. Etiam ut dolor id justo fringilla finibus.

Donec eget ultricies diam, eu molestie arcu. Etiam nec lacus eu mauris cursus venenatis. Maecenas gravida urna vitae accumsan feugiat. Vestibulum commodo, ante sit urna purus rutrum sem.
        <div>
    
        </div>

       </div>
       <div className=' p-5 border-[2px] border-green-600 '>
            <div className='flex'>
            <img src={img3} alt="" className='w-16 h-24 rounded-full' />
           <div className='mr-6 ml-6'>
           <p>Leroy Jenkins</p>
           <p>11 days ago</p>
           <hr />
           </div>
           <div className="rating">
                <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                <input
                    type="radio"
                    name="rating-2"
                    className="mask mask-star-2 bg-orange-400"
                    defaultChecked />
                <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                </div>
        </div>

        <hr />
        Vivamus sit amet turpis leo. Praesent varius eleifend elit, eu dictum lectus consequat vitae. Etiam ut dolor id justo fringilla finibus.

Donec eget ultricies diam, eu molestie arcu. Etiam nec lacus eu mauris cursus venenatis. Maecenas gravida urna vitae accumsan feugiat. Vestibulum commodo, ante sit urna purus rutrum sem.
        <div>
    
        </div>

       </div>
        </div>
       </div>
    );
};

export default CustomerSays;