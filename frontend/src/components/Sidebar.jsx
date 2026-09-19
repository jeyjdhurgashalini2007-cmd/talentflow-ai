import {
  LayoutDashboard,
  User,
  Sparkles,
  Briefcase,
  Target,
  Map,
  MessageCircle,
  Settings,
  LogOut,
} from "lucide-react";

function Sidebar() {
  return (
    <aside className="sidebar">
      <div className="sidebar-logo">
        <Sparkles size={24} />
        <span>TalentFlow AI</span>
      </div>

      <nav className="sidebar-nav">
        <a href="/">
          <LayoutDashboard size={20} />
          <span>Dashboard</span>
        </a>

        <a href="/profile">
          <User size={20} />
          <span>My Profile</span>
        </a>

        <a href="/skills">
          <Sparkles size={20} />
          <span>My Skills</span>
        </a>

        <a href="/roles">
          <Briefcase size={20} />
          <span>Role Matches</span>
        </a>

        <a href="/skill-gap">
          <Target size={20} />
          <span>Skill Gap</span>
        </a>

        <a href="/career-roadmap">
          <Map size={20} />
          <span>Career Roadmap</span>
        </a>

        <a href="/career-assistant">
          <MessageCircle size={20} />
          <span>AI Career Assistant</span>
        </a>
      </nav>

      <div className="sidebar-bottom">
        <a href="#">
          <Settings size={20} />
          <span>Settings</span>
        </a>

        <a href="#">
          <LogOut size={20} />
          <span>Logout</span>
        </a>
      </div>
    </aside>
  );
}

export default Sidebar;