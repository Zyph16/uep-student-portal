import { createContext, useContext, useState, ReactNode, useEffect } from "react";

interface AuthContextProps {
  userid: string | null;
  empid: string | null;
  token: string | null;
  schoolyear: string | null;
  semester: string | null;
  login: (
    userid: string,
    empid: string,
    token: string,
    schoolyear: string,
    semester: string
  ) => void;
  logout: () => void;
}

const AuthContext = createContext<AuthContextProps>({
  userid: null,
  empid: null,
  token: null,
  schoolyear: null,
  semester: null,
  login: () => {},
  logout: () => {},
});

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [userid, setuserid] = useState<string | null>(null);
  const [empid, setempid] = useState<string | null>(null);
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
      setuserid(storeduserid);
      setempid(storedempid);
      setToken(storedToken);
      setSchoolyear(storedSchoolyear);
      setSemester(storedSemester);
    }
  }, []);

  const login = (userid: string, empid: string, token: string, schoolyear: string, semester: string) => {
    setuserid(userid);
    setempid(empid);
    setToken(token);
    setSchoolyear(schoolyear);
    setSemester(semester);

    // Store the values in local storage
    localStorage.setItem("userid", userid);
    localStorage.setItem("empid", empid);
    localStorage.setItem("token", token);
    localStorage.setItem("schoolyear", schoolyear);
    localStorage.setItem("semester", semester);
  };

  const logout = () => {
    setuserid(null);
    setempid(null);
    setToken(null);
    setSchoolyear(null);
    setSemester(null);
    localStorage.clear();
  };

  return (
    <AuthContext.Provider
      value={{ userid, empid, token, schoolyear, semester, login, logout }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
