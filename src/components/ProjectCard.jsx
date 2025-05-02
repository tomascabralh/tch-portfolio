import React from 'react'

const ProjectCard = ({ title, imageUrl, skills, codeUrl, liveUrl }) => {
    return (
        <div className="relative group w-full lg:max-w-[545px] md:h-[250px] lg:h-[400px] lg:mb-[138px]">

            <img src={imageUrl} alt={title} className='w-full lg:max-w-[545px] md:h-[250px] lg:h-[400px] rounded' />

            <div className="hidden md:flex absolute inset-0 bg-black bg-opacity-80 group-hover:flex items-center justify-center flex-col gap-6 text-white opacity-0 group-hover:opacity-70 transition-opacity duration-300 rounded">
                <a
                    href={liveUrl}
                    target="_blank"
                    className="hover:text-green-300 duration-500 text-sm font-semibold tracking-[2px]"
                >
                    VIEW PROJECT
                    <div className="h-[1px] bg-green-300 mt-2 w-full"></div>
                </a>

                {codeUrl && (
                    <a
                        href={codeUrl}
                        target="_blank"
                        className="hover:text-green-300 duration-500 text-white text-sm font-semibold tracking-[2px]"
                    >
                        VIEW CODE
                        <div className="h-[1px] bg-green-300 mt-2 w-full"></div>
                    </a>
                )}
            </div>

            <div className='mb-5'>
                <h1 className='text-[24px] mt-5 mb-1'>{title}</h1>
                <h2 className='flex'>{skills.map((skill, index) => (
                    <span key={index} className="flex items-center text-[#D9D9D9] font-extralight">
                        {skill}
                        {index !== skills.length - 1 && <span className="mx-2">-</span>}
                    </span>
                ))}</h2>
            </div>

            <div className="flex gap-4 font-semibold tracking-[2.3px] md:hidden">
                <div className="flex flex-col items-center">
                    <a href={liveUrl} className="">VIEW PROJECT</a>
                    <div className="h-[1px] bg-green-300 w-full mt-2"></div>
                </div>

                {codeUrl && (
                    <div className="flex flex-col items-center">
                        <a href={codeUrl}>VIEW CODE</a>
                        <div className="h-[1px] bg-green-300 w-full mt-2"></div>
                    </div>
                )}
            </div>
        </div>
    )
}

export default ProjectCard