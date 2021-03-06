

import React, { useState ,useEffect} from 'react';
import axios from 'axios';
import '../App.css'
import '../utils/constant'
import { url } from '../utils/constant';
import { getDefaultNormalizer } from '@testing-library/react';
import { useNavigate } from "react-router-dom";

const GetAll = () => {


    const [apiData, setapiData] = useState([])
    let navigate = useNavigate();

    const onDelete=(id)=>{
        console.log(id);
        axios.delete(`http://localhost:4300/tasks/`+id).then(res=>{
            console.log("get");
            getData()
        }

        )

    }

    const onUpdate=(id)=>{
        console.log("to Update page",id);
        localStorage.setItem('id',id)
        navigate("/update");
    }

    const getData=()=>{
        axios.get(`http://localhost:4300/tasks`).then(
            res=>{
                console.log("GET ALL");
                console.log(res.data);
                console.log(res);
                setapiData(res.data);
            }
        )

        }

    useEffect(()=>{
    getData()
    },[])





    return <>
        <section className="getlist">

            <ul >

            {apiData.map((data)=><li key={data.id}>


            <div className="note-card">
                    <div className="note-id">
                    {data.id}

                    </div>
                    <div className="note-content">
                        <div className="card-title">
                            <h2>  {data.title}</h2>

                        </div>

                        <div>
                        {data.description}
                        </div>
                        <button className="card-button" onClick={()=>onUpdate(data.id)}>
                            Edit
                        </button>
                        <button className="card-button" onClick={()=>onDelete(data.id)}>
                            Delete
                        </button>
                    </div>
                </div>
            
            </li>)

            }


            </ul>

        </section>
    </>
}

export default GetAll