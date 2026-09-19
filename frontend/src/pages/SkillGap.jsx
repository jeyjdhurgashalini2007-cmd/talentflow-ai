import {
  Target,
  Sparkles,
  AlertTriangle,
  BookOpen,
  Code2,
  Database,
  CheckCircle,
  ArrowRight,
  Clock,
} from "lucide-react";

function SkillGap() {
  const skills = [
    {
      name: "TypeScript",
      current: 35,
      required: 80,
      priority: "High",
      icon: Code2,
      reason:
        "Type-safe development is an important requirement for modern full-stack applications.",
      recommendation: "Complete a TypeScript course and build a React project.",
      effort: "2–3 weeks",
    },
    {
      name: "Node.js",
      current: 25,
      required: 75,
      priority: "High",
      icon: Code2,
      reason:
        "Backend development is currently one of your largest capability gaps.",
      recommendation: "Build a REST API using Node.js and Express.",
      effort: "3–4 weeks",
    },
    {
      name: "Database Design",
      current: 30,
      required: 70,
      priority: "Medium",
      icon: Database,
      reason:
        "Database knowledge is required to complete end-to-end application development.",
      recommendation:
        "Learn data modeling and build a project using MongoDB.",
      effort: "2 weeks",
    },
    {
      name: "Testing",
      current: 45,
      required: 65,
      priority: "Medium",
      icon: CheckCircle,
      reason:
        "Testing knowledge can improve application reliability and development quality.",
      recommendation:
        "Learn unit testing and add tests to an existing React project.",
      effort: "1–2 weeks",
    },
  ];

  return (
    <div className="page skill-gap-page">
      {/* Header */}

      <div className="page-header">
        <div>
          <div className="skill-gap-ai-label">
            <Sparkles size={16} />
            AI Career Development
          </div>

          <h1>Skill Gap Analysis</h1>

          <p>
            Discover what skills you need to develop for your target career
            and get personalized recommendations.
          </p>
        </div>
      </div>

      {/* Target Role */}

      <section className="skill-gap-target">
        <div className="skill-gap-target-main">
          <div className="skill-gap-target-icon">
            <Target size={23} />
          </div>

          <div>
            <span>YOUR TARGET ROLE</span>

            <h2>Full Stack Developer</h2>

            <p>
              AI compares your current capabilities with the skills required
              for your target role.
            </p>
          </div>
        </div>

        <div className="skill-gap-readiness">
          <span>Role Readiness</span>
          <strong>68%</strong>

          <div className="readiness-bar">
            <div
              className="readiness-fill"
              style={{ width: "68%" }}
            ></div>
          </div>
        </div>
      </section>

      {/* AI Summary */}

      <section className="skill-gap-summary">
        <div className="skill-gap-summary-icon">
          <Sparkles size={21} />
        </div>

        <div>
          <span>AI GAP ANALYSIS</span>

          <h2>
            You are strongest in frontend development, with backend skills
            currently representing the largest development opportunity.
          </h2>

          <p>
            Focusing on TypeScript and Node.js first can help close your
            highest-priority gaps for the Full Stack Developer path.
          </p>
        </div>
      </section>

      {/* Gap Overview */}

      <section className="skill-gap-overview">
        <div>
          <AlertTriangle size={19} />
          <strong>4</strong>
          <span>Skills to Develop</span>
        </div>

        <div>
          <Target size={19} />
          <strong>2</strong>
          <span>High Priority</span>
        </div>

        <div>
          <BookOpen size={19} />
          <strong>4</strong>
          <span>Learning Actions</span>
        </div>

        <div>
          <Clock size={19} />
          <strong>8–11</strong>
          <span>Weeks Estimated</span>
        </div>
      </section>

      {/* Skill Gap Cards */}

      <section className="dashboard-card skill-gap-list-card">
        <div className="skill-gap-section-header">
          <div>
            <h2>Priority Skill Gaps</h2>

            <p>
              Your current skill level compared with the requirements of your
              target role.
            </p>
          </div>
        </div>

        <div className="skill-gap-list">
          {skills.map((skill) => {
            const Icon = skill.icon;
            const gap = skill.required - skill.current;

            return (
              <article className="skill-gap-item" key={skill.name}>
                <div className="skill-gap-item-header">
                  <div className="skill-gap-name">
                    <div className="skill-gap-icon">
                      <Icon size={18} />
                    </div>

                    <div>
                      <h3>{skill.name}</h3>

                      <span
                        className={`gap-priority ${skill.priority.toLowerCase()}`}
                      >
                        {skill.priority} Priority
                      </span>
                    </div>
                  </div>

                  <div className="gap-percentage">
                    <strong>{gap}%</strong>
                    <span>Skill Gap</span>
                  </div>
                </div>

                {/* Current vs Required */}

                <div className="skill-comparison">
                  <div className="comparison-header">
                    <span>Current Level</span>
                    <strong>{skill.current}%</strong>
                  </div>

                  <div className="comparison-bar">
                    <div
                      className="current-skill-fill"
                      style={{ width: `${skill.current}%` }}
                    ></div>
                  </div>

                  <div className="comparison-required">
                    <span>Required for Role</span>
                    <strong>{skill.required}%</strong>
                  </div>

                  <div className="required-marker">
                    <div
                      style={{
                        left: `${skill.required}%`,
                      }}
                    ></div>
                  </div>
                </div>

                {/* Explanation */}

                <div className="skill-gap-reason">
                  <strong>Why this gap matters</strong>

                  <p>{skill.reason}</p>
                </div>

                {/* Recommendation */}

                <div className="skill-learning-recommendation">
                  <div className="learning-icon">
                    <BookOpen size={18} />
                  </div>

                  <div className="learning-content">
                    <span>AI RECOMMENDATION</span>

                    <h4>{skill.recommendation}</h4>

                    <div className="learning-meta">
                      <span>
                        <Clock size={13} />
                        {skill.effort}
                      </span>

                      <span>
                        <Target size={13} />
                        Personalized
                      </span>
                    </div>
                  </div>

                  <button className="add-roadmap-button">
                    Add to Roadmap
                    <ArrowRight size={14} />
                  </button>
                </div>
              </article>
            );
          })}
        </div>
      </section>

      {/* Learning Path */}

      <section className="dashboard-card learning-sequence-card">
        <div className="skill-gap-section-header">
          <div>
            <h2>Recommended Learning Sequence</h2>

            <p>
              AI has arranged your skill development in an order designed to
              build progressively toward your target role.
            </p>
          </div>
        </div>

        <div className="learning-sequence">
          <div className="sequence-item">
            <div className="sequence-number">01</div>

            <div>
              <strong>TypeScript</strong>
              <span>Build on your existing React knowledge</span>
            </div>

            <b>High Priority</b>
          </div>

          <div className="sequence-line"></div>

          <div className="sequence-item">
            <div className="sequence-number">02</div>

            <div>
              <strong>Node.js + Express</strong>
              <span>Develop practical backend skills</span>
            </div>

            <b>High Priority</b>
          </div>

          <div className="sequence-line"></div>

          <div className="sequence-item">
            <div className="sequence-number">03</div>

            <div>
              <strong>Database Development</strong>
              <span>Learn data modeling and persistence</span>
            </div>

            <b>Medium Priority</b>
          </div>

          <div className="sequence-line"></div>

          <div className="sequence-item">
            <div className="sequence-number">04</div>

            <div>
              <strong>Testing</strong>
              <span>Improve application quality and reliability</span>
            </div>

            <b>Medium Priority</b>
          </div>
        </div>
      </section>

      {/* Roadmap CTA */}

      <section className="skill-gap-roadmap-cta">
        <div>
          <Sparkles size={22} />

          <div>
            <span>PERSONALIZED CAREER ROADMAP</span>

            <h2>
              Turn these skill gaps into an actionable career plan.
            </h2>

            <p>
              Your learning recommendations can be organized into a
              step-by-step roadmap toward Full Stack Developer.
            </p>
          </div>
        </div>

        <a href="/career-roadmap">
          Open Career Roadmap
          <ArrowRight size={16} />
        </a>
      </section>
    </div>
  );
}

export default SkillGap;