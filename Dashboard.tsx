import "../styles/dashboard.css";

function Dashboard() {
  return (
    <>
      <h1>Dashboard</h1>

      <div className="cards">
        <div className="card">
          <h2>12</h2>
          <p>Projects</p>
        </div>

        <div className="card">
          <h2>58</h2>
          <p>Tasks</p>
        </div>

        <div className="card">
          <h2>17</h2>
          <p>Completed</p>
        </div>
      </div>
    </>
  );
}

export default Dashboard;
