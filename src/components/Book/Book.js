import React from 'react';
import {useParams, Link} from 'react-router-dom';
const Book = () => {
    const {bed_type} = useParams();
    return (
        <div style={{textAlign: "center"}}>
            <h1>Let's book a {bed_type} room! </h1>  
            <p>Wants a <Link to="/Home"> different room? </Link></p>                                                                                          
        </div>
    );
};

export default Book;