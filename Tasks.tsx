function Tasks() {
  const tasks = [
    { id: 1, title: "Design Dashboard", status: "Completed" },
    { id: 2, title: "Build Login Page", status: "In Progress" },
    { id: 3, title: "Connect MongoDB", status: "Pending" },
    { id: 4, title: "Deploy Website", status: "Pending" },
  ];

  return (
    <>
      <h1>Tasks</h1>

      {tasks.map((task) => (
        <div className="card" key={task.id}>
          <h3>{task.title}</h3>
          <p>Status: {task.status}</p>
        </div>
      ))}
    </>
  );
}

export default Tasks;
