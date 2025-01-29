const setDefault = (key: any, value: any) => (key ? key : value)

const config = {
  appUrl: setDefault(
    `${process.env.NEXT_PUBLIC_SERVICES_APP_URL}`,
    "http://localhost:3001"
  ),
  apiUrl: setDefault(
    `${process.env.NEXT_PUBLIC_SERVICES_API_URL}`,
    "https://hrisbackend-pearl.vercel.app"
  ),
  secret: setDefault(process.env.NEXT_PUBLIC_REACT_SECRET_KEY, ""),
  authorization: setDefault(process.env.REACT_APP_AUTHORIZATION, ""),
}

export default config