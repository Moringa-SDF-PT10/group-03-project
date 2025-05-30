import React, { createContext, useState } from "react";

export const AuthContext = createContext();

const dummyUsers = [
  {
    id: 1,
    name: "Chadwin",
    email: "chadwin@example.com",
    password: "1234",
    profileImage: "", // Added image field
  },
];

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [users, setUsers] = useState(dummyUsers);

  const login = (email, password) => {
    const foundUser = users.find(
      (u) => u.email === email && u.password === password
    );
    if (foundUser) {
      setUser(foundUser);
      return true;
    }
    return false;
  };

  const signup = (name, email, password) => {
    const existingUser = users.find((u) => u.email === email);
    if (existingUser) return false;

    const newUser = {
      id: users.length + 1,
      name,
      email,
      password,
      profileImage: "", // Empty by default
    };
    setUsers([...users, newUser]);
    setUser(newUser);
    return true;
  };

  const logout = () => {
    setUser(null);
  };

  const updateUser = (updatedData) => {
    setUser(updatedData);
    setUsers((prevUsers) =>
      prevUsers.map((u) => (u.id === updatedData.id ? updatedData : u))
    );
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        login,
        logout,
        signup,
        updateUser,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
