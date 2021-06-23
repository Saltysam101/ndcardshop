import React from 'react'

export default function cart() {
    return (
        <div className="mt-16 h-screen bg-offblack text-white overflow-hidden">
            <div className="w-11/12 ml-auto mr-auto mt-20 bg-lightgrey pb-6">
                <h2 className="text-2xl ml-4 mb-4">Cart</h2>
                <div className="mt-6 md:flex md:items-center md:justify-between">
                    <div className="flex">
                        <div className="w-1/4">Image</div>
                        <div className="w-3/4">
                            <p className="text-sm pb-2 md:w-550 lg:w-650">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Expedita, quibusdam impedit. Cum aut nostrum, nihil omnis laborum a facilis repellendus molestiae alias tempore at incidunt delectus voluptate, soluta placeat blanditiis?</p>
                            <div className="flex gap-4">
                                <input className="text-black w-10" type="number" value="1" />
                                <p className="border-l-2 pl-4">Delete</p>
                            </div>
                        </div>
                    </div>
                    <h3 className="text-xl ml-4 mt-6 md:mr-4 md:pl-12">$49.99</h3>
                </div>
                <div className="mt-6 md:flex md:items-center md:justify-between">
                    <div className="flex">
                        <div className="w-1/4">Image</div>
                        <div className="w-3/4">
                            <p className="text-sm md:w-550 lg:w-650 pb-2">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Expedita, quibusdam impedit. Cum aut nostrum, </p>
                            <div className="flex gap-4">
                                <input className="text-black w-10" type="number" value="1" />
                                <p className="border-l-2 pl-4">Delete</p>
                            </div>
                        </div>
                    </div>
                    <h3 className="text-xl ml-4 mt-6 md:mr-4 md:pl-12">$49.99</h3>
                </div>
            </div>
        </div>
    )
}
