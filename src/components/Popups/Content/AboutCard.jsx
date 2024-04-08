import React from 'react';

const AboutCard = () => {
    return (
        <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 flex flex-col">
            <div className="mb-4">
                <a href="https://github.com/ywang980/COMP-4513-Assignment-2" className="text-blue-500 text-lg font-bold mb-2 hover:text-blue-800">GitHub</a>
            </div>
            <div className="mb-4">
                <h2 className="text-gray-700 text-lg font-bold mb-2">Created By:</h2>
                <p className="text-gray-700 text-base">Nimrat Brar, Andy Wang</p>
            </div>
            <div className="mb-4">
                <h2 className="text-gray-700 text-lg font-bold mb-2">Description:</h2>
                <p className="text-gray-700 text-base">A React application intended to fetch and display various F1 series data.</p>
            </div>
            <div className="mb-4">
                <h2 className="text-gray-700 text-lg font-bold mb-2">Frameworks/Environments Used:</h2>
                <p className="text-gray-700 text-base">Node.js, React, Vite, Supabase, TailwindCSS, DaisyUI</p>
            </div>
        </div>
    );
};

export default AboutCard;