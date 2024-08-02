import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { useLoaderData } from 'react-router-dom';
function Github() {
    // const [data,setData]=useState([])
    // useEffect(()=>{
    //     async function API() {
    //         const response=await axios.get('https://api.github.com/users/hiteshchoudhary');
    //         console.log(response.data);

    //         setData(response.data)
    //     }
    //     API();
    // },[])

    const data=useLoaderData()

    return (
        <div className='text-center m-4 bg-gray-600 text-white p-4 text-3xl'>Github Followers: {data.followers} 
        <img src={data.avatar_url} alt="Git picture" width={300} />
        </div>
    )
}

export default Github

export const githubInfoLoader=async function API() {
    const response=await axios.get('https://api.github.com/users/react');
    return response.data;
}
