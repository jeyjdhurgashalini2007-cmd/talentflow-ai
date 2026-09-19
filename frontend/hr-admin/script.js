const employee = {
    id: "EMP001",
    name: "Arun Kumar",
    role: "Software Engineer",
    department: "Engineering",
    experience: 2,
    careerGoal: "Backend Engineer",
    skills: ["Java", "SQL", "REST API"],
    match: 73
};

const sections = {
    overview: "Workforce Overview",
    talent: "Talent Discovery",
    roles: "Internal Role Matching",
    gaps: "Skill Gap Analysis",
    learning: "Learning Insights"
};

function showSection(sectionName) {

    document.querySelectorAll(".section").forEach(section => {
        section.classList.remove("active");
    });

    document.querySelectorAll(".nav-item").forEach(item => {
        item.classList.remove("active");
    });

    const section = document.getElementById(sectionName);

    if (section) {
        section.classList.add("active");
    }

    const clickedButton = document.querySelector(
        `.nav-item[onclick="showSection('${sectionName}')"]`
    );

    if (clickedButton) {
        clickedButton.classList.add("active");
    }

    document.getElementById("page-title").textContent =
        sections[sectionName] || "TalentFlow AI";
}


function searchEmployees() {

    const searchValue =
        document.getElementById("employeeSearch").value.toLowerCase();

    const row =
        document.getElementById("employee-row");

    const matches =
        employee.name.toLowerCase().includes(searchValue) ||
        employee.role.toLowerCase().includes(searchValue) ||
        employee.department.toLowerCase().includes(searchValue) ||
        employee.careerGoal.toLowerCase().includes(searchValue);

    row.style.display = matches ? "grid" : "none";
}


function runAIAnalysis() {

    const button =
        document.querySelector(".primary-btn");

    button.textContent = "⏳ Analyzing...";
    button.disabled = true;

    setTimeout(() => {

        button.textContent = "✓ Analysis Complete";

        document.getElementById("employee-count").textContent = "1";
        document.getElementById("skill-count").textContent = "12";

        setTimeout(() => {
            button.textContent = "✨ Run AI Analysis";
            button.disabled = false;
        }, 1800);

    }, 1200);
}


/* Learning recommendation actions */

document.addEventListener("DOMContentLoaded", () => {

    const buttons =
        document.querySelectorAll(".learning-card button");

    buttons.forEach(button => {

        button.addEventListener("click", () => {

            const originalText = button.textContent;

            button.textContent = "✓ Added";

            button.disabled = true;

            setTimeout(() => {
                button.textContent = originalText;
                button.disabled = false;
            }, 1600);

        });

    });

});