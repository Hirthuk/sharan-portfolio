import React, { createContext, useContext, useState } from "react";

// Create the context
const ProfileContext = createContext();

// Provider component
export function ProfileProvider({ children }) {
 const [ham, setHam] = useState(false);
  const [profile, setProfile] = useState({
    name: "Sharan",
    title: "Web Developer",
    bio: "I craft modern, responsive, and engaging web experiences. Passionate about React, UI/UX, and building products that delight users.",
    avatar: "https://avatars.githubusercontent.com/u/9919?v=4",
    // Add more fields as needed
  });
  const [darkMode, setDarkMode] = useState(true);
  return (
    <ProfileContext.Provider value={{ profile, setProfile, ham, setHam, darkMode, setDarkMode }}>
      {children}
    </ProfileContext.Provider>
  );
}

// Custom hook for easy usage
export function useProfile() {
  return useContext(ProfileContext);
}