function Settings() {
  return (
    <div className="page">
      <h1>Settings</h1>

      <div className="card">
        <h3>Application Settings</h3>

        <p>🌙 Theme: Light</p>
        <p>🔔 Notifications: Enabled</p>
        <p>🌐 Language: English</p>

        <button className="save-btn">Save Changes</button>
      </div>
    </div>
  );
}

export default Settings;
