import React from 'react';

const Courses: React.FC = () => {
    const courses = [
        {
            id: 1,
            title: 'Introduction to Generative AI in Finance',
            description: 'Learn the basics of Generative AI and its applications in the finance sector.',
        },
        {
            id: 2,
            title: 'Advanced Generative Models',
            description: 'Dive deeper into advanced generative models and their financial applications.',
        },
        {
            id: 3,
            title: 'Ethics of AI in Finance',
            description: 'Understand the ethical implications of using AI in financial decision-making.',
        },
    ];

    return (
        <div>
            <h1>Available Courses</h1>
            <div>
                {courses.map(course => (
                    <div key={course.id}>
                        <h2>{course.title}</h2>
                        <p>{course.description}</p>
                        <button>Enroll Now</button>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Courses;