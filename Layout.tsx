import { Link, Outlet } from "react-router-dom";

function Layout() {
  return (
    <div className="dashboard">
      <aside className="sidebar">
        <h2>TaskFlow AI</h2>

        <ul>
          <li>
            <Link to="/">🏠 Dashboard</Link>
          </li>
          <li>
            <Link to="/projects">📁 Projects</Link>
          </li>
          <li>
            <Link to="/tasks">✅ Tasks</Link>
          </li>
          <li>
            <Link to="/profile">👤 Profile</Link>
          </li>
          <li>
            <Link to="/settings">⚙️ Settings</Link>
          </li>
        </ul>
      </aside>

      <main className="content">
        <Outlet />
      </main>
    </div>
  );
}

export default Layout;
