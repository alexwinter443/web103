import React from 'react'
import './creatorCard.css'
import { Link } from "react-router-dom";


const CreatorCard = (props) => {

    const creator = props.creator;

    return (
        <>
            <div className="my-2 mx-auto p-relative bg-white shadow-1 blue-hover" style={{ borderRadius: "1px", width: "360px", overflow: "hidden", }}>
                <img src={creator.imageurl}
                    alt="Man with backpack" className="d-block w-full" />
                <div className="px-2 py-2">
                    <h1 className="ff-serif font-weight-normal text-black card-heading mt-0 mb-1" style={{ lineheight: "1.25" }}>
                        {creator.name}
                    </h1>

                    <p className="mb-1">
                        {creator.description}
                        &hellip;
                    </p>


                </div>

                <Link to={`edit/${creator.id}`} className="text-uppercase d-inline-block font-weight-medium lts-2px ml-2 mb-2 text-center styled-link">
                    Edit
                </Link>

                <Link to={`details/${creator.id}`} className="text-uppercase d-inline-block font-weight-medium lts-2px ml-2 mb-2 text-center styled-link">
                    Details
                </Link>
            </div>
        </>




    )
}

export default CreatorCard