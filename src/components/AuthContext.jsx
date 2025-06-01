import React, { createContext, useState, useEffect, useContext } from 'react';
import bcrypt from 'bcryptjs';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [users, setUsers] = useState(() => {
    const storedUsers = localStorage.getItem('bookExplorerUsers');
    if (storedUsers) {
      return JSON.parse(storedUsers);
    } else {
      const testUser = {
        id: 1,
        name: "Test User",
        email: "test@example.com",
        password: bcrypt.hashSync("password123", 10),
        profileImage: ""
      };
      localStorage.setItem('bookExplorerUsers', JSON.stringify([testUser]));
      return [testUser];
    }
  });
  const [loading, setLoading] = useState(true);

  // Load user from localStorage on initial render
  useEffect(() => {
    const savedUser = JSON.parse(localStorage.getItem('bookExplorerUser'));
    if (savedUser) {
      const validUser = users.find(u => u.id === savedUser.id);
      if (validUser) setUser(validUser);
    }
    setLoading(false);
  }, [users]);

  const syncUsersToStorage = (updatedUsers) => {
    setUsers(updatedUsers);
    localStorage.setItem('bookExplorerUsers', JSON.stringify(updatedUsers));
  };

  const login = (email, password) => {
    const foundUser = users.find(u => u.email === email);
    if (!foundUser) return false;

    const passwordMatch = bcrypt.compareSync(password, foundUser.password);
    if (passwordMatch) {
      setUser(foundUser);
      localStorage.setItem('bookExplorerUser', JSON.stringify(foundUser));
      return true;
    }
    return false;
  };

  const signup = (name, email, password) => {
    if (users.some(u => u.email === email)) return false;

    const newUser = {
      id: Date.now(),
      name,
      email,
      password: bcrypt.hashSync(password, 10),
      profileImage: ""
    };

    const updatedUsers = [...users, newUser];
    syncUsersToStorage(updatedUsers);
    setUser(newUser);
    localStorage.setItem('bookExplorerUser', JSON.stringify(newUser));
    return true;
  };

  const logout = () => {
    localStorage.removeItem('bookExplorerUser');
    setUser(null);
  };

  const updateUser = (updatedData) => {
    const updatedUser = {
      ...user,
      ...updatedData,
      profileImage: updatedData.profileImage || user?.profileImage || ""
    };
    setUser(updatedUser);

    const updatedUsers = users.map(u => u.id === updatedUser.id ? updatedUser : u);
    syncUsersToStorage(updatedUsers);
    localStorage.setItem('bookExplorerUser', JSON.stringify(updatedUser));
  };

  const updatePassword = (currentPassword, newPassword) => {
    if (!user) return false;

    const passwordMatch = bcrypt.compareSync(currentPassword, user.password);
    if (!passwordMatch) return false;

    const updatedUser = {
      ...user,
      password: bcrypt.hashSync(newPassword, 10)
    };

    setUser(updatedUser);
    const updatedUsers = users.map(u => u.id === updatedUser.id ? updatedUser : u);
    syncUsersToStorage(updatedUsers);
    localStorage.setItem('bookExplorerUser', JSON.stringify(updatedUser));
    return true;
  };

  const deleteAccount = () => {
    if (!user) return false;

    const updatedUsers = users.filter(u => u.id !== user.id);
    syncUsersToStorage(updatedUsers);
    localStorage.removeItem('bookExplorerUser');
    setUser(null);
    return true;
  };

  const value = {
    user,
    loading,
    login,
    logout,
    signup,
    updateUser,
    updatePassword,
    deleteAccount
  };

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
