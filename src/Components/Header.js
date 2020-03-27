import React from "react";
import { Link } from "react-router-dom";

const Header = (props) =>{

    return (
        <header class="header">
                <h3 class="eats">Lambda Eats</h3>
                <nav class="nav">
                <Link to={`/`}>
                    <button class="home-button">Home</button>
                </Link>
                </nav>
            </header>
    );
}

export default Header;