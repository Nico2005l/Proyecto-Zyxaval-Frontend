import { useState, useEffect } from "react";
import Mosca from "./Mosca";
import {BACKEND_URL} from '../utils/BackendUrl.js';
import { fetchFlies } from "../fetchs/BackendFetchs.js";


function Frasco(props) {
    const [flies, setFlies] = useState([]);


    useEffect(() => {

        const data = fetchFlies(props.id);
        data.then((response) => {
            setFlies(response);
        });
    }
    , []);

    
    return (
        <div className="flex flex-col items-center gap-4">
            <div className="relative flex flex-col items-center w-40 h-64 bg-gradient-to-b from-gray-200 to-gray-400 rounded-b-lg shadow-2xl transform transition duration-500 hover:scale-110 ">
                <div className="w-full h-8 bg-red-600 rounded-t-lg flex justify-center items-center gap-4 border-b-2 border-red-700 transition-transform duration-500 ">
                    {Array.from({ length: 9 }).map((_, index) => (
                    <div key={index} className="w-0.5 h-full bg-red-700 rounded-full"></div>
                    ))}
                </div>
                {flies.map((fly) => (
                    <Mosca key={fly.id} color={fly.bodyColor} />
                ))}
            </div>
            <p className='font-medium text-black bg-gray-300 rounded-full justify-self-start p-2 border-2 '>{props.name}</p>
        </div>
    );
      };

export default Frasco;