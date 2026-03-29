import React from "react";

const AdminDashboard = () => {
  return (
    <div style={{ padding: "20px", fontFamily: "Arial" }}>
      <h1>Admin Dashboard</h1>

      <div style={{ display: "flex", gap: "20px", marginTop: "20px" }}>
        <div style={{ border: "1px solid #ddd", padding: "20px", borderRadius: "8px" }}>
          <h3>Total Students</h3>
          <p>120</p>
        </div>

        <div style={{ border: "1px solid #ddd", padding: "20px", borderRadius: "8px" }}>
          <h3>Total Courses</h3>
          <p>15</p>
        </div>

        <div style={{ border: "1px solid #ddd", padding: "20px", borderRadius: "8px" }}>
          <h3>Total Enrollments</h3>
          <p>320</p>
        </div>
      </div>

      <div style={{ marginTop: "40px" }}>
        <h2>Quick Actions</h2>
        <ul>
          <li>Create Course</li>
          <li>Manage Users</li>
          <li>Integrations</li>
        </ul>
      </div>
    </div>
  );
};

export default AdminDashboard;
