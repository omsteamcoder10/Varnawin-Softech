// app/data/courses.ts
export interface Course {
  id: string;
  name: string;
  description: string;
  image: string;
  duration?: string;
  level?: string;
}

export const allProducts: Course[] = [
  {
    id: "1",
    name: "Full Stack Development",
    description: "Java / .NET / Python full stack development with hands-on labs, real-time projects, and deployment.",
    image: "/courses/1.webp",
    duration: "6 Months",
    level: "Intermediate"
  },
  { id: "2", name: "Data Analytics & Business Intelligence", description: "Data analysis, dashboards, reporting, and business intelligence tools with practical use cases.", image: "/courses/2.webp" },
  { id: "3", name: "Data Science & Machine Learning", description: "Python, machine learning algorithms, model building, and industry-focused projects.", image: "/courses/3.webp" },
  { id: "4", name: "Artificial Intelligence & Generative AI", description: "AI fundamentals, generative AI tools, prompt engineering, and real-world AI applications.", image: "/courses/4.webp" },
  { id: "5", name: "Cloud Computing (AWS, Azure, GCP)", description: "Cloud architecture, services, deployment, and administration with hands-on labs.", image: "/courses/5.webp" },
  { id: "6", name: "DevOps & DevSecOps", description: "CI/CD pipelines, automation, containerization, monitoring, and DevSecOps practices.", image: "/courses/6.webp" },
  { id: "7", name: "Cyber Security & SOC Analyst", description: "Cyber security fundamentals, SOC tools, threat analysis, and real-time security scenarios.", image: "/courses/7.webp" },
  { id: "8", name: "Software Testing", description: "Manual, automation, API, performance, ETL, and mobile testing with real-time projects.", image: "/courses/8.webp" },
  { id: "9", name: "RPA & Intelligent Automation", description: "UiPath, Power Automate, Blue Prism with intelligent automation use cases.", image: "/courses/9.webp" },
  { id: "10", name: "Microsoft Power Platform & M365", description: "Power BI, Power Apps, Power Automate, and Microsoft 365 administration.", image: "/courses/10.webp" },
  { id: "11", name: "Web & UI/UX Development", description: "Responsive web design, UI/UX principles, Figma, and user-centered design projects.", image: "/courses/11.webp" },
  { id: "12", name: "Mobile App Development", description: "Android and cross-platform app development with real-world mobile projects.", image: "/courses/12.webp" },
  { id: "13", name: "Digital Marketing & Performance Marketing", description: "SEO, SEM, social media marketing, analytics, and performance-driven campaigns.", image: "/courses/13.webp" },
  { id: "14", name: "Project Management (Agile, Scrum, PMP)", description: "Agile methodologies, Scrum framework, project planning, and certification preparation.", image: "/courses/14.webp" },
  { id: "15", name: "Business Analysis & Product Management", description: "Requirement analysis, documentation, stakeholder management, and product strategy.", image: "/courses/15.webp" },
  { id: "16", name: "Advanced Excel & Business Tools", description: "Advanced Excel, PowerPoint, dashboards, and business productivity tools.", image: "/courses/16.webp" },
  { id: "17", name: "Leadership & People Management", description: "Leadership development, people management, and organizational effectiveness.", image: "/courses/17.webp" },
  { id: "18", name: "Communication & Presentation Skills", description: "Professional communication, presentation skills, and workplace confidence building.", image: "/courses/18.webp" },
  { id: "19", name: "Career Readiness & Interview Skills", description: "Resume building, interview preparation, and career readiness training.", image: "/courses/19.webp" },
  { id: "20", name: "Internship & Project Mentoring Program", description: "Industry-oriented internships, live projects, and expert mentoring support.", image: "/courses/20.webp" },
  {
  id: "21",
  name: "Database Course",
  description:
    "SQL, MySQL, PostgreSQL, Oracle concepts with hands-on queries, optimization, and real-time use cases.",
  image: "/courses/21.webp",
  duration: "3 Months",
  level: "Beginner to Intermediate",
}

];