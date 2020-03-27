import React from "react";
import { Link } from "react-router-dom";

const Home = (props) => {

    return(
            <div class="your-fav">
                <h1>Your favorite foods delivered while coding!</h1>
                <Link to={`/pizza`}>
                    <button data-cy="pizza" class="pizza-button">Pizza!</button>
                </Link>
            </div>

    );
}

export default Home;