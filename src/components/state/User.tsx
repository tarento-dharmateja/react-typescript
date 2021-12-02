import { useState } from "react";
type User = {
  name: string;
  email: string;
};

export const User = () => {
  const [user, setUser] = useState<User>({} as User);
  const handleLogin = () => {
    setUser({
      name: "teja",
      email: "test@test.co",
    });
  };

  const handleLogout = () => {
    //setUser(null);
  };

  return (
    <div>
      <button onClick={handleLogin}>Login</button>
      <button onClick={handleLogout}>Logout</button>
      <div>User name {user.name}</div>
      <div>User email {user.email}</div>
    </div>
  );
};
