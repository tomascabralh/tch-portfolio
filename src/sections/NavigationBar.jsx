import React from 'react'

const NavigationBar = () => {
    return (
        <nav className="flex justify-between items-center py-6 px-4">
            <p className="text-xl font-bold">tomascabralhunter</p>
            <div className="flex gap-4">
                {/* Replace with your SocialLinks component */}
                <a href="#" aria-label="GitHub">🐱</a>
                <a href="#" aria-label="FrontendMentor">⚒️</a>
                <a href="#" aria-label="LinkedIn">🔗</a>
                <a href="#" aria-label="Twitter">🐦</a>
            </div>
        </nav>
    )
}

export default NavigationBar