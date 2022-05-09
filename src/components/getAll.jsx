

import React, { useState ,useEffect} from 'react';
import axios from 'axios';
import '../App.css'
import '../utils/constant'
import { url } from '../utils/constant';

const GetAll = () => {


    const [apiData, setapiData] = useState('')

    useEffect(()=>{
        axios.get(`http://localhost:4300/tasks`).then(
            res=>{
                console.log("GET ALL");
                console.log(res);
            }
        )
    }

    )


    return <>
        <section className="getlist">

            <ul >
                <li>

                    <div className="note-card">
                        <div className="note-id">
                            id

                        </div>
                        <div className="note-content">
                            <div className="card-title">
                                <h2> Git</h2>

                            </div>

                            <div>
                                Discription
                            </div>
                            <button className="card-button">
                                Edit
                            </button>
                            <button className="card-button">
                                Delete
                            </button>
                        </div>
                    </div>

                </li>
            </ul>

        </section>
    </>
}

export default GetAll