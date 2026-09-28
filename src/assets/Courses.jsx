import React from "react";

const courses = [
  {
    id: 1,
    title: "Full Stack Web Development",
    category: "Web Development",
    duration: "6 Months",
    level: "Beginner to Advanced",
    price: "₹25,000",
    description:
      "Learn frontend and backend development and build complete web applications.",
    topics: [
      "HTML & CSS",
      "JavaScript",
      "React",
      "Node.js",
      "Database",
    ],
  },

  {
    id: 2,
    title: "Advanced Java",
    category: "Programming",
    duration: "4 Months",
    level: "Intermediate",
    price: "₹18,000",
    description:
      "Learn Java Servlets, JSP, JDBC and enterprise application development.",
    topics: [
      "Multithreading",
      "Servlet",
      "JSP",
      "JDBC",
      "Database Connectivity",
    ],
  },

  {
    id: 3,
    title: "Python Programming",
    category: "Programming",
    duration: "3 Months",
    level: "Beginner",
    price: "₹12,000",
    description:
      "Build a strong foundation in Python programming and problem solving.",
    topics: [
      "Python Basics",
      "Functions",
      "OOP",
      "File Handling",
      "Projects",
    ],
  },

  {
    id: 4,
    title: "Database Management",
    category: "Database",
    duration: "3 Months",
    level: "Intermediate",
    price: "₹14,000",
    description:
      "Understand databases, SQL queries and database management concepts.",
    topics: [
      "SQL",
      "Tables",
      "Joins",
      "Normalization",
      "Database Design",
    ],
  },

  {
    id: 5,
    title: "Data Science",
    category: "Data Science",
    duration: "5 Months",
    level: "Intermediate",
    price: "₹22,000",
    description:
      "Learn data analysis, visualization and important data science concepts.",
    topics: [
      "Python",
      "Pandas",
      "NumPy",
      "Data Visualization",
      "Statistics",
    ],
  },

  {
    id: 6,
    title: "Machine Learning",
    category: "Artificial Intelligence",
    duration: "6 Months",
    level: "Advanced",
    price: "₹30,000",
    description:
      "Learn machine learning algorithms and build intelligent applications.",
    topics: [
      "Python",
      "Regression",
      "Classification",
      "Clustering",
      "Projects",
    ],
  },

  {
    id: 7,
    title: "Web Designing",
    category: "Design",
    duration: "3 Months",
    level: "Beginner",
    price: "₹10,000",
    description:
      "Learn how to design attractive and responsive modern websites.",
    topics: [
      "HTML",
      "CSS",
      "JavaScript",
      "Responsive Design",
      "UI Design",
    ],
  },

  {
    id: 8,
    title: "Cyber Security",
    category: "Security",
    duration: "5 Months",
    level: "Intermediate",
    price: "₹24,000",
    description:
      "Learn the fundamentals of cyber security and protect digital systems.",
    topics: [
      "Network Security",
      "Ethical Hacking",
      "Cryptography",
      "Linux",
      "Security",
    ],
  },

  {
    id: 9,
    title: "Cloud Computing",
    category: "Cloud Technology",
    duration: "4 Months",
    level: "Intermediate",
    price: "₹20,000",
    description:
      "Understand cloud computing and learn modern cloud technologies.",
    topics: [
      "Cloud Basics",
      "AWS",
      "Virtual Machines",
      "Storage",
      "Deployment",
    ],
  },

  {
    id: 10,
    title: "Artificial Intelligence",
    category: "Artificial Intelligence",
    duration: "6 Months",
    level: "Advanced",
    price: "₹32,000",
    description:
      "Explore artificial intelligence concepts and build intelligent solutions.",
    topics: [
      "AI Basics",
      "Machine Learning",
      "Neural Networks",
      "NLP",
      "Projects",
    ],
  },
];

function Courses({ onDetails, onDashboard }) {
  return (
    <div className="courses-page">

      <header className="page-header">

        <div className="logo">
          <span>Learn</span>Hub
        </div>

        <div className="header-links">

          <button onClick={onDashboard}>
            Dashboard
          </button>

        </div>

      </header>

      <div className="courses-heading">

        <p className="section-label">
          EXPLORE COURSES
        </p>

        <h1>Choose Your Course</h1>

        <p>
          Select a course and explore its details before enrolling.
        </p>

      </div>

      <div className="course-list">

        {courses.map((course) => (

          <div className="course-item" key={course.id}>

            <div className="course-number">
              {course.id < 10 ? `0${course.id}` : course.id}
            </div>

            <div className="course-content">

              <div className="course-top">

                <span className="course-category">
                  {course.category}
                </span>

                <span className="course-duration">
                  {course.duration}
                </span>

              </div>

              <h2>{course.title}</h2>

              <p>{course.description}</p>

              <div className="course-bottom">

                <span>
                  ● {course.level}
                </span>

                <span>
                  💰 {course.price}
                </span>

                <button
                  onClick={() => onDetails(course)}
                  className="details-btn"
                >
                  View Details →
                </button>

              </div>

            </div>

          </div>

        ))}

      </div>

    </div>
  );
}

export default Courses;
