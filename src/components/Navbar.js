import React from 'react';

const Navbar = () => {
    return(
        <nav className = "nav-wrapper">
            <div className="container">
                <a href="#" class="brand-logo">Redux Shop</a>
                <ul className = "right">
                    <li>Home</li>
                    <li>Browse</li>
                    <li><i className="material-icons">shopping_cart</i></li>
                </ul>
            </div>    
        </nav>
    );
};

export default Navbar;