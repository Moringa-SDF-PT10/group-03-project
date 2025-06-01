import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "./AuthContext";
import ProfileNavbar from "./ProfileNavbar";

const Profile = () => {
  const { user, updateUser, updatePassword, logout, deleteAccount } = useAuth();
  const navigate = useNavigate();

  const [profileData, setProfileData] = useState({
    name: user?.name || "",
    email: user?.email || "",
    profileImage: user?.profileImage || "",
  });

  const [passwordData, setPasswordData] = useState({
    current: "",
    new: "",
    confirm: "",
  });

  const [activeSection, setActiveSection] = useState("profile");
  const [message, setMessage] = useState({ text: "", type: "" });
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [imagePreview, setImagePreview] = useState(user?.profileImage || "");

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    if (file.size > 2 * 1024 * 1024) {
      setMessage({ text: "Image must be less than 2MB", type: "error" });
      return;
    }

    const reader = new FileReader();
    reader.onload = () => {
      setImagePreview(reader.result);
      setProfileData({ ...profileData, profileImage: reader.result });
    };
    reader.readAsDataURL(file);
  };

  const handleProfileUpdate = (e) => {
    e.preventDefault();
    updateUser(profileData);
    setMessage({ text: "Profile updated successfully!", type: "success" });
  };

  const handlePasswordChange = (e) => {
    e.preventDefault();

    if (passwordData.new !== passwordData.confirm) {
      setMessage({ text: "Passwords don't match", type: "error" });
      return;
    }

    if (passwordData.new.length < 6) {
      setMessage({
        text: "Password must be at least 6 characters",
        type: "error",
      });
      return;
    }

    const success = updatePassword(passwordData.current, passwordData.new);
    if (success) {
      setMessage({ text: "Password updated successfully!", type: "success" });
      setPasswordData({ current: "", new: "", confirm: "" });
    } else {
      setMessage({ text: "Current password is incorrect", type: "error" });
    }
  };

  return (
    <div className="profile-container">
      {/* Sidebar Navigation */}
      <ProfileNavbar/>
      <div className="profile-sidebar">
        <div className="user-card">
          <div className="avatar-upload">
            <img
              src={imagePreview || "/default-avatar.png"}
              alt="Profile"
              className="profile-avatar"
            />
            <label className="avatar-edit">
              📷
              <input
                type="file"
                accept="image/*"
                onChange={handleImageUpload}
                style={{ display: "none" }}
              />
            </label>
          </div>
          <h3>{user?.name || "User"}</h3>
          <p>{user?.email || "user@example.com"}</p>
        </div>

        <nav className="profile-nav">
          <button
            className={`nav-item ${
              activeSection === "profile" ? "active" : ""
            }`}
            onClick={() => setActiveSection("profile")}
          >
            👤 Profile Settings
          </button>
          <button
            className={`nav-item ${
              activeSection === "password" ? "active" : ""
            }`}
            onClick={() => setActiveSection("password")}
          >
            🔒 Change Password
          </button>
          <button className="nav-item logout" onClick={logout}>
            🚪 Log Out
          </button>
          <button
            className="nav-item danger"
            onClick={() => setShowDeleteModal(true)}
          >
            🗑️ Delete Account
          </button>
        </nav>
      </div>

      {/* Main Content Area */}
      <div className="profile-content">
        <div className="form-container">
          {message.text && (
            <div className={`alert alert-${message.type}`}>{message.text}</div>
          )}

          {activeSection === "profile" ? (
            <form onSubmit={handleProfileUpdate} className="profile-form">
              <h2>👤 Profile Information</h2>

              <div className="form-group">
                <label>Full Name</label>
                <input
                  type="text"
                  value={profileData.name}
                  onChange={(e) =>
                    setProfileData({ ...profileData, name: e.target.value })
                  }
                  className="form-input"
                  placeholder="Enter your name"
                />
              </div>

              <div className="form-group">
                <label>Email Address</label>
                <input
                  type="email"
                  value={profileData.email}
                  onChange={(e) =>
                    setProfileData({ ...profileData, email: e.target.value })
                  }
                  className="form-input"
                  placeholder="Enter your email"
                  disabled
                />
              </div>

              <button type="submit" className="btn-primary">
                ✔️ Save Changes
              </button>
            </form>
          ) : (
            <form onSubmit={handlePasswordChange} className="password-form">
              <h2>🔒 Change Password</h2>

              <div className="form-group">
                <label>Current Password</label>
                <input
                  type="password"
                  value={passwordData.current}
                  onChange={(e) =>
                    setPasswordData({
                      ...passwordData,
                      current: e.target.value,
                    })
                  }
                  className="form-input"
                  placeholder="Enter current password"
                />
              </div>

              <div className="form-group">
                <label>New Password</label>
                <input
                  type="password"
                  value={passwordData.new}
                  onChange={(e) =>
                    setPasswordData({ ...passwordData, new: e.target.value })
                  }
                  className="form-input"
                  placeholder="Enter new password (min 6 characters)"
                />
              </div>

              <div className="form-group">
                <label>Confirm New Password</label>
                <input
                  type="password"
                  value={passwordData.confirm}
                  onChange={(e) =>
                    setPasswordData({
                      ...passwordData,
                      confirm: e.target.value,
                    })
                  }
                  className="form-input"
                  placeholder="Confirm new password"
                />
              </div>

              <button type="submit" className="btn-primary">
                ✔️ Update Password
              </button>
            </form>
          )}
        </div>
      </div>

      {/* Delete Account Modal */}
      {showDeleteModal && (
        <div className="modal-overlay">
          <div className="modal-content">
            <h3>🗑️ Delete Account</h3>
            <p>
              Are you sure you want to permanently delete your account? This
              action cannot be undone.
            </p>

            <div className="modal-actions">
              <button
                className="btn-danger"
                onClick={() => {
                  deleteAccount();
                  navigate("/");
                }}
              >
                🗑️ Delete My Account
              </button>
              <button
                className="btn-secondary"
                onClick={() => setShowDeleteModal(false)}
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Profile;
