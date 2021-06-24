import React from 'react'

export default function cart() {
    return (
        <div className="mt-16 h-screen bg-offblack text-white overflow-hidden">
            <div className="w-11/12 ml-auto mr-auto mt-20 bg-lightgrey pb-6">
                <h2 className="text-2xl ml-4 mb-4">Cart</h2>
                <div className="mt-6 md:flex md:items-center md:justify-between md:gap-10">
                    <div className="w-full flex justify-between items-center">
                        <div className="w-1/5 ml-4 mr-4 bg-gray-600">Image</div>
                        <div className="w-3/4 md:w-450 lg:w-650">
                            <p className="text-sm pb-2">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Expedita, quibusdam impedit. Cum aut nostrum, nihil omnis laborum a facilis repellendus molestiae alias tempore at incidunt delectus voluptate, soluta placeat blanditiis?</p>
                            <div className="flex gap-4">
                                <input className="text-black w-10" type="number" value="1" />
                                <p className="border-l-2 pl-4">Delete</p>
                            </div>
                        </div>
                        <h3 className="text-xl hidden md:block md:mr-4 md:ml-4">$49.99</h3>
                    </div>
                    <h3 className="text-xl ml-4 mt-6 md:hidden">$49.99</h3>
                </div>
            </div>
        </div>
    )
}
