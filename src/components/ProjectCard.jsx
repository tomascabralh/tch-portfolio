import React from 'react'

const ProjectCard = ({ title, imageUrl, skills, codeUrl, liveUrl }) => {
    return (
        <div>
            <img src={imageUrl} alt={title} className='w-full rounded' />
            <div className='mb-5'>
                <h1 className='text-[24px] mt-5 mb-1'>{title}</h1>
                <h2 className='flex'>{skills.map((skill, index) => (
                    <span key={index} className="flex items-center text-[#D9D9D9] font-extralight">
                        {skill}
                        {index !== skills.length - 1 && <span className="mx-2">-</span>}
                    </span>
                ))}</h2>
            </div>
            <div className="flex gap-4 font-semibold tracking-[2.3px]">
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