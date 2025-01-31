import "./Dashboard.css";

const Dashboard = () => {
  return (
    <div className="dashboard-container">
      {/* Sidebar */}
      <div className="sidebar">
        <h2>Dashboard</h2>
        <ul>
          <li>Home</li>
          <li>Profile</li>
          <li>Settings</li>
          <li>Check thissss</li>
        </ul>
      </div>
      {/* Main Content */}
      <div className="main-content">
        {/* Header */}
        <div className="header">Simple Dashboard</div>
        {/* Content */}
        <div className="content">
          <p>Welcome to the dashboard. Here you can manage your content.</p>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
