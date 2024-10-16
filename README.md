# CV Application

Welcome to the CV Application, a web-based platform that allows users to dynamically create their own CVs by entering various personal and professional information. This application provides options for entering general info, educational experience, practical experience, skills, languages, hobbies, and references. Once the user is finished, they can download their CV as a Word document, formatted with all the details entered.

## Live Demo: [CV Application](https://cv-application-rho-three.vercel.app/)
Table of Contents
- Features
- Technologies Used
- Installation and Setup
- Usage
- Project Structure
- How to Customize
- Contributing
- License

## Features
- Multiple Sections: Users can enter information about their general info, educational background, work experience, skills, languages, hobbies, and references.
- Bullet Points: Both the educational experience and practical experience sections allow the user to enter bullet points (e.g., responsibilities, achievements) for each entry.
- Dynamic Navigation: The app includes a navigation bar that allows users to easily switch between sections while filling out the form.
- Word Document Export: After entering all the information, users can download the CV as a .docx file with proper formatting, including bullet points.
- Responsive Design: The application is designed to be responsive, providing a good experience on both desktop and mobile devices.

## Technologies Used
- React: The core framework for building this single-page application (SPA).
- docx: Used to generate and export the CV as a Word document.
- file-saver: Helps with saving the generated Word file on the client side.
- CSS: For styling and layout.
- Vercel: For deployment.


## Usage
- Navigate Between Sections: Use the navigation bar at the top to move between the different sections of the CV (e.g., General Info, Education, Experience, etc.).
- Add Bullet Points: In the Educational Experience and Practical Experience sections, you can enter multiple entries and add bullet points to describe details like achievements or responsibilities.
- Download CV: Once all the sections are filled out, click on the "Download as Word Document" button at the bottom of the page to download your CV in .docx format.

Sections Included:
- General Info: Enter your name, email, and phone number.
- Educational Experience: Enter details about your education and add bullet points for achievements.
- Practical Experience: Enter your work experience, and add bullet points for responsibilities.
- Skills: Enter your technical and soft skills.
- Languages: List any languages you speak.
- Hobbies: Share your interests and hobbies.
- References: Add references for potential employers.

## Project Structure
```bash
cv-application/
├── public/
├── src/
│   ├── components/
│   │   ├── EducationalExperience.js
│   │   ├── GeneralInfo.js
│   │   ├── Hobbies.js
│   │   ├── Languages.js
│   │   ├── Navbar.js
│   │   ├── PracticalExperience.js
│   │   ├── References.js
│   │   ├── Skills.js
│   │   └── CVForm.js
│   ├── styles/
│   │   ├── App.css
│   │   ├── EducationalExperience.css
│   │   ├── GeneralInfo.css
│   │   ├── Hobbies.css
│   │   ├── Languages.css
│   │   ├── Navbar.css
│   │   ├── PracticalExperience.css
│   │   ├── References.css
│   │   ├── Skills.css
│   │   └── CVForm.css
│   ├── App.js
│   ├── index.js
│   └── README.md
└── package.json
```

Key Files:
- CVForm.js: Main component that holds the form sections and logic for navigating between them.
- EducationalExperience.js: Allows users to input education details and bullet points.
- PracticalExperience.js: Allows users to input work experience and bullet points.
- Navbar.js: The navigation bar that allows users to switch between different form sections.
- App.js: The root component that renders the entire application.

## How to Customize
You can customize the application by:
- Modifying Components: If you want to change the fields or sections, edit the respective component files in src/components/.
- Adding New Sections: You can add new sections to the CV by creating new components and linking them to the main CVForm.js file.
- Styling: Modify the CSS files in the src/styles/ folder to change the look and feel of the application.
- Export Formatting: To customize how the CV looks in the exported Word document, modify the downloadWordDocument function inside CVForm.js. You can use the docx library’s options to add more advanced styling.

## Contributing
Contributions are welcome! 