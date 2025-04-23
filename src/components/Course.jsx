import React from 'react';
import { Link } from 'react-router-dom';
import list from "../../public/list.json"
import Cards from './Cards';

function Course() {
  return (
    <>
      <div className="max-w-screen-2xl container mx-auto md:px-20 px-4">
        <div className="mt-28 items-center justify-center text-center">
          <h1 className="text-2xl md:text-4xl">
            We're delighted to have you{" "}
            <span className="text-pink-500"> Here! :)</span>
          </h1>
          <p className="mt-12">
          Discover a diverse selection of courses designed to elevate your skills and knowledge. Whether you’re interested in free offerings or premium content, we provide a wide array of subjects to suit every learner's needs. From enhancing your professional expertise to exploring new hobbies, our courses are crafted to inspire and empower you on your educational journey. Dive in and unlock your potential today!
          </p>
          <Link to="/">
            <button className="mt-6 bg-pink-500 text-white px-4 py-2 rounded-md hover:bg-pink-700 duration-300">
              Back
            </button>
          </Link>
        </div>
        <div className="mt-12 grid grid-cols-1 md:grid-cols-4">
            {
                list.map((item)=>(
                    <Cards key={item.id} item={item}/>
                ))
            }
        </div>
      </div>
    </>
  );
}

export default Course;
