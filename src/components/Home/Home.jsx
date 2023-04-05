import React from 'react';
import { useLoaderData } from 'react-router-dom';
import User from '../User/User';

const Home = () => {
    const users = useLoaderData()
    // console.log(users);

    return (
        <div>
            <h1>User List</h1>
            <h2>Total User : {users.length}</h2>
            <div>
                {
                    users.map(user => <User key={user.id} user={user} />)
                }
            </div>
        </div>
    );
};

export default Home;