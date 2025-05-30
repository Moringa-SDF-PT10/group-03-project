import React, { useContext, useState, useRef } from "react";
import { AuthContext } from "../context/AuthContext";

const EditProfile = () => {
  const { user, updateUser } = useContext(AuthContext);
  const [formData, setFormData] = useState({ ...user });
  const [previewImage, setPreviewImage] = useState(user.profileImage || "");
  const fileInputRef = useRef();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onloadend = () => {
      setPreviewImage(reader.result);
      setFormData((prev) => ({
        ...prev,
        profileImage: reader.result,
      }));
    };
    reader.readAsDataURL(file);
  };

  const handleSave = () => {
    updateUser(formData);
    alert("Profile updated!");
  };

  return (
    <div>
      <h2>Edit Profile</h2>

      <div>
        <label>Name:</label>
        <input
          name="name"
          value={formData.name}
          onChange={handleChange}
        />
      </div>

      <div>
        <label>Email:</label>
        <input
          name="email"
          value={formData.email}
          onChange={handleChange}
        />
      </div>

      <div>
        <label>Profile Picture:</label>
        <input
          type="file"
          accept="image/*"
          onChange={handleImageChange}
          ref={fileInputRef}
        />
        {previewImage && (
          <div>
            <img
              src={previewImage}
              alt="Preview"
              style={{ width: "120px", height: "120px", borderRadius: "8px", marginTop: "10px" }}
            />
          </div>
        )}
      </div>

      <button onClick={handleSave}>Save Changes</button>
    </div>
  );
};

export default EditProfile;
