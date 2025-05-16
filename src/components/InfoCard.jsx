import React from 'react'

const InfoCard = ({ title, imageUrl, skills, codeUrl, liveUrl, isExperience, description, period }) => {
    return (
        <div className="relative group w-full lg:max-w-[545px] md:h-[250px] lg:h-[400px] lg:mb-[138px]">
            <img src={imageUrl} alt={title} className='w-full h-[250px] md:h-full object-cover rounded' />
            <div className="hidden md:flex absolute inset-0 bg-black bg-opacity-80 group-hover:flex items-center justify-center flex-col gap-6 text-white opacity-0 group-hover:opacity-90 transition-opacity duration-500 rounded px-6 text-center">
                {description && (
                    <p className="text-white text-base md:text-lg font-light mb-4 max-w-[90%]">{description}</p>
                )}
                <div className="flex flex-col gap-4 w-full items-center">
                    {liveUrl && (
                        <a
                            href={liveUrl}
                            target="_blank"
                            className="hover:text-green-300 duration-500 text-sm font-semibold tracking-[2px] inline-block border-b-2 border-green-300 pb-1"
                        >
                            {isExperience ? 'VISIT WEBSITE' : 'VIEW PROJECT'}
                        </a>
                    )}
                    {codeUrl && (
                        <a
                            href={codeUrl}
                            target="_blank"
                            className="hover:text-green-300 duration-500 text-white text-sm font-semibold tracking-[2px] inline-block border-b-2 border-green-300 pb-1"
                        >
                            VIEW CODE
                        </a>
                    )}
                </div>
            </div>
            <div className='mb-5'>
                <h1 className='text-[24px] mt-5 mb-1'>{title}</h1>
                {isExperience && period && (
                    <p className="text-[#D9D9D9] font-light mb-2">{period}</p>
                )}
                <h2 className='flex'>{skills.map((skill, index) => (
                    <span key={index} className="flex items-center text-[#D9D9D9] font-extralight">
                        {skill}
                        {index !== skills.length - 1 && <span className="mx-2">-</span>}
                    </span>
                ))}</h2>
            </div>
            <div className="flex gap-4 font-semibold tracking-[2.3px] md:hidden">
                {liveUrl && (
                    <div className="flex flex-col items-center">
                        <a href={liveUrl} className="inline-block border-b-2 border-green-300 pb-1">{isExperience ? 'VISIT WEBSITE' : 'VIEW PROJECT'}</a>
                    </div>
                )}
                {codeUrl && (
                    <div className="flex flex-col items-center">
                        <a href={codeUrl} className="inline-block border-b-2 border-green-300 pb-1">VIEW CODE</a>
                    </div>
                )}
            </div>
        </div>
    )
}

export default InfoCard