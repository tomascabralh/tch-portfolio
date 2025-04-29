import React from 'react'

const Title = ({ children }) => {
    return (
        <div className='text-[40px] md:text-[72px] md:max-w-[500px] lg:max-w-full text-[#FFFFFF] font-semibold'>
            {children}
        </div>
    )
}

export default Title