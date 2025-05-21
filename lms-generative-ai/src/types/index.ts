export interface Course {
    id: string;
    title: string;
    description: string;
    instructor: string;
    duration: number; // duration in hours
    level: 'beginner' | 'intermediate' | 'advanced';
    enrollmentLink: string;
}

export interface User {
    id: string;
    name: string;
    email: string;
    role: 'student' | 'instructor' | 'admin';
}