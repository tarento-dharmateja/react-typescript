import { useState } from "react";

export const LoggedIn = () => {
  const [state, setState] = useState(false);
  const handleLogin = () => {
    setState(true);
  };
  const handleLogout = () => {
    setState(true);
  };
  return (
    <div>
      <button onClick={handleLogin}>Login</button>
      <button onClick={handleLogout}>Logout</button>
      <div>User is {state ? "LoggedIn" : "LoggedOut"}</div>
    </div>
  );
};
