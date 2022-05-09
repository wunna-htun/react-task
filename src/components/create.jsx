import React, { useState } from 'react';
import axios from 'axios';
import '../App.css'
import '../utils/constant'
import { url } from '../utils/constant';


const Create = () => {

    const [title, settitle] = useState('');
    const [description, setdescription] = useState('')
    const postData=()=>{
        console.log("click");
        console.log(title);
        console.log(description);
        
        axios.post(`http://localhost:4300/tasks`, {
            title,
            description,
        }).then(res=>{
            console.log("res");
            console.log(res);
        }

        )


        axios.get(`http://localhost:4300/tasks`).then(res=>{
            console.log("get ");
            console.log(res);
        })
    }



    return <>

        <section className='create-card'>
            <h2 className='note-title'>Add New Note</h2>
            <form className='create_form'>


                <div className='form_element'>
                
                <label >
                        Title :
                    </label>
                    <input type="text"  onChange={e=>{settitle(e.target.value)}}/>
                </div>

                <div className='form_element'>
                    <label >
                        Description :
                    </label>
                    <input type="text" onChange={e=>{setdescription(e.target.value)}}/>
                </div>



                <button className='form_btn' onClick={postData}>
                    Add
                </button>


            </form>

        </section>


    </>

}

export default Create;