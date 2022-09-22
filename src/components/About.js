import React from "react";
import blogData from "../data/blog";

function About({image="https://via.placeholder.com/215",alt="blog logo",about}){
    return(
        <div>
            <aside>
                <img src={image} alt={alt}/>
                <p>{about}</p>
            </aside>
        </div>
    )
}git
export default About;