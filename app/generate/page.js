import React from 'react'

const generate = () => {
    return (
        <div className='bg-[#225ac0] min-h-screen grid grid-cols-2'>


            {/* <div className="col1 flex items-center justify-center flex-col">
                <h1 className='font-bold text-6xl my-9'>Create Your Link.</h1>
                <div className='flex flex-col gap-5'>
                    <h1 className='font-bold text-xl'>Claim your Handle</h1>
                    <input className='px-4 py-2 focus:outline-black bg-gray-200 rounded' type="text" placeholder='Choose a handle' />

                    <h1 className='font-bold text-xl'>Enter link text</h1>

                    <input className='px-4 py-2 focus:outline-black bg-gray-200 rounded' type="text" placeholder='Enter link text' />

                    <h1 className='font-bold text-xl'>Enter link</h1>

                    <input className='px-4 py-2 focus:outline-black bg-gray-200 rounded' type="text" placeholder='Enter link ' />
                </div>


            </div> */}


            <div className="col1 flex items-center justify-center flex-col p-10">
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
            </div>



            <div className="col2 w-full h-screen bg-[#225ac0]">

                <img className='h-full object-contain' src="https://assets.production.linktr.ee/auth/3532/media/banner-login-desktop.f355be949b508c58ec2d.webp" alt="this" />

            </div>

        </div>
    )
}

export default generate
