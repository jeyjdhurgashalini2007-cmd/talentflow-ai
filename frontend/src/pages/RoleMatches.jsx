import {
  Sparkles,
  Briefcase,
  CheckCircle,
  AlertCircle,
  ArrowRight,
  Target,
} from "lucide-react";

function RoleMatches() {
  const roles = [
    {
      title: "Frontend Developer",
      department: "Technology",
      location: "Internal Opportunity",
      match: 92,
      description:
        "Build and maintain modern web applications using React, JavaScript, and frontend technologies.",
      matchedSkills: [
        "React",
        "JavaScript",
        "CSS",
        "UI Development",
        "Problem Solving",
      ],
      skillGaps: ["TypeScript"],
      reason:
        "Your frontend development experience and strong React and JavaScript skills closely match this role.",
    },
    {
      title: "UI Engineer",
      department: "Product Engineering",
      location: "Internal Opportunity",
      match: 84,
      description:
        "Create user-focused interfaces and collaborate with product and design teams to build engaging experiences.",
      matchedSkills: [
        "React",
        "UI Development",
        "CSS",
        "Communication",
        "Team Collaboration",
      ],
      skillGaps: ["Design Systems", "Accessibility"],
      reason:
        "Your frontend and UI experience aligns well with the interface development responsibilities of this role.",
    },
    {
      title: "Full Stack Developer",
      department: "Engineering",
      location: "Career Growth Opportunity",
      match: 76,
      description:
        "Develop complete web applications across frontend, backend, APIs, and databases.",
      matchedSkills: [
        "JavaScript",
        "React",
        "Git",
        "Problem Solving",
      ],
      skillGaps: [
        "Node.js",
        "Database Design",
        "REST APIs",
      ],
      reason:
        "Your frontend foundation provides a strong starting point, while backend skills remain development areas.",
    },
  ];

  return (
    <div className="page role-matches-page">
      {/* Header */}

      <div className="page-header">
        <div>
          <div className="role-ai-label">
            <Sparkles size={16} />
            AI Internal Talent Matching
          </div>

          <h1>Role Matches</h1>

          <p>
            Discover internal opportunities matched to your skills, experience,
            projects, and career goals.
          </p>
        </div>
      </div>

      {/* AI Matching Summary */}

      <section className="role-matching-summary">
        <div className="role-summary-icon">
          <Sparkles size={24} />
        </div>

        <div className="role-summary-content">
          <span>AI MATCHING ENGINE</span>

          <h2>
            3 internal opportunities match your current profile.
          </h2>

          <p>
            TalentFlow AI compares your discovered skills with role
            requirements and explains both your strengths and development
            gaps for every opportunity.
          </p>
        </div>

        <div className="role-summary-score">
          <strong>92%</strong>
          <span>Top Match</span>
        </div>
      </section>

      {/* Role Filters */}

      <div className="role-filter-row">
        <button className="role-filter active">
          All Opportunities
        </button>

        <button className="role-filter">
          Best Matches
        </button>

        <button className="role-filter">
          Career Growth
        </button>
      </div>

      {/* Role Cards */}

      <div className="roles-container enhanced-role-container">
        {roles.map((role) => (
          <article className="role-card enhanced-role-card" key={role.title}>
            {/* Role Header */}

            <div className="enhanced-role-header">
              <div className="role-title-area">
                <div className="role-main-icon">
                  <Briefcase size={20} />
                </div>

                <div>
                  <h2>{role.title}</h2>

                  <p>{role.department}</p>

                  <span className="role-opportunity">
                    {role.location}
                  </span>
                </div>
              </div>

              <div className="enhanced-match-score">
                <strong>{role.match}%</strong>
                <span>AI Match</span>
              </div>
            </div>

            {/* Match Bar */}

            <div className="role-match-progress">
              <div className="role-match-progress-header">
                <span>Profile Compatibility</span>
                <strong>{role.match}%</strong>
              </div>

              <div className="role-match-bar">
                <div
                  className="role-match-fill"
                  style={{ width: `${role.match}%` }}
                ></div>
              </div>
            </div>

            {/* Description */}

            <p className="role-description enhanced-description">
              {role.description}
            </p>

            {/* AI Reason */}

            <div className="role-ai-reason">
              <Sparkles size={17} />

              <div>
                <strong>Why AI recommends this role</strong>

                <p>{role.reason}</p>
              </div>
            </div>

            {/* Matched Skills */}

            <div className="role-skill-section">
              <div className="role-section-title">
                <CheckCircle size={17} />

                <h3>Matched Skills</h3>

                <span>{role.matchedSkills.length}</span>
              </div>

              <div className="matched-skill-list">
                {role.matchedSkills.map((skill) => (
                  <span key={skill}>
                    <CheckCircle size={13} />
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* Skill Gaps */}

            <div className="role-skill-section">
              <div className="role-section-title gap-title">
                <AlertCircle size={17} />

                <h3>Development Gaps</h3>

                <span>{role.skillGaps.length}</span>
              </div>

              <div className="role-gap-list">
                {role.skillGaps.map((skill) => (
                  <span key={skill}>
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* Footer */}

            <div className="role-card-footer">
              <div className="role-growth-info">
                <Target size={16} />

                <span>
                  {role.skillGaps.length === 1
                    ? "Small skill gap"
                    : "Development opportunity"}
                </span>
              </div>

              <button className="view-role-button enhanced-view-button">
                View Role Details
                <ArrowRight size={15} />
              </button>
            </div>
          </article>
        ))}
      </div>

      {/* AI Career Insight */}

      <section className="dashboard-card role-career-insight">
        <div className="role-career-icon">
          <Target size={21} />
        </div>

        <div>
          <span>CAREER GROWTH INSIGHT</span>

          <h2>
            Your current profile can support multiple career directions.
          </h2>

          <p>
            Frontend development is currently your strongest role area.
            Developing TypeScript, Node.js, APIs, and database skills can
            expand your eligibility for full-stack opportunities.
          </p>
        </div>

        <a href="/skill-gap">
          Explore Skill Gaps
          <ArrowRight size={15} />
        </a>
      </section>
    </div>
  );
}

export default RoleMatches;