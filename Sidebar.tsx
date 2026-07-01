import { Link } from "react-router-dom";

function Sidebar() {
  return (
    <div
      style={{
        width: "220px",
        height: "100vh",
        background: "#2563eb",
        color: "white",
        padding: "20px",
      }}
    >
      <h2>TaskFlow AI</h2>

      <nav
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "15px",
          marginTop: "30px",
        }}
      >
        <Link
          to="/dashboard"
          style={{ color: "white", textDecoration: "none" }}
        >
          Dashboard
        </Link>

        <Link to="/projects" style={{ color: "white", textDecoration: "none" }}>
          Projects
        </Link>

        <Link to="/tasks" style={{ color: "white", textDecoration: "none" }}>
          Tasks
        </Link>

        <Link to="/profile" style={{ color: "white", textDecoration: "none" }}>
          Profile
        </Link>

        <Link to="/settings" style={{ color: "white", textDecoration: "none" }}>
          Settings
        </Link>
      </nav>
    </div>
  );
}

export default Sidebar;
