import React from "react";
import "./style.css";
import Searching from "../../components/Searching";

const AllPostsPage = ({ children }) => {
  return (
    <div className="all-posts-container">
      <Searching />
      <div className="posts-content">{children}</div>
    </div>
  );
};

export default AllPostsPage;
