import "../styles/login.css";

function Login() {
  return (
    <div className="login-container">
      <div className="login-card">
        <h1>TaskFlow AI</h1>
        <p>Project Management Dashboard</p>
        <input type="email" placeholder="Enter email" />
        <input type="password" placeholder="Enter password" />

        <button>Login</button>
      </div>
    </div>
  );
}

export default Login;
