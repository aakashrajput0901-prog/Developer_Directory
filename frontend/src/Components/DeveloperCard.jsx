import React from "react";

const DeveloperCard = ({ developer }) => {
    const techs = Array.isArray(developer.techstack) ? developer.techstack : (developer.techStack ? developer.techStack.split(',') : []);
    return (
    <div className='p-4 bg-white border border-gray-200 rounded-lg shadow-sm'>
        <h3 className='text-xl font-semibold mb-2'>{developer.name}</h3>
        <p className='text-gray-600 mb-1'><strong>Role:</strong>
         <span className="font-semibold text-indigo-600"> {developer.role}</span></p>
        <p className='text-gray-600 text-md'><strong>Experience:</strong> <span className="font-semibold">{developer.experience}</span> years</p>
        <div className="mt-2 flex flex-wrap gap-2">
            {techs.map((tech, index) => (
                <span key={index} className="bg-indigo-100 text-indigo-800 text-sm font-medium mr-2 px-2.5 py-0.5 rounded">{tech.trim()}</span>
            ))}
        </div>
    </div>
    );
};

export default DeveloperCard;
