import React from 'react';
import { useEffect, useState } from 'react';
import axios from 'axios';
import Home from './Home';
import {
    BrowserRouter,
    Route,
    Routes,
    Link,
    useNavigate
} from "react-router-dom";

function Main() {


    const [data, setdata] = useState([])


    useEffect(() => {

        axios.get('https://rickandmortyapi.com/api/character')
            .then(function (response) {
                // handle success
                console.log(response.data.results);
                setdata(response.data.results)
            })
            .catch(function (error) {
                // handle error
                console.log(error);
            })

    }, []);
    const navigate = useNavigate();



    return (
        <div className="App">

            <div className='flex flex-wrap justify-center justify-evenly'>
                {
                    data.map((item) => {
                        console.warn("item --", item.location.name);
                        return (
                            <>
                                <div className='mt-2'>


                                    {/* <img src={item.image} alt="" /> */}
                                    <a href="#" class="flex flex-col items-center bg-white border rounded-lg shadow-md md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
                                        <img class="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-l-lg" src={item.image} alt="" />
                                        <div class="flex flex-col justify-between p-4 leading-normal">
                                            <Link to={`detail/${item.id}`}><h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white hover:text-[#ff9800] text-left">{item.name}</h5></Link>
                                            <h2 className='text-xl font-bold text-gray-900 dark:text-white text-left'>{item.location.name}</h2>
                                            <p class="mb-3  font-normal text-gray-700 dark:text-gray-400 text-left">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
                                        </div>
                                    </a>

                                </div>
                            </>
                        )
                    })
                }
            </div>

        </div>
    )
}

export default Main