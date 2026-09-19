import { useState } from "react";
import {
  Bot,
  Send,
  User,
  Sparkles,
  RotateCcw,
  ThumbsUp,
  ThumbsDown,
  Briefcase,
  Target,
  Map,
  BookOpen,
} from "lucide-react";

function CareerAssistant() {
  const [message, setMessage] = useState("");

  const [messages, setMessages] = useState([
    {
      id: 1,
      type: "bot",
      text: "Hi! I'm TalentFlow AI, your career intelligence assistant.",
    },
    {
      id: 2,
      type: "bot",
      text: "I can help you understand your skills, internal role matches, skill gaps, learning recommendations, and career roadmap.",
    },
  ]);

  const suggestions = [
    {
      icon: Target,
      text: "What skills should I improve?",
    },
    {
      icon: Briefcase,
      text: "Why am I a good match for Frontend Developer?",
    },
    {
      icon: BookOpen,
      text: "What should I learn for Full Stack Developer?",
    },
    {
      icon: Map,
      text: "Explain my career roadmap",
    },
  ];

  const getResponse = (question) => {
    const lowerQuestion = question.toLowerCase();

    if (
      lowerQuestion.includes("skill") &&
      (lowerQuestion.includes("improve") ||
        lowerQuestion.includes("learn") ||
        lowerQuestion.includes("gap"))
    ) {
      return {
        title: "Your priority skill gaps",
        text:
          "Based on your current profile, TypeScript and Node.js are your highest-priority development areas. TypeScript is recommended first because it builds directly on your existing React knowledge.",
        actions: ["View Skill Gaps", "Open Career Roadmap"],
      };
    }

    if (
      lowerQuestion.includes("frontend") ||
      lowerQuestion.includes("match") ||
      lowerQuestion.includes("role")
    ) {
      return {
        title: "Your Frontend Developer match",
        text:
          "Your profile has a 92% match with the Frontend Developer role. React, JavaScript, CSS, UI development, and problem solving are the main skills supporting this match. TypeScript is the main identified development gap.",
        actions: ["View Role Matches", "Explore TypeScript"],
      };
    }

    if (
      lowerQuestion.includes("full stack") ||
      lowerQuestion.includes("backend")
    ) {
      return {
        title: "Your Full Stack development path",
        text:
          "Your frontend foundation gives you a strong starting point. Your recommended path is TypeScript → Node.js → REST APIs → database development → full-stack projects.",
        actions: ["View Skill Gaps", "View Roadmap"],
      };
    }

    if (
      lowerQuestion.includes("roadmap") ||
      lowerQuestion.includes("career path")
    ) {
      return {
        title: "Your current career roadmap",
        text:
          "Your roadmap contains five stages: strengthen frontend skills, master TypeScript, build backend skills, learn database development, and complete full-stack projects.",
        actions: ["Open Career Roadmap"],
      };
    }

    if (
      lowerQuestion.includes("learn") ||
      lowerQuestion.includes("course") ||
      lowerQuestion.includes("study")
    ) {
      return {
        title: "Recommended learning",
        text:
          "Your next learning focus should be TypeScript. A practical approach is to learn TypeScript fundamentals and then convert a small React project to TypeScript. After that, move into Node.js and REST APIs.",
        actions: ["View Learning Plan", "View Roadmap"],
      };
    }

    return {
      title: "TalentFlow AI insight",
      text:
        "Based on your current employee profile, I recommend focusing on your highest-priority skill gaps first. You can explore Role Matches, Skill Gap Analysis, and Career Roadmap for more detailed recommendations.",
      actions: ["View Skill Gaps", "View Role Matches"],
    };
  };

  const sendMessage = (text = message) => {
    const trimmedMessage = text.trim();

    if (!trimmedMessage) {
      return;
    }

    const response = getResponse(trimmedMessage);

    const userMessage = {
      id: Date.now(),
      type: "user",
      text: trimmedMessage,
    };

    const botMessage = {
      id: Date.now() + 1,
      type: "bot",
      title: response.title,
      text: response.text,
      actions: response.actions,
    };

    setMessages((previousMessages) => [
      ...previousMessages,
      userMessage,
      botMessage,
    ]);

    setMessage("");
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    sendMessage();
  };

  const resetChat = () => {
    setMessages([
      {
        id: Date.now(),
        type: "bot",
        text: "Welcome back! I'm ready to help with your career, skills, role matches, and learning plan.",
      },
    ]);

    setMessage("");
  };

  return (
    <div className="page assistant-page">
      {/* Header */}

      <div className="page-header">
        <div>
          <div className="assistant-ai-label">
            <Sparkles size={16} />
            AI Career Intelligence
          </div>

          <h1>AI Career Assistant</h1>

          <p>
            Ask questions about your skills, internal opportunities, career
            growth, and personalized learning.
          </p>
        </div>
      </div>

      {/* Assistant */}

      <div className="advanced-assistant-container">
        {/* Assistant Header */}

        <div className="advanced-assistant-header">
          <div className="advanced-assistant-profile">
            <div className="advanced-assistant-avatar">
              <Bot size={24} />
            </div>

            <div>
              <h2>TalentFlow AI</h2>

              <span>
                Career Intelligence Assistant
              </span>
            </div>
          </div>

          <div className="assistant-header-actions">
            <div className="assistant-online">
              <span></span>
              Online
            </div>

            <button
              className="reset-chat-button"
              onClick={resetChat}
              title="Reset conversation"
            >
              <RotateCcw size={15} />
            </button>
          </div>
        </div>

        {/* Chat */}

        <div className="advanced-chat-area">
          {messages.map((item) => (
            <div
              className={`advanced-chat-message ${
                item.type === "user"
                  ? "advanced-user-message"
                  : "advanced-bot-message"
              }`}
              key={item.id}
            >
              <div className="advanced-message-avatar">
                {item.type === "user" ? (
                  <User size={15} />
                ) : (
                  <Bot size={15} />
                )}
              </div>

              <div className="advanced-message-body">
                {item.title && (
                  <strong className="assistant-response-title">
                    {item.title}
                  </strong>
                )}

                <p>{item.text}</p>

                {item.actions && (
                  <div className="assistant-response-actions">
                    {item.actions.map((action) => (
                      <button key={action}>
                        {action}
                      </button>
                    ))}
                  </div>
                )}

                {item.type === "bot" && item.id !== 1 && (
                  <div className="message-feedback">
                    <span>Was this helpful?</span>

                    <button>
                      <ThumbsUp size={13} />
                    </button>

                    <button>
                      <ThumbsDown size={13} />
                    </button>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Quick Actions */}

        <div className="assistant-quick-section">
          <div className="assistant-quick-heading">
            <Sparkles size={14} />

            <span>QUICK CAREER QUESTIONS</span>
          </div>

          <div className="assistant-quick-list">
            {suggestions.map((suggestion) => {
              const Icon = suggestion.icon;

              return (
                <button
                  key={suggestion.text}
                  onClick={() => sendMessage(suggestion.text)}
                >
                  <Icon size={15} />
                  {suggestion.text}
                </button>
              );
            })}
          </div>
        </div>

        {/* Input */}

        <form
          className="advanced-chat-input"
          onSubmit={handleSubmit}
        >
          <input
            type="text"
            placeholder="Ask about skills, roles, learning, or career growth..."
            value={message}
            onChange={(event) => setMessage(event.target.value)}
          />

          <button type="submit">
            <Send size={18} />
            <span>Send</span>
          </button>
        </form>

        <div className="assistant-disclaimer">
          <Sparkles size={12} />
          TalentFlow AI provides career guidance based on your current
          employee profile and available role information.
        </div>
      </div>
    </div>
  );
}

export default CareerAssistant;