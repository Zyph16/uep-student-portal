const setDefault = (key: string | undefined, value: string) => key ?? value;

const config = {
  appUrl: setDefault(
    process.env.NEXT_PUBLIC_SERVICES_APP_URL,
    "http://uep-student-portal.vercel.app"
  ),
  apiUrl: setDefault(
    process.env.NEXT_PUBLIC_SERVICES_API_URL,
    "http://backend-seven-chi-74.vercel.app "
  ),
  secret: setDefault(process.env.NEXT_PUBLIC_REACT_SECRET_KEY, ""),
  authorization: setDefault(process.env.REACT_APP_AUTHORIZATION, ""),
};

export default config;
