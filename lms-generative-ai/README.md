# Learning Management System for Generative AI in Finance

## Overview
This project is a Learning Management System (LMS) designed to teach Generative AI concepts specifically tailored for individuals in the finance sector. The platform provides a variety of courses that cover the fundamentals of Generative AI, its applications in finance, and hands-on projects to enhance learning.

## Features
- **User-Friendly Interface**: A clean and intuitive interface for easy navigation.
- **Course Catalog**: A comprehensive list of courses available for users to enroll in.
- **Responsive Design**: The application is designed to be responsive and accessible on various devices.
- **API Integration**: Utility functions to fetch course data and user information.

## Project Structure
```
lms-generative-ai
├── public
│   ├── index.html
│   └── favicon.ico
├── src
│   ├── components
│   │   ├── Header.tsx
│   │   ├── Footer.tsx
│   │   └── CourseCard.tsx
│   ├── pages
│   │   ├── Home.tsx
│   │   ├── Courses.tsx
│   │   └── About.tsx
│   ├── assets
│   │   └── styles
│   │       └── main.css
│   ├── utils
│   │   └── api.ts
│   ├── App.tsx
│   ├── index.tsx
│   └── types
│       └── index.ts
├── package.json
├── tsconfig.json
├── .gitignore
└── README.md
```

## Getting Started

### Prerequisites
- Node.js (version 14 or higher)
- npm (Node package manager)

### Installation
1. Clone the repository:
   ```
   git clone <repository-url>
   ```
2. Navigate to the project directory:
   ```
   cd lms-generative-ai
   ```
3. Install the dependencies:
   ```
   npm install
   ```

### Running the Application
To start the development server, run:
```
npm start
```
The application will be available at `http://localhost:3000`.

### Building for Production
To create a production build, run:
```
npm run build
```

## Contributing
Contributions are welcome! Please open an issue or submit a pull request for any enhancements or bug fixes.

## License
This project is licensed under the MIT License. See the LICENSE file for details.