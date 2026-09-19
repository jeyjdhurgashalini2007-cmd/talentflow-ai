const employees = [
    {
        id: "EMP001",
        name: "Arun Kumar",
        department: "Engineering",
        current_role: "Software Engineer",
        experience_years: 2,
        skills: [
            {
                name: "Java",
                level: 85,
                source: "explicit",
                confidence: 0.98
            },
            {
                name: "SQL",
                level: 80,
                source: "explicit",
                confidence: 0.95
            },
            {
                name: "REST API",
                level: 75,
                source: "project",
                confidence: 0.88
            }
        ],
        projects: [
            {
                name: "Inventory Management System",
                description:
                    "Built a Java application with SQL database integration and REST APIs."
            }
        ],
        courses: [
            "Java Programming",
            "Database Management"
        ],
        certifications: [
            "Java Programming Certification"
        ],
        career_goal: "Backend Engineer"
    }
];

module.exports = employees;