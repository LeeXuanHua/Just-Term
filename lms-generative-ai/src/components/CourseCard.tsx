import React from 'react';

interface CourseCardProps {
    title: string;
    description: string;
    enrollLink: string;
}

const CourseCard: React.FC<CourseCardProps> = ({ title, description, enrollLink }) => {
    return (
        <div className="bg-white rounded-lg shadow-md p-4 hover:shadow-lg transition-shadow">
            <h3 className="text-lg font-semibold">{title}</h3>
            <p className="text-gray-600">{description}</p>
            <a href={enrollLink} className="mt-4 inline-block bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
                Enroll Now
            </a>
        </div>
    );
};

export default CourseCard;