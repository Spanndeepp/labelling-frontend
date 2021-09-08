import React from 'react';

import './Home.css';

const Home = () => {
    return (
        <div className="para">
            Welcome to the Ad-Advisor !!!
            <div className="logo">
                <h1>this is logo</h1>
                <p>A place to dynamically monitor and choose best ads for your product</p> 
            </div>
            <div className="product-description">
                Ad- Advisor remends the best ad for you product. The ad can be futher anlaysed using different statistical plots. 
            </div>
        </div>
    )

}

export default Home;