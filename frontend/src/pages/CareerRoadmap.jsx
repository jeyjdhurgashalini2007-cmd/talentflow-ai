import {
  Sparkles,
  CheckCircle,
  Clock,
  Lock,
  BookOpen,
  Code2,
  Database,
  Rocket,
  ArrowRight,
} from "lucide-react";

function CareerRoadmap() {
  const roadmap = [
    {
      step: "01",
      title: "Strengthen Frontend Skills",
      status: "Completed",
      progress: 100,
      duration: "Completed",
      icon: CheckCircle,
      description:
        "Build strong foundations in React, JavaScript, HTML, CSS, and modern frontend development.",
      skills: ["React", "JavaScript", "HTML", "CSS"],
      action: "Foundation completed",
    },
    {
      step: "02",
      title: "Master TypeScript",
      status: "In Progress",
      progress: 45,
      duration: "2–3 weeks",
      icon: Code2,
      description:
        "Develop type-safe React applications and improve code quality using TypeScript.",
      skills: ["TypeScript", "React Types", "Interfaces"],
      action: "Continue learning",
    },
    {
      step: "03",
      title: "Build Backend Skills",
      status: "Upcoming",
      progress: 20,
      duration: "3–4 weeks",
      icon: Code2,
      description:
        "Learn Node.js, Express, REST APIs, authentication, and backend application development.",
      skills: ["Node.js", "Express", "REST API"],
      action: "Start learning",
    },
    {
      step: "04",
      title: "Learn Database Development",
      status: "Upcoming",
      progress: 0,
      duration: "2 weeks",
      icon: Database,
      description:
        "Understand database design, data modeling, queries, and application data management.",
      skills: ["MongoDB", "Database Design", "Data Modeling"],
      action: "Start learning",
    },
    {
      step: "05",
      title: "Build Full Stack Projects",
      status: "Upcoming",
      progress: 0,
      duration: "3–4 weeks",
      icon: Rocket,
      description:
        "Combine frontend and backend skills by building complete production-style applications.",
      skills: ["Full Stack", "Git", "Deployment"],
      action: "Unlock later",
    },
  ];

  return (
    <div className="page career-roadmap-page">
      {/* Header */}

      <div className="page-header">
        <div>
          <div className="roadmap-ai-label">
            <Sparkles size={16} />
            AI Personalized Career Path
          </div>

          <h1>Career Roadmap</h1>

          <p>
            A personalized development journey generated from your skills,
            career goals, and identified skill gaps.
          </p>
        </div>
      </div>

      {/* Career Target */}

      <section className="career-target-card">
        <div className="career-target-main">
          <div className="career-target-icon">
            <Rocket size={23} />
          </div>

          <div>
            <span>TARGET CAREER</span>

            <h2>Full Stack Developer</h2>

            <p>
              AI has created this roadmap based on your current profile and
              the requirements of your target role.
            </p>
          </div>
        </div>

        <div className="career-progress-summary">
          <strong>52%</strong>
          <span>Overall Progress</span>

          <div className="career-overall-bar">
            <div
              className="career-overall-fill"
              style={{ width: "52%" }}
            ></div>
          </div>
        </div>
      </section>

      {/* AI Recommendation */}

      <section className="roadmap-ai-recommendation">
        <div className="roadmap-recommendation-icon">
          <Sparkles size={22} />
        </div>

        <div>
          <span>AI NEXT STEP</span>

          <h2>
            Continue TypeScript before moving deeper into backend development.
          </h2>

          <p>
            TypeScript builds directly on your existing React knowledge and is
            currently one of your highest-priority skill gaps.
          </p>
        </div>

        <a href="/skill-gap">
          View Skill Gap
          <ArrowRight size={15} />
        </a>
      </section>

      {/* Roadmap Stats */}

      <section className="roadmap-stats">
        <div>
          <CheckCircle size={19} />
          <strong>1</strong>
          <span>Completed</span>
        </div>

        <div>
          <Clock size={19} />
          <strong>1</strong>
          <span>In Progress</span>
        </div>

        <div>
          <BookOpen size={19} />
          <strong>3</strong>
          <span>Upcoming</span>
        </div>

        <div>
          <Rocket size={19} />
          <strong>12+</strong>
          <span>Weeks Remaining</span>
        </div>
      </section>

      {/* Roadmap */}

      <section className="dashboard-card roadmap-main-card">
        <div className="roadmap-section-heading">
          <div>
            <h2>Your AI Career Journey</h2>

            <p>
              Complete each milestone to move closer to your target role.
            </p>
          </div>

          <span>5 Milestones</span>
        </div>

        <div className="ai-roadmap-list">
          {roadmap.map((item, index) => {
            const Icon = item.icon;

            return (
              <div className="ai-roadmap-item" key={item.step}>
                <div className="roadmap-step-column">
                  <div
                    className={`roadmap-step-icon ${item.status
                      .toLowerCase()
                      .replace(" ", "-")}`}
                  >
                    {item.status === "Upcoming" ? (
                      <Lock size={17} />
                    ) : (
                      <Icon size={17} />
                    )}
                  </div>

                  {index < roadmap.length - 1 && (
                    <div className="roadmap-connector"></div>
                  )}
                </div>

                <div className="roadmap-item-content">
                  <div className="roadmap-item-top">
                    <div>
                      <span className="roadmap-step-number">
                        STEP {item.step}
                      </span>

                      <h3>{item.title}</h3>

                      <span
                        className={`roadmap-status-badge ${item.status
                          .toLowerCase()
                          .replace(" ", "-")}`}
                      >
                        {item.status}
                      </span>
                    </div>

                    <strong>{item.progress}%</strong>
                  </div>

                  <p className="roadmap-description">
                    {item.description}
                  </p>

                  <div className="roadmap-skill-tags">
                    {item.skills.map((skill) => (
                      <span key={skill}>{skill}</span>
                    ))}
                  </div>

                  <div className="roadmap-progress-section">
                    <div className="roadmap-progress-top">
                      <span>Progress</span>
                      <span>{item.duration}</span>
                    </div>

                    <div className="roadmap-item-bar">
                      <div
                        className="roadmap-item-fill"
                        style={{ width: `${item.progress}%` }}
                      ></div>
                    </div>
                  </div>

                  <div className="roadmap-item-footer">
                    <span>
                      <BookOpen size={13} />
                      {item.action}
                    </span>

                    {item.status !== "Completed" &&
                      item.status !== "Upcoming" && (
                        <button>
                          Continue
                          <ArrowRight size={14} />
                        </button>
                      )}

                    {item.status === "Upcoming" && (
                      <span className="locked-label">
                        Complete previous step
                      </span>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Learning Plan */}

      <section className="dashboard-card roadmap-learning-card">
        <div className="roadmap-section-heading">
          <div>
            <h2>Recommended Learning Plan</h2>

            <p>
              AI-selected activities that support your current roadmap step.
            </p>
          </div>
        </div>

        <div className="learning-plan-grid">
          <div className="learning-plan-item">
            <div className="learning-plan-icon">
              <BookOpen size={19} />
            </div>

            <div>
              <span>COURSE</span>
              <h3>TypeScript Fundamentals</h3>
              <p>Learn types, interfaces, generics, and type-safe React.</p>
            </div>

            <b>2 weeks</b>
          </div>

          <div className="learning-plan-item">
            <div className="learning-plan-icon">
              <Code2 size={19} />
            </div>

            <div>
              <span>PROJECT</span>
              <h3>Build a TypeScript React App</h3>
              <p>
                Apply TypeScript by converting a small React application.
              </p>
            </div>

            <b>1 week</b>
          </div>

          <div className="learning-plan-item">
            <div className="learning-plan-icon">
              <Rocket size={19} />
            </div>

            <div>
              <span>NEXT PROJECT</span>
              <h3>Node.js REST API</h3>
              <p>
                Build your first backend API after completing TypeScript.
              </p>
            </div>

            <b>3 weeks</b>
          </div>
        </div>
      </section>

      {/* Completion CTA */}

      <section className="roadmap-completion-card">
        <div>
          <Sparkles size={23} />

          <div>
            <span>CAREER GOAL</span>

            <h2>Become Full Stack Developer</h2>

            <p>
              Keep completing the recommended milestones to build the skills
              required for your target career.
            </p>
          </div>
        </div>

        <a href="/career-assistant">
          Ask AI Assistant
          <ArrowRight size={16} />
        </a>
      </section>
    </div>
  );
}

export default CareerRoadmap;