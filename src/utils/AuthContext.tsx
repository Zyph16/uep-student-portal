import { createContext, useContext, useState, ReactNode, useEffect } from "react";

interface AuthContextProps {
  user_id: string | null;
  username: string | null;
  token: string | null;
  login: (
    user_id: string,
    username: string,
    token: string,
  ) => void;
  logout: () => void;
}

const AuthContext = createContext<AuthContextProps>({
  user_id: null,
  username: null,
  token: null,
  login: () => {},
  logout: () => {},
});

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user_id, setuser_id] = useState<string | null>(null);
  const [username, setusername] = useState<string | null>(null);
  const [token, setToken] = useState<string | null>(null);
  const [schoolyear, setSchoolyear] = useState<string | null>(null);
  const [semester, setSemester] = useState<string | null>(null);

  useEffect(() => {
    const storeduserid = localStorage.getItem("userid");
    const storedempid = localStorage.getItem("empid");
    const storedToken = localStorage.getItem("token");
    const storedSchoolyear = localStorage.getItem("schoolyear");
    const storedSemester = localStorage.getItem("semester");

    if (storeduserid && storedempid && storedToken && storedSchoolyear && storedSemester) {
      setuser_id(storeduserid);
      setusername(storedempid);
      setToken(storedToken);
      setSchoolyear(storedSchoolyear);
      setSemester(storedSemester);
    }
  }, []);

  const login = (user_id: string, username: string, token: string) => {
    setuser_id(user_id);
    setusername(username);
    setToken(token);
    setSchoolyear(schoolyear);
    setSemester(semester);

    // Store the values in local storage
    localStorage.setItem("userid", user_id);
    localStorage.setItem("empid", username);
    localStorage.setItem("token", token);
  };

  const logout = () => {
    setuser_id(null);
    setusername(null);
    setToken(null);
    setSchoolyear(null);
    setSemester(null);
    localStorage.clear();
  };

  return (
    <AuthContext.Provider
      value={{ user_id, username, token, login, logout }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
