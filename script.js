// Sample projects data
const projects = [
    {
        category: 'C/C++',
        name: 'Freight Management System',
        description: 'Designed and implemented an efficient website that included frontend consisting of HTML and CSS along with the backend in PHP MYSQL. The website offered various features for the management of freight, ports, handling cargo, etc.'
    },
    {
        category: 'C/C++',
        name: 'Account Database Management And Security',
        description: 'Designed an efficient algorithm for storing and editing User ID\'s and encrypted passwords in a text file along with retrieving user passwords by decrypting them from a .txt file. Also provided some editing features for the encrypted data stored in the file.'
    },
    {
        category: 'C/C++',
        name: 'PARALLEL CALCULATION OF CONVOLUTION OF MATRIX',
        description: 'Implemented parallel matrix convolution using C++ and OpenMP, achieving a significant 40% reduction in processing time. Demonstrated expertise in parallel and distributed computing, showcasing the ability to enhance algorithm efficiency through effective integration of C++ and OpenMP.'
    },
    {
        category: 'Flutter and Dart',
        name: 'MiCard',
        description: 'Designed a single page beautiful UI containing details of the Developer/Organisation that designed the app.'
    },
    {
        category: 'Flutter and Dart',
        name: 'Xylophone APP',
        description: 'Designed this app using Flutter packages incorporating the app with audio features.'
    },
    {
        category: 'Flutter and Dart',
        name: 'BMI Calculator',
        description: 'Built this multi-screens app using Flutter theme and custom widget along with BMI calculator functionality implemented in Dart.'
    },
    {
        category: 'Flutter and Dart',
        name: 'ClimaX',
        description: 'Built this Flutter app with live web data using multiple APIs, Networking using the http package, Json parsing, and state management.'
    },
    {
        category: 'Flutter and Dart',
        name: 'FLUTTER CHAT APPLICATION',
        description: 'A Flutter chat app that provides functionalities of account creation, log-in, email authentication, and group chats using Firebase cloud services such as FireStore Database, Firebase Authentication, and Storage.'
    },
    {
        category: 'HTML, CSS, PHP, MYSQL, Bootstrap',
        name: 'SHIPPING PORT MANAGEMENT SYSTEM',
        description: 'Developed a full-stack Shipping Port Management System using HTML, CSS, PHP, MySQL, and Bootstrap. This comprehensive solution enables user registration, login, cargo management, shipment scheduling, report generation, and handling port operations.'
    },
    {
        category: 'REACT, Javascript',
        name: 'Sorting Algorithms Visualizer',
        description: 'Developed a dynamic React.js application showcasing various sorting algorithms, such as Quick Sort, Selection Sort, etc., providing an interactive platform for users to grasp algorithmic concepts effectively. Implemented intuitive visualizations to enhance comprehension of algorithmic processes.'
    },
];

// Function to filter projects based on input
function filterProjects() {
    const filterValue = document.getElementById('filter').value.toLowerCase();
    const projectList = document.getElementById('projectList');

    // Clear existing projects
    projectList.innerHTML = '';

    // Filter and display projects
    projects.forEach(project => {
        if (project.category.toLowerCase().includes(filterValue)) {
            const listItem = document.createElement('li');
            listItem.innerHTML = `<strong>${project.name}</strong> - ${project.description}`;
            projectList.appendChild(listItem);
        }
    });
}

// Sample certifications data
const certifications = [
    "Beginning C++ Programming - From Beginner to Beyond",
    "The Complete 2021 Flutter Development Bootcamp with Dart",
    "Logo Design Mastery In Adobe Illustrator",
    "Python For Beginners to Advance",
    "PHP for Beginners 2023: The Complete PHP MySQL PDO Course",
];

// Function to populate the certifications list
function populateCertifications() {
    const certificatesList = document.getElementById('certificatesList');

    // Clear existing certifications
    certificatesList.innerHTML = '';

    // Populate the certifications list
    certifications.forEach(certification => {
        const listItem = document.createElement('li');
        listItem.textContent = certification;
        certificatesList.appendChild(listItem);
    });
}

// Initial certifications display
populateCertifications();


// Initial projects display
filterProjects();
