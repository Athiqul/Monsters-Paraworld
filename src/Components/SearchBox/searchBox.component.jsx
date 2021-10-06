import React from "react";
import './searchBox.style.css';

const searchBox= ({placeholder,handleChange})=>(

    <input type="search"
    className="search"
     placeholder={placeholder}
    onChange={handleChange}
    />
)
export default searchBox;