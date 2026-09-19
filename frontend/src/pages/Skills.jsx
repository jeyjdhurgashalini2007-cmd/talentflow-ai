import {
  Sparkles,
  CheckCircle,
  Brain,
  TrendingUp,
  Lightbulb,
} from "lucide-react";

function Skills() {
  const explicitSkills = [
    { name: "React", level: 90, category: "Frontend" },
    { name: "JavaScript", level: 85, category: "Programming" },
    { name: "HTML", level: 88, category: "Frontend" },
    { name: "CSS", level: 84, category: "Frontend" },
    { name: "Git", level: 76, category: "Tools" },
    { name: "Frontend Development", level: 90, category: "Core" },
  ];

  const inferredSkills = [
    {
      name: "Problem Solving",
      confidence: 92,
      strength: 82,
      evidence: "Detected from project implementation and debugging tasks.",
    },
    {
      name: "Team Collaboration",
      confidence: 87,
      strength: 78,
      evidence: "Detected from collaborative development activities.",
    },
    {
      name: "UI/UX Thinking",
      confidence: 81,
      strength: 80,
      evidence: "Detected from frontend interfaces and user-focused projects.",
    },
    {
      name: "Adaptability",
      confidence: 78,
      strength: 74,
      evidence: "Detected from learning and applying multiple technologies.",
    },
  ];

  return (
    <div className="page skills-page">
      {/* Header */}

      <div className="page-header">
        <div>
          <div className="skills-ai-label">
            <Sparkles size={16} />
            AI Skill Intelligence
          </div>

          <h1>My Skills</h1>

          <p>
            A dynamic view of your technical, transferable, and AI-discovered
            capabilities.
          </p>
        </div>
      </div>

      {/* Skill Overview */}

      <section className="skills-overview">
        <div className="skills-overview-item">
          <div className="skills-overview-icon">
            <CheckCircle size={20} />
          </div>

          <div>
            <strong>18</strong>
            <span>Explicit Skills</span>
          </div>
        </div>

        <div className="skills-overview-item">
          <div className="skills-overview-icon">
            <Brain size={20} />
          </div>

          <div>
            <strong>6</strong>
            <span>AI-Inferred Skills</span>
          </div>
        </div>

        <div className="skills-overview-item">
          <div className="skills-overview-icon">
            <TrendingUp size={20} />
          </div>

          <div>
            <strong>84%</strong>
            <span>Average Skill Strength</span>
          </div>
        </div>

        <div className="skills-overview-item">
          <div className="skills-overview-icon">
            <Sparkles size={20} />
          </div>

          <div>
            <strong>92%</strong>
            <span>Top AI Confidence</span>
          </div>
        </div>
      </section>

      {/* AI Insight */}

      <section className="skills-ai-insight">
        <div className="skills-insight-icon">
          <Lightbulb size={22} />
        </div>

        <div>
          <span>AI SKILL INSIGHT</span>

          <h2>
            Your strongest capability is frontend development.
          </h2>

          <p>
            React, JavaScript, UI development, and problem solving form the
            strongest part of your current skill profile. Expanding into
            TypeScript and backend development can increase your career
            opportunities.
          </p>
        </div>
      </section>

      {/* Explicit Skills */}

      <section className="dashboard-card skills-section-card">
        <div className="skills-section-header">
          <div>
            <h2>Explicit Skills</h2>

            <p>
              Skills directly identified from your profile, experience,
              projects, and learning history.
            </p>
          </div>

          <span className="skill-source-badge">
            Profile Data
          </span>
        </div>

        <div className="explicit-skill-grid">
          {explicitSkills.map((skill) => (
            <div className="explicit-skill-card" key={skill.name}>
              <div className="explicit-skill-header">
                <div>
                  <h3>{skill.name}</h3>
                  <span>{skill.category}</span>
                </div>

                <strong>{skill.level}%</strong>
              </div>

              <div className="skill-strength-bar">
                <div
                  className="skill-strength-fill"
                  style={{ width: `${skill.level}%` }}
                ></div>
              </div>

              <div className="skill-level-text">
                Skill Strength
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Inferred Skills */}

      <section className="dashboard-card skills-section-card">
        <div className="skills-section-header">
          <div>
            <h2>AI-Inferred Skills</h2>

            <p>
              Transferable capabilities discovered by analyzing your projects,
              experience, and work patterns.
            </p>
          </div>

          <span className="ai-discovered-badge">
            <Sparkles size={13} />
            AI Discovered
          </span>
        </div>

        <div className="inferred-skills-grid">
          {inferredSkills.map((skill) => (
            <div className="skill-analysis-card" key={skill.name}>
              <div className="skill-analysis-header">
                <div className="skill-analysis-icon">
                  <Brain size={18} />
                </div>

                <div>
                  <h3>{skill.name}</h3>
                  <span>Transferable Skill</span>
                </div>

                <strong>{skill.confidence}%</strong>
              </div>

              <p className="skill-evidence">
                {skill.evidence}
              </p>

              <div className="confidence-section">
                <div className="confidence-header">
                  <span>AI Confidence</span>
                  <strong>{skill.confidence}%</strong>
                </div>

                <div className="confidence-bar">
                  <div
                    className="confidence-fill"
                    style={{ width: `${skill.confidence}%` }}
                  ></div>
                </div>
              </div>

              <div className="inferred-strength">
                <span>Estimated Strength</span>
                <strong>{skill.strength}%</strong>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Transferable Skill Explanation */}

      <section className="dashboard-card skill-explanation-card">
        <div className="skill-explanation-icon">
          <Brain size={22} />
        </div>

        <div>
          <h2>How AI discovers hidden skills</h2>

          <p>
            TalentFlow AI analyzes project work, technologies used, learning
            activity, collaboration patterns, and work history to identify
            capabilities that may not be explicitly listed in an employee's
            profile.
          </p>

          <div className="skill-explanation-flow">
            <span>Experience</span>
            <b>→</b>
            <span>AI Analysis</span>
            <b>→</b>
            <span>Skill Discovery</span>
            <b>→</b>
            <span>Evidence</span>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Skills;