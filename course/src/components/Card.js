import React from "react";
import { FcLike } from "react-icons/fc";

const Card = ( { course } ) => {

    return (
        <div>
            <div>
                <img src={course.img.url} alt="Course" />
                <div>
                    <button>
                        <FcLike fontSize="1.75rem" />
                    </button>
                </div>
                <p>{course.title}</p>
            </div>
        </div>
    );
};

export default Card;