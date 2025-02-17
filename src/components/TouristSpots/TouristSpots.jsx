import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';

const TouristSpots = ({ touristSpot }) => {
    const { _id, photo, touristSpotName, country, averageCost, description } = touristSpot;
    return (
        <div>
            <div className="card card-compact w-96 bg-base-100 shadow-xl">
                <div className="hero rounded-xl" style={{ backgroundImage: `url('${photo}')` }}>
                    <div className="hero-overlay rounded-xl bg-opacity-60"></div>
                    <div className="hero-content text-center text-neutral-content py-10">
                        <div className="max-w-md">
                            <span className='flex items-baseline justify-center'>
                                <h1 className="mb-5 text-4xl font-bold text-[#fb8d07]">{touristSpotName} </h1>
                                <p>, {country}</p>
                            </span>
                        </div>
                    </div>
                </div>
                <div className="card-body">
                    <p className="mb-5">{description.slice(0, 100)}</p>

                    <div className="card-actions justify-center">
                        <Link to={`/TouristSpot/${_id}`}>
                            <button className="btn btn-primary">View Details</button>
                        </Link>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default TouristSpots;