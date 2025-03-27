import React from "react";
import "./style.css"

function isEven(n) {
    n = Number(n);
    return n === 0 || !!(n && !(n%2));
  }

const UsersTable = ({ headers, users }) => {
    
    return (
        <table className="users-table">
            {headers && headers.length > 0 && (
                <thead>
                    <tr>
                        {headers.map((header, index) => (
                            <th key={index}>{header}</th>
                        ))}
                    </tr>
                </thead>
            )}
            <tbody>
                {users.map((user, index) => (
                    <tr className={isEven(user.id) ? "light":"dark"}key={index}>
                        <td>{user.username}</td>
                        <td>{user.city}</td>
                        <td>{user.phone}</td>
                        <td>{user.website}</td>
                        <td>{user.company}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
};

export default UsersTable;
