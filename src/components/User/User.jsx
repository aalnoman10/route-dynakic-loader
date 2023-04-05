import React from 'react';
import { Link } from 'react-router-dom';

const User = ({ user }) => {
    return (
        <div>
            <br />
            <h3>Name : {user.name}</h3>
            <p>Email : {user.email}</p>
            {/* <Link to={`/home/${user.id}`}>Sow More</Link> */}
            <br />
            <hr />
        </div>
    );
};

export default User;