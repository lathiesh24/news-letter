import React from 'react'

const Newsletter = () => {
    return (
        <div className='flex justify-center items-center'>
            <div className='border-2 pr-8 pl-8  font-montserrat bg-white border-white shadow-lg'>
                <div className='font-semibold text-2xl mt-4 mb-4'>Newsletter Name</div>
                <div className='font-normal text-lg '>Subscribe to the newsletter to get updates about new contents and news</div>
                <div className='grid grid-flow-col justify-between mt-4 mb-4 place-items-center'>
                    <div>
                        <input type='email' name='email' placeholder='lathieshmahendran24@gmail.com' className='w-[520px]  mt-0.5 outline-slate-300 font-normal text-sm p-2 font-sans' />
                    </div>
                    <div>
                        <button className='border-2 rounded-md text-white bg-blue-500 font-medium text-sm p-2'>
                            Subscribe
                        </button>
                    </div>
                </div>
                <div className='font-medium text-sm mt-4 mb-4'>Join 00 subscribers - 00 issues</div>
            </div>
        </div>
    )
}

export default Newsletter