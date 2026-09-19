import {
  User,
  Sparkles,
  Briefcase,
  GraduationCap,
  Brain,
  CheckCircle,
  Lightbulb,
} from "lucide-react";

function Profile() {
  const explicitSkills = [
    "React",
    "JavaScript",
    "HTML",
    "CSS",
    "Git",
    "Frontend Development",
  ];

  const inferredSkills = [
    {
      name: "Problem Solving",
      confidence: 92,
      evidence: "Detected from project implementation and debugging experience.",
    },
    {
      name: "Team Collaboration",
      confidence: 87,
      evidence: "Detected from collaborative development and team projects.",
    },
    {
      name: "UI/UX Thinking",
      confidence: 81,
      evidence: "Detected from frontend interfaces and user-focused projects.",
    },
    {
      name: "Adaptability",
      confidence: 78,
      evidence: "Detected from learning multiple technologies across projects.",
    },
  ];

  return (
    <div className="page profile-page">
      {/* Header */}

      <div className="page-header">
        <div>
          <div className="profile-ai-label">
            <Sparkles size={16} />
            AI Employee Intelligence
          </div>

          <h1>My Profile</h1>

          <p>
            Your dynamic AI-powered employee profile based on skills,
            experience, projects, and learning.
          </p>
        </div>
      </div>

      {/* Employee Overview */}

      <section className="profile-hero">
        <div className="profile-main-info">
          <div className="large-profile-avatar">
            GK
          </div>

          <div>
            <h2>Frontend Developer</h2>

            <p className="profile-team">
              Technology & Product Team
            </p>

            <div className="profile-meta">
              <span>
                <Briefcase size={14} />
                2+ Years Experience
              </span>

              <span>
                <GraduationCap size={14} />
                Continuous Learner
              </span>
            </div>
          </div>
        </div>

        <div className="profile-readiness">
          <span>Career Readiness</span>
          <strong>68%</strong>
          <p>Based on current skills and target role.</p>
        </div>
      </section>

      {/* AI Summary */}

      <section className="ai-profile-summary">
        <div className="ai-profile-icon">
          <Brain size={24} />
        </div>

        <div>
          <span>AI PROFILE SUMMARY</span>

          <h2>
            Frontend-focused developer with strong product development
            potential.
          </h2>

          <p>
            Your profile demonstrates strong frontend development skills,
            particularly in React and JavaScript. AI analysis also identifies
            transferable strengths in problem solving, collaboration, and
            UI/UX thinking. Your current skill pattern suggests potential
            progression toward full-stack development.
          </p>
        </div>
      </section>

      {/* Profile Intelligence */}

      <div className="profile-intelligence-grid">
        {/* Explicit Skills */}

        <section className="dashboard-card">
          <div className="profile-section-header">
            <div>
              <h2>Explicit Skills</h2>

              <p>
                Skills directly identified from your profile and experience.
              </p>
            </div>

            <div className="profile-count">
              18
            </div>
          </div>

          <div className="skill-list profile-skill-list">
            {explicitSkills.map((skill) => (
              <span key={skill}>
                <CheckCircle size={13} />
                {skill}
              </span>
            ))}
          </div>
        </section>

        {/* Profile Stats */}

        <section className="dashboard-card">
          <div className="profile-section-header">
            <div>
              <h2>Profile Intelligence</h2>

              <p>
                Skills discovered from multiple data sources.
              </p>
            </div>

            <Sparkles size={20} className="profile-sparkle" />
          </div>

          <div className="profile-stat-list">
            <div>
              <strong>24</strong>
              <span>Total Skills</span>
            </div>

            <div>
              <strong>18</strong>
              <span>Explicit Skills</span>
            </div>

            <div>
              <strong>6</strong>
              <span>AI-Inferred Skills</span>
            </div>
          </div>
        </section>
      </div>

      {/* AI Inferred Skills */}

      <section className="dashboard-card inferred-skills-card">
        <div className="profile-section-header">
          <div>
            <h2>AI-Inferred Skills</h2>

            <p>
              Transferable capabilities discovered by analyzing your
              experience and projects.
            </p>
          </div>

          <div className="inferred-label">
            <Sparkles size={14} />
            AI Discovered
          </div>
        </div>

        <div className="inferred-skill-list">
          {inferredSkills.map((skill) => (
            <div className="inferred-skill-item" key={skill.name}>
              <div className="inferred-skill-top">
                <div>
                  <h3>{skill.name}</h3>

                  <p>{skill.evidence}</p>
                </div>

                <strong>{skill.confidence}%</strong>
              </div>

              <div className="confidence-bar">
                <div
                  className="confidence-fill"
                  style={{ width: `${skill.confidence}%` }}
                ></div>
              </div>

              <span className="confidence-text">
                AI Confidence
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* Strength Areas */}

      <div className="profile-bottom-grid">
        <section className="dashboard-card">
          <div className="profile-section-header">
            <div>
              <h2>Strength Areas</h2>

              <p>
                Areas where your profile currently shows strong capability.
              </p>
            </div>
          </div>

          <div className="strength-area-list">
            <div>
              <div className="strength-icon">
                <Briefcase size={18} />
              </div>

              <div>
                <strong>Frontend Development</strong>
                <span>Strong expertise</span>
              </div>

              <b>90%</b>
            </div>

            <div>
              <div className="strength-icon">
                <Brain size={18} />
              </div>

              <div>
                <strong>Problem Solving</strong>
                <span>Strong transferable skill</span>
              </div>

              <b>82%</b>
            </div>

            <div>
              <div className="strength-icon">
                <User size={18} />
              </div>

              <div>
                <strong>Collaboration</strong>
                <span>Strong team capability</span>
              </div>

              <b>78%</b>
            </div>
          </div>
        </section>

        {/* Career Potential */}

        <section className="dashboard-card">
          <div className="profile-section-header">
            <div>
              <h2>Career Potential</h2>

              <p>
                AI-generated development direction based on your profile.
              </p>
            </div>
          </div>

          <div className="potential-card">
            <div className="potential-icon">
              <Lightbulb size={21} />
            </div>

            <div>
              <h3>Full Stack Development</h3>

              <p>
                Your frontend foundation provides a strong starting point.
                Developing backend, database, and API skills could expand your
                internal career opportunities.
              </p>
            </div>
          </div>

          <a href="/skill-gap" className="profile-action-link">
            Explore Skill Gaps →
          </a>
        </section>
      </div>
    </div>
  );
}

export default Profile;