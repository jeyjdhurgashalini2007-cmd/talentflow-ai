import {
  Sparkles,
  TrendingUp,
  Target,
  Briefcase,
  ArrowRight,
  CheckCircle,
} from "lucide-react";

function Dashboard() {
  const skills = [
    { name: "React", level: 90 },
    { name: "JavaScript", level: 85 },
    { name: "Problem Solving", level: 82 },
    { name: "UI Development", level: 80 },
  ];

  const roles = [
    {
      title: "Frontend Developer",
      department: "Technology",
      match: 92,
      reason: "Strong React, JavaScript and UI development skills",
    },
    {
      title: "UI Engineer",
      department: "Product Engineering",
      match: 84,
      reason: "Strong frontend and user-interface experience",
    },
    {
      title: "Full Stack Developer",
      department: "Engineering",
      match: 76,
      reason: "Strong frontend foundation with backend skill gaps",
    },
  ];

  return (
    <div className="dashboard">
      {/* Header */}

      <div className="dashboard-header">
        <div>
          <div className="dashboard-welcome">
            <Sparkles size={18} />
            <span>AI Career Intelligence</span>
          </div>

          <h1>Welcome back! 👋</h1>

          <p>
            Your AI-powered career journey, skills, and internal opportunities
            in one place.
          </p>
        </div>
      </div>

      {/* Stats */}

      <div className="stats-grid">
        <div className="stat-card">
          <div className="stat-icon">
            <Sparkles size={20} />
          </div>

          <h3>Skills Discovered</h3>

          <strong>24</strong>

          <p>
            <span className="positive-text">+6</span> AI-inferred skills
          </p>
        </div>

        <div className="stat-card">
          <div className="stat-icon">
            <Briefcase size={20} />
          </div>

          <h3>Top Role Match</h3>

          <strong>92%</strong>

          <p>Frontend Developer</p>
        </div>

        <div className="stat-card">
          <div className="stat-icon">
            <Target size={20} />
          </div>

          <h3>Skill Gaps</h3>

          <strong>5</strong>

          <p>Skills to develop</p>
        </div>

        <div className="stat-card">
          <div className="stat-icon">
            <TrendingUp size={20} />
          </div>

          <h3>Career Progress</h3>

          <strong>68%</strong>

          <p>
            <span className="positive-text">On track</span>
          </p>
        </div>
      </div>

      {/* AI Insight */}

      <section className="ai-insight-card">
        <div className="ai-insight-icon">
          <Sparkles size={22} />
        </div>

        <div className="ai-insight-content">
          <span>AI CAREER INSIGHT</span>

          <h2>Your frontend expertise is your strongest career advantage.</h2>

          <p>
            Your profile shows strong React, JavaScript, UI development, and
            problem-solving capabilities. Strengthening TypeScript and backend
            skills could help you progress toward Full Stack Developer roles.
          </p>
        </div>

        <a href="/skill-gap" className="insight-link">
          View Skill Gaps
          <ArrowRight size={16} />
        </a>
      </section>

      {/* Main Dashboard Grid */}

      <div className="dashboard-main-grid">
        {/* Skills */}

        <section className="dashboard-card">
          <div className="card-heading">
            <div>
              <h2>Top Skills</h2>
              <p>Your strongest discovered capabilities.</p>
            </div>

            <a href="/skills">
              View all
              <ArrowRight size={15} />
            </a>
          </div>

          <div className="dashboard-skills">
            {skills.map((skill) => (
              <div className="dashboard-skill" key={skill.name}>
                <div className="dashboard-skill-header">
                  <span>{skill.name}</span>
                  <strong>{skill.level}%</strong>
                </div>

                <div className="dashboard-progress">
                  <div
                    className="dashboard-progress-fill"
                    style={{ width: `${skill.level}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Role Matches */}

        <section className="dashboard-card">
          <div className="card-heading">
            <div>
              <h2>Recommended Roles</h2>
              <p>Internal opportunities matched to your profile.</p>
            </div>

            <a href="/roles">
              View all
              <ArrowRight size={15} />
            </a>
          </div>

          <div className="dashboard-role-list">
            {roles.map((role) => (
              <div className="dashboard-role" key={role.title}>
                <div className="role-info">
                  <div className="role-icon">
                    <Briefcase size={17} />
                  </div>

                  <div>
                    <h3>{role.title}</h3>
                    <span>{role.department}</span>
                  </div>
                </div>

                <div className="role-match">
                  <strong>{role.match}%</strong>
                  <span>Match</span>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>

      {/* Bottom Section */}

      <div className="dashboard-bottom-grid">
        {/* Career Progress */}

        <section className="dashboard-card">
          <div className="card-heading">
            <div>
              <h2>Career Roadmap</h2>
              <p>Progress toward Full Stack Developer.</p>
            </div>

            <a href="/career-roadmap">
              Open
              <ArrowRight size={15} />
            </a>
          </div>

          <div className="career-progress">
            <div className="career-progress-header">
              <span>Overall Progress</span>
              <strong>52%</strong>
            </div>

            <div className="dashboard-progress large">
              <div
                className="dashboard-progress-fill"
                style={{ width: "52%" }}
              ></div>
            </div>
          </div>

          <div className="roadmap-mini-list">
            <div>
              <CheckCircle size={17} />
              <span>Frontend Foundations</span>
              <strong>Completed</strong>
            </div>

            <div>
              <CheckCircle size={17} />
              <span>TypeScript</span>
              <strong>In Progress</strong>
            </div>

            <div>
              <Target size={17} />
              <span>Backend Development</span>
              <strong>Upcoming</strong>
            </div>
          </div>
        </section>

        {/* Quick Actions */}

        <section className="dashboard-card">
          <div className="card-heading">
            <div>
              <h2>Quick Actions</h2>
              <p>Continue your career development.</p>
            </div>
          </div>

          <div className="quick-actions">
            <a href="/skill-gap">
              <Target size={19} />
              <div>
                <strong>Review Skill Gaps</strong>
                <span>Identify your next skills to develop</span>
              </div>
              <ArrowRight size={16} />
            </a>

            <a href="/career-roadmap">
              <TrendingUp size={19} />
              <div>
                <strong>Continue Roadmap</strong>
                <span>Continue your personalized career path</span>
              </div>
              <ArrowRight size={16} />
            </a>

            <a href="/career-assistant">
              <Sparkles size={19} />
              <div>
                <strong>Ask AI Assistant</strong>
                <span>Get personalized career guidance</span>
              </div>
              <ArrowRight size={16} />
            </a>
          </div>
        </section>
      </div>
    </div>
  );
}

export default Dashboard;