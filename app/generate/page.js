import React from 'react'

const generate = () => {
    return (
        <div className='bg-[#225ac0] text-yellow-200 min-h-screen grid grid-cols-2'>


            <div className="col1 flex items-center justify-center flex-col">
                <h1 className='font-bold text-4xl my-9'>Create Your Link.</h1>
                <div className='flex flex-col gap-5'>
                    <h2 className='font-bold text-xl'>Claim your Handle</h2>
                    <div className='mx-4'>

                        <input className='text-black px-4 w-64 py-2 focus:outline-black bg-gray-200 rounded' type="text" placeholder='Choose a handle' />

                    </div>

                    <h2 className='font-bold text-xl'>Enter links</h2>

                    <div className='mx-4 flex gap-5'>

                        <input className='px-4 py-2 focus:outline-black bg-gray-200 rounded text-black' type="text" placeholder='Enter link text' />

                        <input className='px-4 text-black py-2 focus:outline-black bg-gray-200 rounded' type="text" placeholder='Enter link ' />

                        <button className='bg-yellow-200 px-5 cursor-pointer rounded-4xl text-black font-semibold'>
                            Add Link.
                        </button>

                    </div>

                    <h2 className='font-bold text-xl'>Add a profile picture</h2>

                    <div className='mx-4 gap-5 flex flex-col'>


                    <input className='px-4 text-black py-2 w-fit focus:outline-black bg-gray-200 rounded' type="text" placeholder='Enter link ' />

                    <button className='bg-yellow-200 px-5 py-2 w-fit cursor-pointer rounded-4xl text-black font-semibold'>
                            Create Link.
                        </button>

                    </div>

                </div>


            </div>


            {/* <div className="col1 flex items-center justify-center flex-col p-10">
                <h1 className="font-bold text-6xl mb-12">Create Your Link.</h1>

                <div className="flex flex-col gap-8 w-full max-w-md">
                    <div>
                        <h1 className="font-bold text-xl mb-2">Claim your Handle</h1>
                        <input
                            className="w-full px-4 py-2 focus:outline-black bg-gray-200 rounded"
                            type="text"
                            placeholder="Choose a handle"
                        />
                    </div>

                    <div>
                        <h1 className="font-bold text-xl mb-2">Add Links.</h1>
                        <input
                            className="w-full px-4 py-2 focus:outline-black bg-gray-200 rounded"
                            type="text"
                            placeholder="Enter link text"
                        />
                        <input
                            className="w-full px-4 py-2 focus:outline-black bg-gray-200 rounded"
                            type="text"
                            placeholder="Enter link"
                        />
                    </div>

                    <div>
                        <h1 className="font-bold text-xl mb-2">Enter link</h1>
                        
                    </div>
                </div>
            </div> */}



            <div className="col2 w-full h-screen bg-[#225ac0]">

                <img className='h-full object-contain' src="https://assets.production.linktr.ee/auth/3532/media/banner-login-desktop.f355be949b508c58ec2d.webp" alt="this" />

            </div>

        </div>
    )
}

export default generate
