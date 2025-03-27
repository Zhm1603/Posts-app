
import React from "react";
import "./style.css"

const AllPostsPage = ({children}) => {
    return(
    <div className="all-posts-container">
        <div class="search-container">
            
            <input className="search-line" type="text" placeholder="   🔍︎  Поиск.." name="search" />          
        </div>
        <div className="posts-content">{children}</div>
    </div>)
}

export default AllPostsPage;