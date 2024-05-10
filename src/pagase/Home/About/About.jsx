import person from "../../../assets/images/about_us/person.jpg"
import parts from "../../../assets/images/about_us/parts.jpg"
const About = () => {
    return (
       
        <div className="hero min-h-screen bg-base-200 p-5">
           
            <div className="hero-content flex-col  lg:flex-row">
                <div className="lg:w-1/2 relative h-[]">
                    <img src={person} className=" w-3/4 rounded-lg shadow-2xl " />
                    <img src={parts} className="w-1/2 rounded-lg shadow-2xl absolute right-5 top-1/2 border-8 border-white" />
                </div>
                <div className="lg:w-1/2 space-y-4 p-5 ">
                    <h1 className="text-1xl font-bold text-[#ff3411]">About Us</h1>
                    <h1 className="text-5xl font-bold">We are qualified <br />& of experience <br />in this field</h1>
                    <p className="py-6">There are many variations of passages of <br />Lorem Ipsum available, but the majority have suffered alteration in <br />some form, by injected humour, or randomised words which <br />dont look even slightly believable. </p>
                    <p>the majority have suffered alteration in some form, by injected humour, or randomised words which dont look even slightly believable. </p>
                    <button className="btn bg-[#ff3811] p-2 rounded-xl">Get More Info</button>
                </div>
            </div>
        </div>
    );
};

export default About;