// src/pages/Profile.jsx
import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

const Profile = () => {
  const { user, updateUser, logout } = useContext(AuthContext);
  const navigate = useNavigate();
  const [editMode, setEditMode] = useState(false);
  const [formData, setFormData] = useState({
    name: user?.name || "",
    bio: user?.bio || "",
    image: user?.image || "",
  });

  const [errors, setErrors] = useState({});
  const [originalData, setOriginalData] = useState({});

  useEffect(() => {
    if (!user) navigate("/login");
    setOriginalData({
      name: user?.name || "",
      bio: user?.bio || "",
      image: user?.image || "",
    });
  }, [user, navigate]);

  const validate = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (formData.image && !/^https?:\/\/.*\.(jpg|jpeg|png|gif)$/i.test(formData.image))
      newErrors.image = "Image URL must be a valid image link";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: "" });
  };

  const handleSave = () => {
    if (!validate()) return;
    updateUser(formData);
    setOriginalData(formData);
    setEditMode(false);
  };

  const handleReset = () => {
    setFormData(originalData);
    setErrors({});
  };

  return (
    <div className="profile-container">
      <h2>My Profile</h2>
      {user ? (
        <div className="profile-card">
          <img
            src={formData.image || "https://via.placeholder.com/150"}
            alt="Profile"
            width={150}
            height={150}
          />
          <div>
            <label>Name:</label>
            {editMode ? (
              <>
                <input
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                />
                {errors.name && <p className="error">{errors.name}</p>}
              </>
            ) : (
              <p>{user.name}</p>
            )}
          </div>

          <div>
            <label>Bio:</label>
            {editMode ? (
              <textarea
                name="bio"
                value={formData.bio}
                onChange={handleChange}
              />
            ) : (
              <p>{user.bio}</p>
            )}
          </div>

          <div>
            <label>Image URL:</label>
            {editMode ? (
              <>
                <input
                  name="image"
                  value={formData.image}
                  onChange={handleChange}
                />
                {errors.image && <p className="error">{errors.image}</p>}
              </>
            ) : (
              <p>{user.image}</p>
            )}
          </div>

          {editMode ? (
            <>
              <button onClick={handleSave}>Save</button>
              <button onClick={handleReset}>Reset</button>
              <button onClick={() => setEditMode(false)}>Cancel</button>
            </>
          ) : (
            <>
              <button onClick={() => setEditMode(true)}>Edit</button>
              <button onClick={logout}>Logout</button>
            </>
          )}
        </div>
      ) : (
        <p>Please log in to see your profile.</p>
      )}
    </div>
  );
};

export default Profile;
