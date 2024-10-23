import React from "react";
import Img1 from "../../assets/women/ML Nexus.png";
import Img2 from "../../assets/women/IMG_8294.jpeg";
import Img3 from "../../assets/women/women3.jpg";
import Img4 from "../../assets/women/women4.jpg";
import { FaStar } from "react-icons/fa6";

const ProductsData = [
  {
    id: 1,
    img: Img1,
    title: "ML Nexus With CTF",
    // rating: 5.0,
    color: "LNCT Group of colleges",
    aosDelay: "0",
  },
  {
    id: 2,
    img: Img2,
    title: "ML Huddle crack the CyberSecurity Puzzle",
    // rating: 4.5,
    color: "Hotel Bentree",
    aosDelay: "200",
  },
  {
    id: 3,
    img: Img2,
    title: "101 with Machine Learning & Revisiting CyberSecurity",
    // rating: 4.7,
    color: "Location",
    aosDelay: "400",
  },
  {
    id: 4,
    img: Img2,
    title: "Rishav Kumar",
    rating: 4.4,
    color: "Location",
    aosDelay: "600",
  },
  {
    id: 5,
    img: Img2,
    title: "Rishav Kumar",
    // rating: 4.5,
    color: "Location",
    aosDelay: "800",
  },
];

const Products = () => {
  return (
    <div className="mt-14 mb-12">
      <div className="container">
        {/* Header section */}
        <div className="text-center mb-10 max-w-[600px] mx-auto">
          <p data-aos="fade-up" className="text-sm text-primary">
          
          A Community of Learners, Innovators, and Tech Enthusiasts
          </p>
          <h1 data-aos="fade-up" className="text-3xl font-bold">
          Highlights from Our Recent Events
          </h1>
          <p data-aos="fade-up" className="text-xs text-gray-400">
          
          Explore some of the exciting events and workshops organized by ML Bhopal. From hackathons to workshops, we bring learning and innovation to life
          </p>
        </div>
        {/* Body section */}
        <div>
          <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 place-items-center gap-5">
            {/* card section */}
            {ProductsData.map((data) => (
              <div
                data-aos="fade-up"
                data-aos-delay={data.aosDelay}
                key={data.id}
                className="space-y-3"
              >
                <img
                  src={data.img}
                  alt=""
                  className="h-[220px] w-[150px] object-cover rounded-md"
                />
                <div>
                  <h3 className="font-semibold">{data.title}</h3>
                  <p className="text-sm text-gray-600">{data.color}</p>
                  <div className="flex items-center gap-1">
                    <FaStar className="text-yellow-400" />
                    <span>{data.rating}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
          {/* view all button */}
          <div className="flex justify-center">
            <button className="text-center mt-10 cursor-pointer bg-primary text-white py-1 px-5 rounded-md">
              View All Events
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;
