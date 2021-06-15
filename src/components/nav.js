import React from 'react';

import { Link } from 'react-router-dom';

export default function Nav() {
    return (
        
        <div className="">
            <nav className="flex justify-between items-center h-16 w-screen bg-lightgrey text-white fixed top-0 z-10">
                <div className="flex">
                    <h2 className="mx-6">Logo</h2>
                    <Link to="/">
                        <h4 className="">Store Name</h4>
                    </Link>
                </div>
                <div className="flex">
                    <input  
                    type="text" 
                    placeholder="Search..."
                    className="mr-6 md:mr-0"    
                    />
                    <div className="flex">
                        <Link to="/cart">
                            <h3 className="hidden md:block mx-6">Cart</h3>
                        </Link>    
                        <Link to="/account">
                            <h3 className="hidden md:block mr-6">Account</h3>
                        </Link>
                    </div>
                </div>
            </nav> 
            <nav className="bg-lightgrey fixed bottom-0 h-16 w-screen z-10 text-white flex justify-evenly items-center md:hidden">
                <Link to="/account">
                    <h3>Account</h3>
                </Link>
                <Link to="/cart">
                    <h3>Cart</h3>
                </Link>
            </nav>
   
        </div>
    )
}
