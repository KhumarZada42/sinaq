import React, { useEffect, useState } from 'react'
import axios from "axios";
import Navbar from '../../Layout/Navbar/Navbar';
import { Link } from 'react-router-dom';

function Home() {
    const [post, setPost] = useState([]);


    useEffect(() => {
        axios.get("https:fakestoreapi.com/products").then((response) => {
            setPost(response.data);
        });
    }, []);

    return (

        <>
            <Navbar />
            <section>
                {post.map((element) => {
                    return (
                        <div key={element.id}>
                            <h1>{element.title}</h1>
                            <p>{element.body}</p>
                            <Link to={`product/${element.id}`}><button>More</button></Link>
                        </div>
                    );
                })}
            </section>
        </>
    );
}

export default Home