import { FaArrowRight } from "react-icons/fa";


const ServiceCard = ({ service }) => {
    const { title, img, price } = service;
    return (
        <div className="card w-96 bg-base-100 font-inter shadow-xl">
            <figure className="px-10 pt-10">
                <img src={img} alt="Shoes" className="rounded-xl h-[208px]" />
            </figure>
            <div className="card-body">
                <h2 className="card-title font-extrabold">{title}</h2>
                <div className="flex mt-5 justify-between items-center">
                    <p className=" text-xl font-bold text-[#FF3811]">Price: ${price}</p>
                    <button className="btn text-[#FF3811]">
                        <FaArrowRight />

                    </button>
                </div>

            </div>
        </div>
    );
};

export default ServiceCard;