import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import CourseCard from '../components/CourseCard';

const Home: React.FC = () => {
    return (
        <div>
            <main>
                <h1>Welcome to the Generative AI Learning Platform</h1>
                <p>Explore our courses designed specifically for professionals in the finance sector.</p>
                <section>
                    <h2>Featured Courses</h2>
                    <div className="course-list">
                        <CourseCard title="Introduction to Generative AI" description="Learn the basics of Generative AI and its applications in finance." enrollLink="https://google.com" />
                        <CourseCard title="Advanced Generative Models" description="Dive deeper into advanced techniques and models used in Generative AI." enrollLink="https://google.com" />
                        <CourseCard title="Ethics in AI" description="Understand the ethical implications of using AI in financial services." enrollLink="https://google.com" />
                    </div>
                </section>
            </main>
        </div>
    );
};

export default Home;