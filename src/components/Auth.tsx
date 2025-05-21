import React, { useState } from "react";
import { useAuthStore } from "../store/authStore";

const Auth = () => {
  const [name, setName] = useState("");
  const { user, login, logout } = useAuthStore();

  return (
    <div>
      {user ? (
        <>
          <p>Welcome, {user}!</p>
          <button onClick={logout}>Logout</button>
        </>
      ) : (
        <>
          <input
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Enter name"
          />
          <button onClick={() => login(name)}>Login</button>
        </>
      )}
    </div>
  );
};

export default Auth;
