import React from 'react';
import Layout from '../component/Layout';

function Profile(){
    const user=JSON.parse(localStorage.getItem('sharenews-user'));
    console.log(user);
    return (
        <Layout>
            <div className='font-normal border p-3 border grid sm:grid-cols-1 gap-5 mx-20 sm:mx-5 my-5'>
            <h1 >Name: {user.name}</h1>
            <h2>Email: {user.email}</h2>
             <h3>Created At: {user.createdAt.slice(0, 10)}</h3>
            </div>
            
        </Layout>
    )
}


export default Profile;