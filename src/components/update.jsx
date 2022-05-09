import React, { useState ,useEffect} from 'react';
import axios from 'axios';
import '../App.css'
import '../utils/constant'
import { url } from '../utils/constant';
import { useNavigate } from "react-router-dom";


const Update=()=>{


    const [Id, setId] = useState('')
    const [title, settitle] = useState('');
    const [description, setdescription] = useState('')
    let naviagate=useNavigate();

    const onUpdate=()=>{
        console.log("update");
        axios.put(`http://localhost:4300/tasks/`+localStorage.getItem('id'),{
            title,description
        })
        naviagate('/')
        
    }


    useEffect(()=>{
     
        console.log(localStorage.getItem('id'));
    
        try {
            setId(localStorage.getItem('id'))
            axios.get(`http://localhost:4300/tasks/`+localStorage.getItem('id')).then(
                res=>{
                    console.log("GET by id");
                    console.log(res.data);
                    settitle(res.data.title);
                    setdescription(res.data.description)
                }
            )
        } catch (error) {
            console.error(error)
        }
   
        
    },[])


    


    return <>

    <section className='main'>
        
        <div className="updatecard">

            <div className="updateForm">
                <div className="form-title">
                    Update Your Notes
                </div>

                <form>
                    <label htmlFor=""> Title</label>
                    <input type="text" value={title}  onChange={(e)=>settitle(e.target.value)} placeholder='task' />
                    <label htmlFor=""> Description</label>
                    <input type="text" value={description} onChange={(e)=>setdescription(e.target.value)} placeholder='Description' />
                </form>
                <button onClick={()=>onUpdate()}>Submit</button>

            </div>

        </div>

    </section>

    </>

}


export default Update;