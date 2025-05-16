import React from 'react'

const Title = ({ children, size = "large", align = "left" }) => {
    const sizeClasses = {
        large: 'text-[40px] md:text-[72px]',
        medium: 'text-[32px] md:text-[48px]',
        small: 'text-[24px] md:text-[32px]'
    };

    const alignClasses = {
        left: 'text-left md:text-center lg:text-left',
        center: 'text-center',
        right: 'text-right'
    };

    return (
        <div className={`${sizeClasses[size]} ${alignClasses[align]} text-[#FFFFFF] font-semibold`}>
            {children}
        </div>
    )
}

export default Title