import React from 'react';
import { Link } from 'react-router-dom'

export default function account() {
    return (
        <div className="h-screen bg-offblack pt-16">
            <h2 className="text-white text-2xl ml-10 mt-10">Account</h2>
            <div className="h-5/6 flex flex-col items-center justify-center">
                <Link to="/login-info">
                    <button className="w-48 h-10 text-left bg-offblack border border-white mt-10">
                        <p className="text-white ml-2 mt-auto mb-auto">Login Info</p>
                    </button>
                </Link>
                <Link to="/personal-info">
                    <button className="w-48 h-10 text-left bg-offblack border border-white  mt-10">
                        <p className="text-white ml-2 mt-auto mb-auto">Personal Info</p>
                    </button>
                </Link>
                <Link to="/payment-info">
                    <button className="w-48 h-10 text-left bg-offblack border border-white  mt-10">
                        <p className="text-white ml-2 mt-auto mb-auto">Payment Info</p>
                    </button>
                </Link>
                <Link to="/orders">
                    <button className="w-48 h-10 text-left bg-offblack border border-white  mt-10">
                        <p className="text-white ml-2 mt-auto mb-auto">Orders</p>
                    </button>
                </Link>
            </div>
            
        </div>
    )
}
