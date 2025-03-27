import React from "react";
import "./style.css"
import UsersTable from "../../components/UsersTable";

const usersData = [
    {
        id: 1,
        username: "johndoe",
        city: "New York",
        phone: "+1 123-456-7890",
        website: "johndoe.com",
        company: "Doe Enterprises"
    },
    {
        id: 2,
        username: "janedoe",
        city: "Los Angeles",
        phone: "+1 987-654-3210",
        website: "janedoe.org",
        company: "Jane Consulting"
    },
    {
        id: 3,
        username: "alexsmith",
        city: "Chicago",
        phone: "+1 555-678-1234",
        website: "alexsmith.dev",
        company: "Smith Tech"
    }
];

const AllUsersPage = () => {
    return( 
    <div className="all-posts-container">
        <div class="search-container">
            
            <input className="search-line" type="text" placeholder="   🔍︎  Поиск.." name="search" />          
        </div>
        <div className="users-content">
            <UsersTable headers={["USERNAME", "CITY", "PHONE", "WEBSITE", "COMPANY"]} 
    users={usersData} />
        </div>
    </div>)
}

export default AllUsersPage;