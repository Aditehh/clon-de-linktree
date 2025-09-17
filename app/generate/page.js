import React from 'react'

const generate = () => {
    return (
        <div className='bg-[#254f1a] min-h-screen grid grid-cols-2'>


            <div className="col1 flex items-center justify-center flex-col">
                <h1 className='font-bold text-6xl'>Create Your Link.</h1>
                <div className='flex flex-col gap-5'>
                    <input className='bg-white' type="text" placeholder='Enter link text' />
                    <input className='bg-white' type="text" placeholder='Enter link ' />
                </div>


            </div>


            <div className="col2 w-full h-screen bg-[#225ac0]">

                <img className='h-full object-contain' src="https://assets.production.linktr.ee/auth/3532/media/banner-login-desktop.f355be949b508c58ec2d.webp" alt="this" />

            </div>

        </div>
    )
}

export default generate
